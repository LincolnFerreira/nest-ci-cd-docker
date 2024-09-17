import { Injectable, Inject } from '@nestjs/common';
import { IHttpService } from 'src/http/http-service.interface';
import { User } from './user.model';

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  constructor(
    @Inject('IHttpService') private readonly httpService: IHttpService, // Injeta a interface
  ) {}

  findAll(): User[] {
    return this.users;
  }

  async getUserData(): Promise<any> {
    const url = 'https://catfact.ninja/fact';
    return this.httpService.get(url);
  }

  async createUser(data: any): Promise<any> {
    const url = 'https://catfact.ninja/fact';
    return this.httpService.post(url, data);
  }
}
