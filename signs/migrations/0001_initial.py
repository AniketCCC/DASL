# Generated by Django 5.0.1 on 2024-01-24 21:02

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sign',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sign_name', models.CharField(max_length=200)),
                ('pub_date', models.DateTimeField(verbose_name='date published')),
                ('handshape', models.CharField(max_length=200)),
                ('location', models.CharField(max_length=200)),
                ('palm_orientation', models.CharField(max_length=200)),
                ('movement', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Demonstration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pub_date', models.DateTimeField(verbose_name='date published')),
                ('sign', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='signs.sign')),
            ],
        ),
    ]
