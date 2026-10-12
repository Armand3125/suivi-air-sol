# Aquarium — V1R4

## Publication GitHub Pages (méthode classique)
La branche **gh-pages** est préparée et contient tous les fichiers d'Aquarium V1R4.
La publication ne nécessite **aucun workflow GitHub Actions**.

Activation initiale dans les paramètres du dépôt :
Settings → Pages → Build and deployment → Source **Deploy from a branch** → Branch **gh-pages** → Dossier **/ (root)** → Save.

Adresse après activation : **https://armand3125.github.io/suivi-air-sol/Aquarium/**

Ne pas employer de lien RawGitHack pour l'installation mobile : c'est un proxy tiers qui peut figer l'ancienne révision et bloquer les images. Un workflow précédent a échoué car Pages n'était pas activé ; il a été supprimé du dépôt.

**Ouvrir Aquarium sur téléphone (accès direct aux fichiers GitHub, sans activation de Pages) :**

**https://raw.githack.com/Armand3125/suivi-air-sol/main/Aquarium/index.html**

Le lien ci-dessus utilise **raw.githack.com**, un proxy tiers du dépôt GitHub public, pas l'hébergement GitHub Pages. La première visite peut afficher une page de confirmation de sécurité avant d'ouvrir l'application. Les mises à jour de la branche `main` peuvent prendre quelques minutes à apparaître.

**URL GitHub Pages prévue** (accessible uniquement si Pages est activé dans les paramètres du dépôt et si le workflow de déploiement réussit) :

https://armand3125.github.io/suivi-air-sol/Aquarium/

---
Carte aéronautique mobile fondée sur Biome Poche, direction artistique marine : bleu abyssal, turquoise, fiches lisibles.

Données SIA du 1er octobre 2026 : 10 424 objets répartis dans 14 fichiers GeoJSON. Ces fichiers sont automatiquement chargés par `index.html`. Ne pas les supprimer.

Fonctionnalités : carte 2D, secteurs superposés au point touché, recherche par nom/code/fréquence, couches SIA (secteurs, aérodromes, héliports, radionavigation, ILS, NavFix, routes, pistes), GPS, fonds Nuit marine/Clair/OSM/IGN/Satellite, installation sur écran d'accueil.

Accessible avec GitHub Pages si l'hébergement du dépôt est activé. Dossier : `/Aquarium/`.

**Consultation uniquement** : ne remplace pas l'eAIP, les NOTAM et les publications aéronautiques en vigueur. Prévoir la connexion Internet pour les fonds et la première installation.

## Correction V1R4 des fonds de carte

- Les anciens fonds CARTO (Nuit marine, Clair) demandaient une clé API depuis septembre 2026. Ils sont remplacés par des variantes colorimétriques des tuiles OpenStreetMap, avec attribution visible ; aucun compte ni clé nécessaires.
- Fonds IGN et satellite conservés, avec retour automatique sur OSM lorsqu'un fournisseur ne charge aucune tuile.
- L'ancien cache de tuiles CARTO est supprimé à l'activation du nouveau service worker. Les nouvelles tuiles utilisent le cache HTTP natif du navigateur et ne sont pas préchargées (respect de la politique OSM).
- Suppression de crossOrigin sur les tuiles et rafraîchissement de la taille de carte après orientation/redimensionnement mobile.
- Si l'ancien fond est encore affiché, recharger la page une fois ; via raw.githack.com, les mises à jour peuvent prendre quelques minutes à être visibles.

## Fond de carte V1R4

- Correction des grands carrés vides : chaque tuile échouée essaie un serveur de secours (Esri World Topo pour OSM, OSM puis Esri pour IGN).
- Carte OpenStreetMap standard et lisible au premier lancement, même si l'ancienne sélection enregistrée était « Nuit marine ». Les fonds nuit marine, clair, IGN et satellite restent accessibles.
- Bouton « Recharger les tuiles » dans le panneau « Fond ».
- URL stable recommandée : GitHub Pages du dépôt si le service est activé. Un lien RawGitHack avec SHA de commit est figé sur une version : ce n'est pas une URL de mise à jour permanente.
