# Generated by Django 3.1.4 on 2021-07-03 18:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('General', '0012_auto_20210628_1929'),
    ]

    operations = [
        migrations.AddField(
            model_name='deliveryman',
            name='email',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='delivery',
            name='price',
            field=models.PositiveSmallIntegerField(blank=True, default=500, null=True),
        ),
        migrations.AlterField(
            model_name='location',
            name='metro',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(blank=True, max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='photo',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
