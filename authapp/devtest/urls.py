from django.conf.urls import include, url
from rest_framework import routers
from .views import UserViewSet
from rest_framework.authtoken.views import ObtainAuthToken

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    url('', include(router.urls)),
    #url('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
    url('auth/', ObtainAuthToken.as_view() )
]