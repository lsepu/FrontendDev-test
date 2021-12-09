import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  @Input() service: any = {
    title: '',
    paragraph: '',
  };

  @Input() reverse: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
