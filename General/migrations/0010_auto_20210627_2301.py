# Generated by Django 3.1.4 on 2021-06-27 20:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('General', '0009_auto_20210627_2259'),
    ]

    operations = [
        migrations.AlterField(
            model_name='delivery',
            name='time',
            field=models.DateTimeField(blank=True),
        ),
    ]
