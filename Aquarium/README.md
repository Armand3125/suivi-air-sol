# Aquarium — V1R3

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

## Correction V1R3 des fonds de carte

- Les anciens fonds CARTO (Nuit marine, Clair) demandaient une clé API depuis septembre 2026. Ils sont remplacés par des variantes colorimétriques des tuiles OpenStreetMap, avec attribution visible ; aucun compte ni clé nécessaires.
- Fonds IGN et satellite conservés, avec retour automatique sur OSM lorsqu'un fournisseur ne charge aucune tuile.
- L'ancien cache de tuiles CARTO est supprimé à l'activation du nouveau service worker. Les nouvelles tuiles utilisent le cache HTTP natif du navigateur et ne sont pas préchargées (respect de la politique OSM).
- Suppression de crossOrigin sur les tuiles et rafraîchissement de la taille de carte après orientation/redimensionnement mobile.
- Si l'ancien fond est encore affiché, recharger la page une fois ; via raw.githack.com, les mises à jour peuvent prendre quelques minutes à être visibles.
