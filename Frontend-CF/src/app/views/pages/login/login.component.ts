import { Component } from '@angular/core';
import { AuthenticateService } from '../../../services/authenticate.service';
import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';
import { User } from '../../../interfaces/interfacesFirebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [SharedModule]
})
export class LoginComponent {

  constructor(private authenticateService: AuthenticateService, private router: Router) { }

  email: string = '';
  password: string = '';
  type: string = '';
  message: string = '';
  loadingLogin: boolean = false;
  credentials?: User;

  async login() {

    if (this.email === '' || this.password === '') {
      this.message = 'Please enter email and password';
      this.type = 'danger';
    }
    else {
      this.loadingLogin = true;
      await this.authenticateService.signIn(this.email, this.password)
        .then((response) => {
          this.loadingLogin = false;
          this.credentials = response.user;
          if (this.credentials && !this.credentials.emailVerified) {
            throw new Error('Please verify your email before login');
          } else {
            this.router.navigate(['/dashboard']);
          }
        })
        .catch((error) => {
          this.message = error.message;
          this.loadingLogin = false;
          this.type = 'danger';
        });
    }

  }

}
