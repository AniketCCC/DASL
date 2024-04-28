from django.urls import path, include
from rest_framework import routers
from .api import SignViewSet

from . import views
# Create your views here.
router = routers.DefaultRouter()
router.register("api/signs", SignViewSet, "signs")

#urlpatterns = [
    #path("", views.SignFilterView.as_view(), name = "user-filter" )
#]
urlpatterns = router.urls
