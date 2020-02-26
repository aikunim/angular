import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AuthService } from './auth.service';


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "heroes", component: HeroesComponent},
  {path: "",  redirectTo: '/heroes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit {

  private type: number;
  private login: string;
  private password: string;
  private key: any;

  constructor(private authService: AuthService) {
    
  }

  ngOnInit() {

  }

 }
