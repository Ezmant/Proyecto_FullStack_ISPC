# Generated by Django 4.2.1 on 2023-06-04 17:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Aspra', '0003_alter_animales_fecha_ingreso'),
    ]

    operations = [
        migrations.RenameField(
            model_name='animales',
            old_name='tamaño',
            new_name='tamano',
        ),
    ]
