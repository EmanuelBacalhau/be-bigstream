import UserRepository from '../repositories/UserRepository';

class UserService {
  async index() {
    const users = await UserRepository.findAll();

    return users;
  }
}

export default new UserService();
