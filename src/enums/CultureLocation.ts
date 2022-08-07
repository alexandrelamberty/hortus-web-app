export enum CultureLocation {
  Outside = 'outside',
  Inside = 'inside',
  Greenhouse = 'greenhouse',
  Frame = 'frame',
}

function getLocation(senum: string) {
  switch (senum) {
    case CultureLocation.Outside:
      return "Outside"
    case CultureLocation.Inside:
      return "Inside"
    case CultureLocation.Greenhouse:
      return "Greenhouse"
    case CultureLocation.Frame:
      return "Frame"
    default:
      return CultureLocation.Outside
  }
}
