import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'veterinarian-app';

  service: any = {
    title: 'As a veterinarian and lover of animals',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat maximeid, nulla aut ratione enim harum quod laboriosam similique minima!',
  };

  sectionInfo: Array<any> = [
    {
      title: 'Title here',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus asperiores ipsam error eum. Laborum!',
      color: 'white',
    },
    {
      title: 'The vetcare team',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus asperiores ipsam error eum. Laborum!',
      color: 'black',
    },
    {
      title: 'Recent Posts',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus asperiores ipsam error eum. Laborum!',
      color: 'black',
    },
  ];

  dogCard: Array<any> = [
    {
      url: '../assets/dogCard/dog1.jpg',
      title: 'Veterinarian',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque nulla non omnis! Odio, maxime.',
    },
    {
      url: '../assets/dogCard/dog2.jpg',
      title: 'Vaccination Care',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque nulla non omnis! Odio, maxime.',
    },
    {
      url: '../assets/dogCard/dog3.jpg',
      title: 'Dental Care',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque nulla non omnis! Odio, maxime.',
    },
  ];

  dogCard2: Array<any> = [
    {
      url: '../assets/dogCard2/dog1.jpg',
      oldPrice: 50,
      newPrice: 30,
    },
    {
      url: '../assets/dogCard2/dog2.jpg',
      oldPrice: 40,
      newPrice: 25,
    },
    {
      url: '../assets/dogCard2/dog3.jpg',
      oldPrice: 45,
      newPrice: 20,
    },
  ];

  veterinaryCard: Array<any> = [
    {
      url: '../assets/veterinary.jpg',
      name: 'Jennifer Mullen',
      jobTitle: 'Veterinary',
    },
    {
      url: '../assets/veterinary.jpg',
      name: 'Sheeren Collins',
      jobTitle: 'Administration',
    },
    {
      url: '../assets/veterinary.jpg',
      name: 'Jennifer Mullen',
      jobTitle: 'Veterinary',
    },
  ];

  veterinaryCard2: Array<any> = [
    {
      url: '../assets/veterinary2.jpg',
      title: 'As a veterinarian and lover of animals',
      date: 'February 09, 2020',
      paragraph:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi a, similique quisquam cumque quos beatae?',
    },
    {
      url: '../assets/veterinary2.jpg',
      title: 'As a veterinarian and lover of animals',
      date: 'February 10, 2020',
      paragraph:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi a, similique quisquam cumque quos beatae?',
    },
    {
      url: '../assets/veterinary2.jpg',
      title: 'As a veterinarian and lover of animals',
      date: 'February 11, 2020',
      paragraph:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi a, similique quisquam cumque quos beatae?',
    },
  ];

  statistics: Array<any> = [
    {
      url: '../assets/icons/hearth.png',
      number: 34793,
      phrase: 'Happy Clients',
    },
    {
      url: '../assets/icons/stethoscope.png',
      number: 45382,
      phrase: 'Department',
    },
    {
      url: '../assets/icons/vaccine.png',
      number: 54762,
      phrase: 'Vaccinations',
    },
  ];
}
