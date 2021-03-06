from django.db import models
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

from jimm.shared_lib.utils import generate_uuid


class User(User):

    USERNAME_FIELD = 'email'
    phone = models.CharField(max_length=15, blank=True, null=True)

    def save(self, *args, **kwargs):
        super(User, self).save(*args, **kwargs)
        Token.objects.create(user=self)


class Order(models.Model):

    PENDING = 'pending'
    IN_PROGRESS = 'in_progress'
    READY = 'ready'

    STATUS_CHOICES = (
        (PENDING, 'Pending'),
        (IN_PROGRESS, 'In progress'),
        (READY, 'Ready')
    )

    uuid = models.CharField(max_length=32, unique=True, null=True)
    bike = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=25, choices=STATUS_CHOICES, default=PENDING)
    created_date = models.DateTimeField(auto_now_add=True)
    ready_date = models.DateTimeField(blank=True, null=True)
    qrcode_uuid = models.CharField(max_length=6, unique=True, null=True)
    client = models.ForeignKey(User, null=True)

    def save(self, *args, **kwargs):
        self.uuid = generate_uuid(length=32)
        self.qrcode_uuid = generate_uuid(length=6)
        super(Order, self).save(*args, **kwargs)

    def __unicode__(self):
        return 'Order #%s: %s' % (self.pk, self.bike)
