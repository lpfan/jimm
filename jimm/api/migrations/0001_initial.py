# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('uuid', models.CharField(max_length=32, unique=True, null=True)),
                ('bike', models.CharField(max_length=200)),
                ('description', models.TextField(null=True, blank=True)),
                ('status', models.CharField(default=b'pending', max_length=25, choices=[(b'pending', b'Pending'), (b'in_progress', b'In progress'), (b'ready', b'Ready')])),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('ready_date', models.DateTimeField(null=True, blank=True)),
                ('qrcode_uuid', models.CharField(max_length=6, unique=True, null=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('user_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('phone', models.CharField(max_length=15, null=True, blank=True)),
            ],
            options={
                'abstract': False,
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
            },
            bases=('auth.user',),
        ),
        migrations.AddField(
            model_name='order',
            name='client',
            field=models.ForeignKey(to='api.User', null=True),
            preserve_default=True,
        ),
    ]
