import { Gender } from '../../enums/gender.enum';

export interface Cat {
  id?: string | undefined;
  name: string;
  dateOfBirth?: number | undefined;
  breed?: string | undefined;
  gender?: Gender | undefined;
  image?: string | undefined;
}
