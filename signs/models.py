from django.db import models
from django.conf import settings

class Tag(models.Model):
    name = models.CharField(max_length=200, default = "")
"""
class Sign(models.Model):
    sign_name = models.CharField(max_length=200)
    #pub_date = models.DateTimeField("date published")
    PARAMETER_CHOICES = {
        "HANDSHAPES" : {
            "1": "1",
            "3": "3"
        },
        "FLEXIONS" : {
            "Bent": "Bent",
            "Crossed": "Crossed"
        },
        "SIGNTYPES" : {
            "Asymmetrical Different Handshape": "Asymmetrical Different Handshape",
            "Asymmetrical Same Handshape": "Asymmetrical Same Handshape"
        },
        "MAJOR LOCATIONS" : {
            "Body": "Body",
            "Hand": "Hand"
        },
        "MINOR LOCATIONS" : {
            "Body Away": "Body Away",
            "Eye": "Eye"
        }
    }

    #tags = models.ManyToManyField(Tag)
    #created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null = True)

    handshape      = models.CharField(max_length=200, choices=PARAMETER_CHOICES["HANDSHAPES"], default="1"),
    flexion        = models.CharField(max_length=200, choices=PARAMETER_CHOICES["FLEXIONS"], default="Bent"),
    sign_type      = models.CharField(max_length=200, choices=PARAMETER_CHOICES["SIGNTYPES"], default="Asymmetrical Different Handshape"),
    major_location = models.CharField(max_length=200, choices=PARAMETER_CHOICES["MAJOR LOCATIONS"], default="Body"),
    minor_location = models.CharField(max_length=200, choices=PARAMETER_CHOICES["MINOR LOCATIONS"], default="Body Away")
"""
class Sign(models.Model):
    PARAMETER_CHOICES = {
        "HANDSHAPES" : {
            "1": "1",
            "3": "3"
        },
        "FLEXIONS" : {
            "Bent": "Bent",
            "Crossed": "Crossed"
        },
        "SIGNTYPES" : {
            "Asymmetrical Different Handshape": "Asymmetrical Different Handshape",
            "Asymmetrical Same Handshape": "Asymmetrical Same Handshape"
        },
        "MAJOR LOCATIONS" : {
            "Body": "Body",
            "Hand": "Hand"
        },
        "MINOR LOCATIONS" : {
            "Body Away": "Body Away",
            "Eye": "Eye"
        }
    }


    sign_name = models.CharField(max_length=100, default="")
    handshape = models.CharField(max_length=100,  default="1")
    location = models.CharField(max_length=100,  default="Forehead")
    movement = models.CharField(max_length=100,  default="Elbow Out")
    #major_location = models.CharField(max_length=100, choices=PARAMETER_CHOICES["MAJOR LOCATIONS"], default="Body")
    #minor_location = models.CharField(max_length=100, choices=PARAMETER_CHOICES["MINOR LOCATIONS"], default="Body Away")

class Demonstration(models.Model):
    pub_date = models.DateTimeField("date published")
    sign = models.ForeignKey(Sign, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null = True)

class Set(models.Model):
    contained_signs = models.ManyToManyField("Sign", related_name="signs")
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null = True)


