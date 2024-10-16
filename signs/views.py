"""
SignFilterView class-based view for filtering and displaying signs.

This view renders the 'signs/index.html' template and is part of the EPICS DASL project.
It is responsible for handling the logic related to filtering sign data and presenting it
to the user. This file is crucial for the user interface, as it connects the backend logic
with the frontend template, ensuring that users can interact with and view the filtered
sign data effectively.

Attributes:
    template_name (str): The path to the template used for rendering the view.
"""

from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.
class SignFilterView(TemplateView):
    template_name = 'signs/index.html'
