# Cosmetics Boutique

Une boutique en ligne élégante pour produits cosmétiques développée avec Vue 3 et Vite.

## Technologies utilisées

- **Vue 3** - Framework JavaScript progressif
- **TypeScript** - Typage statique pour un code plus robuste
- **Vite** - Outil de build ultra-rapide
- **Tailwind CSS** - Utilitaire CSS pour un design flexible
- **Vue Router** - Gestion du routage et navigation fluide
- **Heroicons** - Bibliothèque d'icône

# Cosmetics Boutique

Une boutique en ligne élégante pour produits cosmétiques développée avec Vue 3 et Vite.

## Technologies utilisées

- **Vue 3** - Framework JavaScript progressif
- **TypeScript** - Typage statique pour un code plus robuste
- **Vite** - Outil de build ultra-rapide
- **Tailwind CSS** - Utilitaire CSS pour un design flexible
- **Vue Router** - Gestion du routage et navigation fluide
- **Heroicons** - Bibliothèque d'icônes SVG

## Difficultés techniques et solutions

        ### Chargement vidéo et problèmes de disposition
        
### Navigation hybride (scroll et routing)

L'un des défis majeurs de ce projet était d'implémenter une navigation à la fois par défilement et par clic sur les onglets. La difficulté résidait dans la synchronisation entre:

- L'URL dans la barre d'adresse
- La section visible à l'écran
- Les animations de défilement

**Solution:** Nous avons utilisé l'Intersection Observer API pour détecter les sections visibles et mis en place un système qui:
- Met à jour l'URL sans rechargement via Vue Router
- Désactive temporairement l'Observer pendant les transitions programmatiques
- Réinitialise les animations AOS après chaque changement de section

```javascript
// Extrait de code pour la gestion du scroll et du routing
function setupIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    if (isScrollingProgrammatically) return;
    
    for (const entry of entries) {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        const sectionId = entry.target.id;
        const currentPath = sectionId === 'home' ? '/' : `/${sectionId}`;
        
        // Mise à jour de l'URL sans rechargement
        router.push(currentPath);
        break;
      }
    }
  }, { threshold: 0.5 });
  
  return observer;
}
```

### Animations AOS et transitions fluides

Maintenir les animations AOS (Animate On Scroll) fonctionnelles tout en naviguant entre les sections s'est avéré problématique, car:
- Les animations ne se déclenchaient pas toujours après un changement de route
- Le défilement programmatique interférait avec le timing des animations

**Solution:** Après chaque navigation, nous rafraîchissons manuellement AOS:

```javascript
// Animation refresh après navigation
setTimeout(() => {
  AOS.refresh();
  isNavigatingProgrammatically = false;
}, 1000);
```

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