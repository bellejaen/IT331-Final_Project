import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  
  dtls() {
    this.route.navigate(['/home/dtls']);
  }
  petdtls() {
    this.route.navigate(['/home/pet-details']);
  }
  message() {
    this.route.navigate(['/home/message']);
  }
}
