import UserTypeRepository from '../repositories/UserTypeRepository';

class UserTypeService {
  async index() {
    const user_types = await UserTypeRepository.findAll();
    return user_types;
  }
}

export default new UserTypeService();
