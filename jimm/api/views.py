from rest_framework import status
from rest_framework import generics

class ServiceOrderListView(generics.ListCreateAPIView):
    """
        Generic module view for list all orders.
    Must be protected resource and shoul be visible only for internall staff
    """
