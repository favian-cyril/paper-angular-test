import { Component } from '@angular/core';
import { User } from '../types/user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent {
  public userDetails: User | null = null
  public isLoading = false

  constructor(private service: UserService, private route: ActivatedRoute) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.isLoading = true;
    this.userDetails = await this.service.getUser(Number(id));
    this.isLoading = false;
  }
}
