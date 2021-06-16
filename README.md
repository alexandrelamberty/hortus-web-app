# Hortus

A gardenning planner

- Organize your culture.
- Manage your gardenning spaces, plants and pots …

### Data modeling

## Culture Phase

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

## Vegetable

- Fruit
- Graine
- Feuille
- Bulbe
- Racine
