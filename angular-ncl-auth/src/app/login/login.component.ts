import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading: boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    // Async
    this.loadAsync();

    // Subscribe
    // this.loading = true;
    // this.authService.loadingSpinnerSubscribe(5000).subscribe( message => {
    //   console.log(message);
    //   this.loading = false;
    // });
  }

  async loadAsync() {
    this.loading = true;
    await this.authService.loadingSpinnerAsync(10000);
    this.loading = false;    
  }

}
