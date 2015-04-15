from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from jimm.api.serializers import (
    OrderSerializer,
    AuthTokenSerializer,
    UserSerializer
)
from jimm.api.models import (
    Order,
    User
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


class OrderDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Detail view for order
    """

    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class ObtainAuthToken(APIView):

    def post(self, request):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})


class RegisterView(APIView):

    renderer_classes = (JSONRenderer,)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        client = User()
        client.username = serializer.validated_data['username']
        client.email = serializer.validated_data['email']
        client.phone = serializer.validated_data['phone']
        client.set_password(serializer.validated_data['password'])
        client.save()
        return Response(data=UserSerializer(client).data, status=201)


class CurrentUserView(APIView):

    renderer_classes = (JSONRenderer,)

    def get(self, request):
        return Response({'username': 'Misha'})
