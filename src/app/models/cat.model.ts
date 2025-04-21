import {Gender} from "./gender.model";

export interface Cat {
  name: string;
  dateOfBirth: number;
  breed: string;
  gender: Gender;
}
