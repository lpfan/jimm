from django.conf.urls import patterns, url

from jimm.api import views

urlpatterns = patterns('',
    url(r'service/order/', views.ServiceOrderListView.as_view()),
    url(r'order/', views.OrderListView.as_view()),
    url(r'order/(?P<uuid>\w{32})', views.OrderDetailView.as_view()),
    url(r'token-auth/$', views.ObtainAuthToken.as_view()),
    url(r'register/', views.RegisterView.as_view()),
    url(r'current_user/$', views.CurrentUserView.as_view()),
)
