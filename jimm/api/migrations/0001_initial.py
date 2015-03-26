# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('email', models.EmailField(max_length=75, null=True, blank=True)),
                ('phone', models.CharField(max_length=15, null=True, blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
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
                ('client', models.ForeignKey(to='api.Client', null=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
