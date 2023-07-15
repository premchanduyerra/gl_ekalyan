import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private readonly router: Router,
    private readonly userService: UserService) { }

  ngOnInit() {
  }
  logout(): void {
    this.userService.logout();
  }
}
