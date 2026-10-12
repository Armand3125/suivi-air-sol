# Volière V1R12 — Atlas SIA mobile

Carte aéronautique mobile 2D. Recherche secteurs, codes OACI et fréquences, couches SIA, secteurs superposés, GPS.

Fonds : Plan IGN par défaut, Satellite, Esri gris ; repli OSM en cas d'échec.

Fréquences par service, sans doublons. PDF Atlas VAC officiel SIA accessible pour les aérodromes à code OACI.

Les 14 fichiers sia-*.json contiennent les données SIA du 01/10/2026. Ouvrir : https://armand3125.github.io/suivi-air-sol/Voliere/

Carte informative uniquement ; consulter eAIP et NOTAM. Les PDF peuvent s'ouvrir dans un onglet avant d'être enregistrés.

## Palette Biome V12R4 — V1R12

Les couleurs SIA des huit catégories sont identiques à celles de Biome V12R4 : secteurs #1559c7, aérodromes #2f9e44, héliports #ffd43b (contour #8a6d00), radionavigation #7048e8, ILS #0b7285, NavFix #e03131, routes #f08c00 et pistes #212529.

Les secteurs ont maintenant un contour de 3 px d'opacité 100 % et un remplissage à 24 % (anciennement 1,5 px, 80 % et 6 %) pour être mieux visibles sur IGN, satellite et Esri gris.

## V1R12 — Affichage initial et contours des secteurs

- À l'ouverture : **aucune couche SIA activée** (secteurs, aérodromes, héliports, RadioNav, ILS, NavFix, routes et pistes tous masqués). Le fond IGN reste affiché ; le chargement des données continue pour permettre une recherche immédiate.
- Lorsqu'on active les secteurs, ils apparaissent uniquement avec des **contours bleus de 2,6 px**, sans remplissage. Les secteurs qui se superposent n'opacifient donc plus le fond cartographique.

## V1R12 — Recherche mobile

- Logo Volière remplacé par une silhouette d'oiseau monochrome très simplifiée, identique dans l'interface et l'icône de l'application.
- Sur mobile, panneau de recherche positionné immédiatement sous la barre de recherche et redimensionné suivant `visualViewport` pour ne pas être masqué par le clavier.
- Barre de cinq filtres visible au-dessus des résultats : Tout · Secteurs · Aérodromes · Freq · NavFix. Le filtre « Freq » affiche les objets SIA disposant de données de fréquence.
- Champ de recherche au-dessus du voile de dialogue, suppression du focus clavier avant ouverture d'une fiche.
- Accès neuf `/Voliere/index-v1r9.html` pour contourner les anciens caches ; l'entrée principale et celle de la V1R8 sont synchronisées vers la nouvelle version.

## V1R12 — navigation et recherche radio

- Suppression complète de l'outil Position / GPS.
- Menu « Secteurs » distinct pour l'activation des espaces aériens et les filtres CTR/TMA/R/D/P/Autres.
- Menu « Éléments » pour aérodromes, héliports, RadioNav, ILS, NavFix, routes et pistes.
- Filtre « Freq » : un résultat par fréquence/service/propriétaire, avec le service (APP, TWR…) et l'aérodrome, le secteur ou l'équipement correspondant ; pas de fiche SIA complète.
- Recherche partielle habituelle ; si le texte débute ou se termine par un guillemet double, la recherche est exacte. `125.03` retourne les fréquences commençant par ce nombre, `"125.030"` uniquement la fréquence 125.030 MHz. Les fréquences numériques sont comparées à 3 décimales, ainsi 125.03 et 125.030 sont identiques en mode exact.
- Entrée directe /Voliere/index-v1r10.html pour éviter les anciens caches.

## V1R12 — quatre commandes rétablies

Quatre boutons dans le dock inférieur : Secteurs (affichage/masquage immédiat), Filtres (panneau des types CTR/TMA/R/D/P/Autres et activation des secteurs), Éléments (aérodromes, NavFix et autres couches ponctuelles), Fond (IGN, satellite, Esri gris). Position / GPS reste supprimé.

## V1R12 — recherche de secteurs et affichage

Recherche par noms, codes et libellés, par mots autonomes pour les requêtes de 1 à 2 caractères, sans découper les codes à tirets. « BE » correspond aux seuls secteurs R 55 BE, SECTOR BE 1 et SECTOR BE 2 sur les 10 424 objets SIA (vérifié). Préfixes disponibles à partir de 3 caractères, recherche exacte des fréquences conservée.

Afficher sur la carte crée un surlignage indépendant de la visibilité des couches, quel que soit le type de géométrie. L'onglet « Éléments » s'appelle désormais « Couches » avec l'ancienne icône. Entrée neuve : index-v1r12.html.
