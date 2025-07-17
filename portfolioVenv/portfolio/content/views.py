from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from .models import AboutMe, Education, Experience, Contact, Skill, Projects

import logging

# Create your views here.

def home(request):
    print("===HOME VIEW CALLED===")
    about_me_sections = AboutMe.objects.all()
    educations = Education.objects.all()
    experiences = Experience.objects.all()
    skills = Skill.objects.all()
    projects = Projects.objects.filter(is_visible=True)

    # contextを最初に定義
    context = {
        'about_me_sections': about_me_sections,
        'educations': educations,
        'experiences': experiences,
        'skills': skills,
        'projects': projects,
    }
    
    if request.method == 'POST':
        print("=== FORM SUBMITTED ===")
        send_mail(
            subject='Test Email',
            message='This is a test email from Django.',
            from_email='test@example.com',
            recipient_list=['kojimasa1205@gmail.com'],
            fail_silently=False,
        )
        print("=== TEST EMAIL SENT ===")
        return render(request, 'index.html', context)
    else:
        print("=== GET REQUEST ===")
    return render(request, 'index.html', context)
