from django.conf.urls import patterns, url

from jimm.api import views

urlpatterns = patterns('',
    url(r'service/order/', views.ServiceOrderListView.as_view()),
    url(r'order/$', views.OrderView.as_view()),
)
