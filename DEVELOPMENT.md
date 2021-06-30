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
  "type": "Carrots",
  "family": Family(),
  "genus": Genus(),
  "description": "...",
  "seeding": {
    "start": 2,
    "end": 5,
    "germination": 15
  },
  "transplanting": {
    "start": 2,
    "end": 5,
    "germination": 15,
    "growth": 2
  },
  "planting": {
    "start": 2,
    "end": 5,
    "maturity": 6
  },
  "harvesting": {
    "start": 2,
    "end": 5,
    "germination": 15
  },
  "spacing": 
  {
    "row": 10,
    "lines": 30
  }
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



