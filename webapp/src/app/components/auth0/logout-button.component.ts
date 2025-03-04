import { Component, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'auth-logout-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="button__logout" (click)="handleLogout()">Log Out</button>
  `
})
export class LogoutButtonComponent {
    private auth = inject(AuthService);
    private doc = inject(DOCUMENT)

    handleLogout(): void {
      this.auth.logout({
        logoutParams: {
          returnTo: this.doc.location.origin,
        },
      });
    }
}
