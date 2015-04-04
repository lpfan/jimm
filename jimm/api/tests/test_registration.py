import json

from jimm.api.tests.base import BaseTestCase
from jimm.api.models import (
    User
)

class RegistrationTestCase(BaseTestCase):

    content_type = 'application/json'
    route = '/api/register/'
    fixtures = []

    def test_register_client(self):
        post_data = {
            'username': 'testuser',
            'email': 'test@mail.com',
            'password': 'testpassword',
            'phone': ''
        }
        resp = self.client.post(self.route, data=json.dumps(post_data),
                                content_type=self.content_type)
        self.assertEqual(resp.status_code, 201)
        json_resp = json.loads(resp.content)
        client = User.objects.get(id=json_resp['id'])
        self.assertEqual(client.email, post_data['email'])
