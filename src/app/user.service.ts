import { Injectable } from '@angular/core';
import type { User } from './types/user';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.baseUrl
  constructor() { }

  async getAllUsers(): Promise<User[]> {
    const data = await fetch(this.baseUrl + '/users');
    return await data.json() ?? [];
  }

  async getUser(id: number): Promise<User> {
    const data = await fetch(this.baseUrl + `/users/${id}`);
    return await data.json() ?? {};
  }
}
