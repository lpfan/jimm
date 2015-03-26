from django.test import TestCase, Client


class BaseTestCase(TestCase):

    def setUp(self):
        self.client = Client()

    def tearDown(self):
        self.client = None
