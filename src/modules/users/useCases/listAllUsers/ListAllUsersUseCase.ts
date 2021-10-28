import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userIsAdmin = this.usersRepository.findById(user_id);
    if (!userIsAdmin) {
      console.log("Sorry, ure not an admin!");
    } else {
      const users = this.usersRepository.list();

      return users;
    }
  }
}

export { ListAllUsersUseCase };
