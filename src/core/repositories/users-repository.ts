import { request } from '../config/request';
import { User } from '../types/user';

class UsersRepository {
  static readonly getUsers = async () => {
    const res = await request<User[]>({
      method: 'GET',
      path: 'users'
    });

    const randomNum = Math.floor(Math.random() * 10);

    if (randomNum % 2 === 0) {
      throw new Error('Error aleatorio para probar');
    }

    if (res) {
      return res;
    }

    throw new Error('Error fetching users');
  };
}

export default UsersRepository;
