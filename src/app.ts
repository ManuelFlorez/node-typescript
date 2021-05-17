import { StudentController } from './controllers/StudentController'
import { StudentDTO } from './models/dto/StudentDTO'

const student: StudentDTO = {
  email: 'manuelflorezw@gmail.com',
  password: 'manuel123'
}

const studentController: StudentController = new StudentController()

studentController.register(student)
studentController.notas(student)
studentController.notification(10)
