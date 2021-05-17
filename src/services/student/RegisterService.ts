import { StudentDTO } from "../../models/dto/StudentDTO";

export class RegisterService {
  /**
   * Consultar en la base de datos
   * si no esta registrado registrar
   * validar el registro con exito
   * notificar que se realizo el registro con exito
   */

  public register(student:StudentDTO): string {
    return 'usuario registrado'
  }

}