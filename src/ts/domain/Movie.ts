import Buyable from "./Buyable";

export default class Movie implements Buyable{
  constructor(
    readonly name: string,
    readonly year: number,
    readonly id: number,
    readonly country: string,
    readonly tagline: string,
    readonly genre: string[],
    readonly duration: string,
    readonly price: number
  ) { }
}