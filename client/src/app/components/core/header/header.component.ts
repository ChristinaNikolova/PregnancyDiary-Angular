import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    public authService: AuthService, 
    private router: Router,
    private toastr: ToastrService) {}

  public logout(): void {
    this.authService.logout();
    this.toastr.success('Successful logout', 'Success');
    this.router.navigate(['/login']);
  }
}
