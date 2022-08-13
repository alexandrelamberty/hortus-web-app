/**
 * Sensor represent a wifi micro-controller with sensors capabalities
 */
export interface Sensor {
  _id: number
  name: string
  ip: string
  macaddress: string
  createdAt: Date
  updatedAt: Date
}
