import json

from jimm.api.tests.base import BaseTestCase
from jimm.api.models import (
    Order
)

class OrderTestCase(BaseTestCase):

    content_type = 'application/json'
    endpoint_url = '/api/order/{uuid}'
    fixtures = ['order_fixture.json']
    order_uuid = 'ab' * 16

    def test_create_order(self):
        post_data = {
            'bike': 'test bike',
            'description': 'test description'
        }
        resp = self.client.post(self.endpoint_url.format(uuid=''), data=json.dumps(post_data),
                                content_type=self.content_type)
        self.assertEqual(resp.status_code, 201)
        new_order = json.loads(resp.content)
        self.assertEqual(len(new_order['uuid']), 32)
        db_order = Order.objects.get(uuid=new_order['uuid'])
        self.assertEqual(new_order['status'], db_order.status)
        self.assertEqual(new_order['bike'], db_order.bike)
        self.assertEqual(new_order['qrcode_uuid'], db_order.qrcode_uuid)

    def test_get_order_by_uuid(self):
        resp = self.client.get(self.endpoint_url.format(uuid=self.order_uuid),
                               content_type=self.content_type)
        self.assertEqual(resp.status_code, 200)
        db_order = Order.objects.get(uuid=self.order_uuid)
        order = json.loads(resp.content)[0]
        self.assertEqual(db_order.uuid, order['uuid'])
