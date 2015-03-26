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


class OrderView(APIView):

    renderer_classes = (JSONRenderer,)

    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        new_order = Order.objects.create(**serializer.validated_data)
        serializer = OrderSerializer(new_order)
        return Response(serializer.data)
