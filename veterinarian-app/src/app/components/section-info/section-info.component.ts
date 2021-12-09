import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-info',
  templateUrl: './section-info.component.html',
  styleUrls: ['./section-info.component.css'],
})
export class SectionInfoComponent implements OnInit {
  @Input() section: any = {
    title: '',
    subtitle: '',
    color: ''
  };

  constructor() {}

  ngOnInit(): void {}
}
