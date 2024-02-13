import { call } from '../config/call';

class ExampleRepository {
  static readonly getUsers = async () => {
    const res = await call({
      method: 'GET',
      path: '/users'
    });

    if (res.success) {
      return res;
    }

    throw new Error('Error fetching users');
  };
}

export default ExampleRepository;
