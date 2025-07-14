from django.shortcuts import render
from .models import AboutMe, Education, Skill, Projects

# Create your views here.

def home(request):
    about_me_sections = AboutMe.objects.all()
    educations = Education.objects.all()
    skills = Skill.objects.all()
    projects = Projects.objects.filter(is_visible=True)
    
    context = {
        'about_me_sections': about_me_sections,
        'educations': educations,
        'skills': skills,
        'projects': projects,
    }
    
    return render(request, 'index.html', context)
