# Generated by Django 5.1.1 on 2024-11-06 02:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('signs', '0005_sign_video'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='set',
            name='contained_signs',
        ),
        migrations.RemoveField(
            model_name='set',
            name='created_by',
        ),
        migrations.DeleteModel(
            name='Demonstration',
        ),
        migrations.DeleteModel(
            name='Set',
        ),
    ]
