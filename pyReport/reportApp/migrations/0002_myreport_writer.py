# Generated by Django 5.0.1 on 2024-02-02 05:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reportApp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='myreport',
            name='writer',
            field=models.CharField(default='', max_length=100),
        ),
    ]
