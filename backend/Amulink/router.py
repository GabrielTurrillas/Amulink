from apps.terapeuta.views import TerapeutaViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('terapeuta', TerapeutaViewSet)