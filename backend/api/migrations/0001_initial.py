# Generated by Django 5.0.4 on 2024-04-25 10:14

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cheese',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('slug', models.SlugField(blank=True, max_length=150, unique=True)),
                ('description', models.TextField(blank=True)),
                ('origin', models.CharField(blank=True, choices=[('France', 'France'), ('Italie', 'Italie'), ('Espagne', 'Espagne'), ('Allemagne', 'Allemagne'), ('Suisse', 'Suisse'), ('Belgique', 'Belgique'), ('Royaume-Uni', 'Royaume-Uni'), ('Pays-Bas', 'Pays-Bas'), ('Irlande', 'Irlande'), ('Grèce', 'Grèce'), ('Autriche', 'Autriche'), ('Autre', 'Autre')], max_length=100, verbose_name='origine')),
                ('department', models.CharField(blank=True, max_length=100, verbose_name='departement')),
                ('milk_type', models.CharField(blank=True, choices=[('Vache au lait pasteurisé', 'Vache au lait pasteurisé'), ('Vache au lait crue', 'Vache au lait crue'), ('Chèvre', 'Chèvre'), ('Brebis', 'Brebis'), ('Bufflonne', 'Bufflonne'), ('Mixte', 'Mixte')], max_length=100, verbose_name='type de lait')),
                ('category', models.CharField(blank=True, choices=[('Pâte molles', 'Pâte molles'), ('Pâte fleuries', 'Pâte fleuries'), ('Pâte pressées cuites', 'Pâte pressées cuites'), ('Pâte pressées non cuites', 'Pâte pressées non cuites'), ('Fromage de chèvres', 'Fromage de chèvres'), ('Fromage de brebis', 'Fromage de brebis'), ('Pâte persillées', 'Pâte persillées'), ('triple cremes', 'Triple cremes')], max_length=100, verbose_name='categories')),
                ('composition', models.CharField(blank=True, max_length=100)),
                ('imageUrl', models.ImageField(blank=True, default='default/default.jpg', upload_to=api.models.upload_to, verbose_name='Images')),
                ('price', models.FloatField(blank=True, null=True, verbose_name='prix')),
                ('quantity', models.CharField(blank=True, choices=[('le Kilo', 'kilo'), ('la Livre', 'livre'), ('Pièce', 'pièce')], max_length=100, verbose_name='quantité')),
            ],
            options={
                'verbose_name': 'Les fromage',
            },
        ),
    ]
