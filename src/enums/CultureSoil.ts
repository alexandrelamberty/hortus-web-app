export enum CultureSoil {
  Outside = "outside",
  Inside = "inside",
  Greenhouse = "greenhouse",
  Frame = "frame",
}

function getLocation(senum: string) {
  switch (senum) {
    case CultureSoil.Outside:
      return "Outside";
    case CultureSoil.Inside:
      return "Inside";
    case CultureSoil.Greenhouse:
      return "Greenhouse";
    case CultureSoil.Frame:
      return "Frame";
    default:
      return CultureSoil.Outside;
  }
}
