import {Artist} from "./artist";
import {Album} from "./album";

export interface Music {
  Id: number,
  Name: string,
  Author: any,
  Thumbnail: any,
  TimeOfPlays: number,
  ReleaseDate: any,
  song: any,
  Album: any,
  Style: string
}
