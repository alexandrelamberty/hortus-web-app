export enum Frost {
  Tolerant = "tolerent",
  NonTolerant = "non_tolerent",
}

function getFrost(senum: string) {
  switch (senum) {
    case Frost.NonTolerant:
      return "Non tolerant";
    default:
      return "Frost Enum";
  }
}
