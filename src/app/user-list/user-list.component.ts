import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../types/user';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  public usersList: User[] = []
  public isLoading = false
  constructor(private service: UserService) { }

  async ngOnInit() {
    this.isLoading = true;
    this.usersList = await this.service.getAllUsers();
    this.isLoading = false;
  }
}
