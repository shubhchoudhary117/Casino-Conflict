import { UserRole } from "./user-roles.enum";

export interface userModel{
  code:string;
  password:string;
  role:UserRole
}
