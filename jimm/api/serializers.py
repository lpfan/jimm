from django.contrib.auth import authenticate
from rest_framework import serializers, exceptions
from django.utils.translation import ugettext_lazy as _

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


class AuthTokenSerializer(serializers.Serializer):
    """
    Serialize provided user's credentials
    """

    email = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        """
        Check user's credentials
        """
        email = attrs.get('email')
        password = attrs.get('password')

        if email and password:
            user = authenticate(email=email, password=password)

            if user:
                if not user.is_active:
                    msg = _('User account is disabled.')
                    raise exceptions.ValidationError(msg)
            else:
                msg = _('Unable to log in with provided credentials.')
                raise exceptions.ValidationError(msg)
        else:
            msg = _('Must include "username" and "password".')
            raise exceptions.ValidationError(msg)

        attrs['user'] = user
        return attrs
