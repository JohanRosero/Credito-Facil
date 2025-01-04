import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [SharedModule]
})
export class RegisterComponent {

  public email: string = "";
  public password: string = "";
  public repetpassword: string = "";
  public message: string = "";
  public type: string = "";
  public loadingregister: boolean = true;

  constructor() { }

}
