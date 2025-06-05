# Cosmetics Boutique

Une boutique en ligne élégante pour produits cosmétiques développée avec Vue 3 et Vite.

## Technologies utilisées

- **Vue 3** - Framework JavaScript progressif
- **TypeScript** - Typage statique pour un code plus robuste
- **Vite** - Outil de build ultra-rapide
- **Tailwind CSS** - Utilitaire CSS pour un design flexible
- **Vue Router** - Gestion du routage et navigation fluide
- **Heroicons** - Bibliothèque d'icônes SVG

## IDE recommandé

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (et désactivez Vetur).

## Support des types pour les imports `.vue` en TypeScript

TypeScript ne peut pas gérer les informations de type pour les imports `.vue` par défaut, nous remplaçons donc le CLI `tsc` par `vue-tsc` pour la vérification des types. Dans les éditeurs, nous avons besoin de [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) pour que le service de langage TypeScript reconnaisse les types `.vue`.

## Configuration personnalisée

Voir la [Référence de configuration Vite](https://vite.dev/config/).

## Cloner le projet

```sh
# Cloner le dépôt
git clone https://github.com/its-kevin228/cosmetic-frontend.git

# Accéder au répertoire du projet
cd cosmetic-frontend
```

## Installation du projet

```sh
npm install
```

### Compiler et recharger à chaud pour le développement

```sh
npm run dev
```

### Vérifier les types, compiler et minifier pour la production

```sh
npm run build
```