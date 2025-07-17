from tkinter import image_names
from django.db import models

# Create your models here.

class AboutMe(models.Model):
    title = models.CharField(max_length=200, default="About Me")
    description = models.TextField()
    order = models.IntegerField(default=0)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name_plural = "About Me"
        ordering = ['order']
    
    def __str__(self):
        return f"{self.title} - {self.order}"

class Education(models.Model):
    school_name = models.CharField(max_length=200)
    period = models.CharField(max_length=100)
    degree = models.CharField(max_length=200)
    description = models.TextField()
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']
        verbose_name_plural = "Education"
    
    def __str__(self):
        return f"{self.school_name} - {self.degree}"

class Experience(models.Model):
    workplace_name = models.CharField(max_length=200)
    period = models.CharField(max_length=100)
    position = models.CharField(max_length=200)
    description = models.TextField()
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']
        verbose_name_plural = "Experience"
    
    def __str__(self):
        return f"{self.workplace_name} - {self.position}"

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = "Contacts"
    
    def __str__(self):
        return f"{self.name} - {self.email} - {self.created_at.strftime('%Y-%m-%d %H:%M')}"

class Skill(models.Model):
    name = models.CharField(max_length=100)
    icon_file = models.CharField(max_length=100)
    github_url = models.URLField(blank=True)
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']
        verbose_name_plural = "Skills"
    
    def __str__(self):
        return self.name

class Projects(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    github_url = models.URLField(blank=True)
    image = models.ImageField(upload_to='project_images/', blank=True, null=True, help_text="Upload project screenshot")
    order = models.IntegerField(default=0)
    is_visible = models.BooleanField(default=True, help_text="Show this project in the main view")
    
    class Meta:
        ordering = ['order']
        verbose_name_plural = "Projects"
    
    def __str__(self):
        return f"{self.title} - {self.order}"
    