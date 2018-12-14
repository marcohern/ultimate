import { User } from "./user";

export class UserCreate extends User {
    password:string = '';
    confirmPassword:string = '';
}
