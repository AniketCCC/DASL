from django.urls import path, include
from rest_framework import routers
from .api import SignViewSet, SignNameViewSet

from . import views
# Create your views here.
router = routers.DefaultRouter()
router.register("api/signs", SignViewSet, "signs")
router.register("api/sign", SignNameViewSet, "sign_name")

#urlpatterns = [
    #path("", views.SignFilterView.as_view(), name = "user-filter" )
#]
urlpatterns = router.urls
