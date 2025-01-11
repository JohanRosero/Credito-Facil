import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isLogedIn = true;

}
