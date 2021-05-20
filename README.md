---
Title: Gardening Planner
Author: Alexandre Lamberty
Date: January 20, 2018
Last Modified: 

---
# Gardenning Planner

- Organize your culture.
- Manage your gardenning spaces, plants and pots …


### Data modeling

## Phase de culture

- Seeding
  - Interieur
  - Chassis
  - Exterieur
- Repiquage
- Plantation
- Récolte

## Culture
Plant represent a plant name with it's differents culture phases starting and ending period.

```json
{
  "name": "Carrots",
  "seeding": [3,5],
  "transplanting": [5,6],
  "planting": [8,8],
  "harvesting": [12,15]
}
```

## Types de légumes

- Fruit
- Graine
- Feuille
- Bulbe
- Racine
