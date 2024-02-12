import { TypeUserEnum } from "../enums/TypeUserEnum";

export interface UserDataType {
    name: string;
    email: string;
    photo: string;
    type: TypeUserEnum
}