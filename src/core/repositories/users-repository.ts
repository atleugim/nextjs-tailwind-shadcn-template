import { request } from '../config/request';
import { User } from '../types/user';

class UsersRepository {
  static readonly getUsers = async () => {
    const res = await request<User[]>({
      method: 'GET',
      path: 'users'
    });

    if (res) {
      return res;
    }

    throw new Error('Error fetching users');
  };
}

export default UsersRepository;
