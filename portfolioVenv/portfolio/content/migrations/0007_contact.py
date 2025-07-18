# Generated by Django 5.2.4 on 2025-07-17 00:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0006_experience'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('message', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('is_read', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name_plural': 'Contacts',
                'ordering': ['-created_at'],
            },
        ),
    ]
