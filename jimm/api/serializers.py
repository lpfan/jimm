from rest_framework import serializers

from jimm.api.models import (
    Client,
    Order
)


class ClientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Client


class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
