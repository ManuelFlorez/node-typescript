import { StudentDTO } from "../models/dto/StudentDTO"
import { NotasService } from "../services/student/NotasService";
import { NotificationService } from "../services/student/NotificationService";
import { RegisterService } from "../services/student/RegisterService";

export class StudentController {

  public register(studen:StudentDTO): string {
    return new RegisterService().register(studen);
  }

  public notas(studen:StudentDTO): string {
    return new NotasService().notas(studen);
  }

  public notification(rangeTime:number): string {
    return new NotificationService().notification(rangeTime);
  }

}
