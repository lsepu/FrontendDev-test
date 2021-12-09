import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  about : Array<String> = [
    'History',
    'Our Team',
    'Brand Guidelines',
    'Terms & Conditions',
    'Privacy Policy'
  ]

  services: Array<String> = [
    'How to order',
    'Our Product',
    'Order Status',
    'Promo',
    'Payment Method'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
