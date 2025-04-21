import {Gender} from "../enums/gender.enum";

export interface Cat {
  name: string;
  dateOfBirth: number;
  breed: string;
  gender: Gender;
  image: string | undefined;
}
