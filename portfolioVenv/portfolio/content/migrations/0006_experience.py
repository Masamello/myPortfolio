# Generated by Django 5.2.4 on 2025-07-16 22:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0005_remove_projects_image_file_projects_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('workplace_name', models.CharField(max_length=200)),
                ('period', models.CharField(max_length=100)),
                ('position', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('order', models.IntegerField(default=0)),
            ],
            options={
                'verbose_name_plural': 'Experience',
                'ordering': ['order'],
            },
        ),
    ]
