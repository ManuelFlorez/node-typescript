import { StudentDTO } from "../../models/dto/StudentDTO";

export class NotificationService {
  /**
   * Consultar en la base de datos
   * consultar notas
   * devolver foto
   */

  public notification(rangeTime:number): string {
    return `notificar cada ${rangeTime} minutos`
  }

}