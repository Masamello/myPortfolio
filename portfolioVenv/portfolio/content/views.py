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
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        # メール送信
        send_mail(
            subject=f'Portfolio Contact from {name}',
            message=f'Name: {name}\nEmail: {email}\n\nMessage:\n{message}',
            from_email='kojimasa1205@gmail.com',  # 送信元
            recipient_list=['kojimasa1205@gmail.com'],  # 受信先
            fail_silently=False,
        )

        # Contactモデルに保存
        Contact.objects.create(name=name, email=email, message=message)

        messages.success(request, 'Thank you for your message!')
        return redirect('/')
    else:
        print("=== GET REQUEST ===")
    return render(request, 'index.html', context)
