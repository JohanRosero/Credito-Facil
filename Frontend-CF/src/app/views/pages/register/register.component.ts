import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AuthenticateService } from '../../../services/authenticate.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [SharedModule, CommonModule]
})
export class RegisterComponent {

  public email: string = "";
  public password: string = "";
  public repetpassword: string = "";
  public message: string = "";
  public type: string = "";
  public loadingregister: boolean = false;
  public showRegisterButton: boolean = true;

  constructor(private authenticateService: AuthenticateService) { }

  public async register() {
    if (this.email === "" || this.password === "" || this.repetpassword === "") {
      this.message = "Please fill in all fields";
      this.type = "danger";
    } else if (this.password !== this.repetpassword) {
      this.message = "Passwords do not match";
      this.type = "danger";
    } else {
      this.loadingregister = true;
      this.authenticateService.register(this.email, this.password)
        .then(() => {
          this.loadingregister = false;
          this.message = "User registered successfully, please verify your email to confirm your account";
          this.type = "success";
          this.showRegisterButton = false;
        }).catch((error) => {
          this.loadingregister = false;
          this.message = error.message;
          this.type = "danger";
        });
    }
  }
}


