# Generated by Django 4.2.1 on 2023-07-20 10:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0002_adminlogin'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='stat',
            field=models.CharField(default='', max_length=600),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='How_to_make',
            field=models.CharField(max_length=200),
        ),
    ]
