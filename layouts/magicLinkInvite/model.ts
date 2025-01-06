/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  name: string
  returnUrl: string
}

export const sampleData: IModel[] = [
  {
    name: "Rocketmakers",
    returnUrl: "https://www.rocketmakers.com"
  },
  {
    name: "Rocketmakers",
    returnUrl: "https://www.rocketmakers.com"
  },
]
