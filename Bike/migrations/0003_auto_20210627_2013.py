# Generated by Django 3.1.4 on 2021-06-27 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Bike', '0002_auto_20201227_0156'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bike',
            name='status',
            field=models.CharField(choices=[('ре', 'В ремонте'), ('св', 'Свободен'), ('ар', 'Арендован')], max_length=20),
        ),
        migrations.AlterField(
            model_name='bike_rent',
            name='status',
            field=models.CharField(choices=[('за', 'Заказано'), ('оп', 'Оплачено'), ('во', 'Возврат средств'), ('дз', 'На доставке заказчику'), ('ак', 'Активно'), ('дл', 'На доставке в локацию'), ('вы', 'Выполнено'), ('от', 'Отменено'), ('шт', 'Ожидание оплаты штрафа')], max_length=20),
        ),
    ]
