import { IUser } from '../../interfaces';

export interface IUserComp extends IUser {
  EditorialProp?: string | boolean;
}
