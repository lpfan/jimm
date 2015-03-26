from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response

from jimm.api.serializers import (
    OrderSerializer
)
from jimm.api.models import (
    Order
)


class ServiceOrderListView(generics.ListCreateAPIView):
    """
        Generic module view for list all orders.
    Must be protected resource and shoul be visible only for internall staff
    """
    pass


class OrderListView(generics.ListCreateAPIView):

    queryset = Order.objects.all()
    renderer_classes = (JSONRenderer,)
    serializer_class = OrderSerializer
