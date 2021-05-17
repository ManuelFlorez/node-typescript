import { NumberRegisterUsers } from "../services/admin/NumberRegisterUsers";

export class AdminController {

  public numberRegisterUsers(): number {
    return new NumberRegisterUsers().numberRegisterUsers();
  }

}