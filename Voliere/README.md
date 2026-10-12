# Volière V1R8 — Atlas SIA mobile

Carte aéronautique mobile 2D. Recherche secteurs, codes OACI et fréquences, couches SIA, secteurs superposés, GPS.

Fonds : Plan IGN par défaut, Satellite, Esri gris ; repli OSM en cas d'échec.

Fréquences par service, sans doublons. PDF Atlas VAC officiel SIA accessible pour les aérodromes à code OACI.

Les 14 fichiers sia-*.json contiennent les données SIA du 01/10/2026. Ouvrir : https://armand3125.github.io/suivi-air-sol/Voliere/

Carte informative uniquement ; consulter eAIP et NOTAM. Les PDF peuvent s'ouvrir dans un onglet avant d'être enregistrés.

## Palette Biome V12R4 — V1R8

Les couleurs SIA des huit catégories sont identiques à celles de Biome V12R4 : secteurs #1559c7, aérodromes #2f9e44, héliports #ffd43b (contour #8a6d00), radionavigation #7048e8, ILS #0b7285, NavFix #e03131, routes #f08c00 et pistes #212529.

Les secteurs ont maintenant un contour de 3 px d'opacité 100 % et un remplissage à 24 % (anciennement 1,5 px, 80 % et 6 %) pour être mieux visibles sur IGN, satellite et Esri gris.

## V1R8 — Affichage initial et contours des secteurs

- À l'ouverture : **aucune couche SIA activée** (secteurs, aérodromes, héliports, RadioNav, ILS, NavFix, routes et pistes tous masqués). Le fond IGN reste affiché ; le chargement des données continue pour permettre une recherche immédiate.
- Lorsqu'on active les secteurs, ils apparaissent uniquement avec des **contours bleus de 2,6 px**, sans remplissage. Les secteurs qui se superposent n'opacifient donc plus le fond cartographique.
