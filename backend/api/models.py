from django.db import models
from django.utils.translation import gettext_lazy as _
from django.template.defaultfilters import slugify

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)


class Cheese(models.Model):
    PATEMOLLES = "Pâte molles"
    PATEFLEURIES = "Pâte fleuries"
    PATEPRESSESCUITES = "Pâte pressées cuites"
    PATEPRESSESNONCUITES = "Pâte pressées non cuites"
    FROMAGEDECHEVRES = "Fromage de chèvres"
    FROMAGEDEBREBIS = "Fromage de brebis"
    PATEPERSILLEES = "Pâte persillées"
    TRIPLECREMES = "triple cremes"

    VACHE_PAST = "Vache au lait pasteurisé"
    VACHE_CRUE = "Vache au lait crue"
    CHEVRE = "Chèvre"
    BREBIS = "Brebis"
    BUFFLONNE = "Bufflonne"
    MIXTE = "Mixte"
    
    KILO = "le Kilo"
    LIVRE = "la Livre"
    PIECE = "Pièce"
    
    FR = "France"
    IT = "Italie"
    ES = "Espagne"
    DE = "Allemagne"
    CH = "Suisse"
    BE = "Belgique"
    UK = "Royaume-Uni"
    NL = "Pays-Bas"
    IE = "Irlande"
    GR = "Grèce"
    AT = "Autriche"
    A = "Autre"
    
    
    
    CATEGORY = [
        (PATEMOLLES, "Pâte molles"),
        (PATEFLEURIES, "Pâte fleuries"),
        (PATEPRESSESCUITES, "Pâte pressées cuites"),
        (PATEPRESSESNONCUITES, "Pâte pressées non cuites"),
        (FROMAGEDECHEVRES, "Fromage de chèvres"),
        (FROMAGEDEBREBIS, "Fromage de brebis"),
        (PATEPERSILLEES, "Pâte persillées"),
        (TRIPLECREMES, "Triple cremes"),
        
    ]
    
    MILK_TYPE = [
        (VACHE_PAST, "Vache au lait pasteurisé"),
        (VACHE_CRUE, "Vache au lait crue"),
        (CHEVRE, "Chèvre"),
        (BREBIS, "Brebis"),
        (BUFFLONNE, "Bufflonne"),
        (MIXTE, "Mixte"),
    ]
    
    QUANTITY = [
        (KILO, "kilo"),
        (LIVRE, "livre"),
        (PIECE, 'pièce'),
    ]
    
    ORIGIN = [
        (FR, "France"),
        (IT, "Italie"),
        (ES, "Espagne"),
        (DE, "Allemagne"),
        (CH, "Suisse"),
        (BE, "Belgique"),
        (UK, "Royaume-Uni"),
        (NL, "Pays-Bas"),
        (IE, "Irlande"),
        (GR, "Grèce"),
        (AT, "Autriche"),
        (A, "Autre"),
    ]
    
    

    name = models.CharField(max_length=150)
    slug = models.SlugField(max_length=150, unique=True, blank=True)
    description = models.TextField(blank=True)
    origin = models.CharField(max_length=100, choices=ORIGIN, blank=True, verbose_name="origine")
    department = models.CharField(max_length=100, blank=True, verbose_name="departement")
    milk_type = models.CharField(max_length=100, blank=True, choices=MILK_TYPE, verbose_name="type de lait")
    category = models.CharField(max_length=100, blank=True, choices=CATEGORY, verbose_name="categories")
    composition = models.CharField(max_length=100, blank=True)
    imageUrl = models.ImageField(_('Images'), upload_to=upload_to, blank=True, default='default/default.jpg')
    price = models.FloatField(blank=True, null=True, verbose_name="prix")
    quantity = models.CharField(max_length=100, blank=True, choices=QUANTITY, verbose_name="quantité")
    

    class Meta:
        verbose_name = "Les fromage"

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

