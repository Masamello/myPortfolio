from django.contrib import admin
from .models import AboutMe, Education, Experience, Contact, Skill, Projects

@admin.register(AboutMe)
class AboutMeAdmin(admin.ModelAdmin):
    list_display = ['title', 'order', 'updated_at']
    list_editable = ['order']
    readonly_fields = ['updated_at']
    search_fields = ['title', 'description']
    list_filter = ['updated_at']

@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ['school_name', 'degree', 'period', 'order']
    list_editable = ['order']
    search_fields = ['school_name', 'degree', 'description']
    list_filter = ['period']

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ['workplace_name', 'position', 'period', 'order']
    list_editable = ['order']
    search_fields = ['workplace_name', 'position', 'description']
    list_filter = ['period']

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'created_at', 'is_read']
    list_editable = ['is_read']
    readonly_fields = ['created_at']
    search_fields = ['name', 'email', 'message']
    list_filter = ['is_read', 'created_at']
    ordering = ['-created_at']

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'icon_file', 'order', 'github_url']
    list_editable = ['order']
    search_fields = ['name', 'icon_file']
    list_filter = ['order']

@admin.register(Projects)
class ProjectsAdmin(admin.ModelAdmin):
    list_display = ['title', 'order', 'is_visible', 'github_url']
    list_editable = ['order', 'is_visible']
    search_fields = ['title', 'description']
    list_filter = ['is_visible', 'order']
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'description', 'order')
        }),
        ('Media & Links', {
            'fields': ('image', 'github_url')
        }),
        ('Display Settings', {
            'fields': ('is_visible',)
        }),
    )
