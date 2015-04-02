from django.conf.urls import patterns, url
from rest_framework.authtoken import views as rest_views

from jimm.api import views

urlpatterns = patterns('',
    url(r'service/order/', views.ServiceOrderListView.as_view()),
    url(r'order/', views.OrderListView.as_view()),
    url(r'order/(?P<uuid>\w{32})', views.OrderDetailView.as_view()),
    url(r'^token-auth/', rest_views.obtain_auth_token)
)
