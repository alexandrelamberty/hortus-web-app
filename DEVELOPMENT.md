## Features

- Organize your culture
- Manage your gardenning spaces, plants and pots …

## Development


### Data modeling

## Culture Phase

- Semis (Seeding)
  - Interieur (Indoor)
  - Chassis (Frame)
  - Exterieur (Outdoor)
- Repiquage (Transplanting)
- Plantation (Planting)
- Récolte (Harvest)

## Culture

### Plants

Plant name with it's differents culture phases starting and ending period.


```json
{
  "name": "Carrots",
  "variety": "Carrots",
  "family": Family(),
  "Genus": Genus(),

  "seeding": [3,5],
  "transplanting": [5,6],
  "planting": [8,8],
  "harvesting": [12,15],
  "spacing": [15,20],
  "description": "..."
}
```

### Family
```json
{
  "name": "Cucurbitaceae",
}
```
### Genus
```json
{
  "name": "Cuburitas",
}
```

### Crops
```json
{
  "plant": Plant(Carrot),
  "createdAt": Date,
  "seeding": {
    "status": "Pending|Started|Stopped",
    "startedAt": Date,
    "endedAt": Date,
  }
}
```

## Plants Families

UMBELLIFERAE
LAMIACEAE
SOLANACEAE
ASTERACEAE
BRASSICACEAE
LILIACEAE
ROSACEAE
CUCURBITACEAE
CHENOPODIACEAE
FABACEAE
POACEAE

## Plants Types

https://www.fondation-louisbonduelle.org/en/my-vegetable-garden/grouping-vegetables-according-to-plant-families/

https://www.vegetables.co.nz/vegetables-a-z/

Root (Racine)
Bulb (Bulbe)
Stem	
Seed	(Graine)
Flower (Fleur)
Leaf	(Feuille)
Fruit	(fruit)
Indeterminate

## Ressources

https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications



