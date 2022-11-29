export enum CultureSoil {
  Sandy = "sandy",
  Clay = "clay",
  Silt = "silt",
  Peat = "peat",
  Chalk = "chalk",
  Loam = "loam",
}

function getSoils(senum: string) {
  switch (senum) {
    case CultureSoil.Sandy:
      return "Sandy";
    case CultureSoil.Clay:
      return "Clay";
    case CultureSoil.Silt:
      return "Silt";
    case CultureSoil.Peat:
      return "Peat";
    case CultureSoil.Chalk:
      return "Chalk";
    case CultureSoil.Loam:
      return "Loam";
    default:
      return CultureSoil.Sandy;
  }
}
