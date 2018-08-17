import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';

export interface Animal {
  route: string;
  name: string;
  images?: string[];
}


@Injectable({
  providedIn: 'root'
})
export class PicsResolver implements Resolve<Animal> {
  animals = [
    {
      route: 'cats',
      name: 'Kitties',
      images: [
        'https://i.redd.it/bwgejkoumkg11.jpg',
        'https://i.redd.it/xbiss8nmzlg11.jpg',
        'https://i.redd.it/s2svrgzsd9f11.jpg',
        'https://i.redd.it/j26uc694iac11.jpg',
        'https://i.redd.it/b3wg03vid8b11.jpg',
        'https://i.redd.it/wikuolb8asf11.jpg',
        'https://i.redd.it/24csp38f9ec11.jpg',
        'https://i.redd.it/135pd3x6n2g11.jpg',
        'https://i.redd.it/aijt9kfhgwf11.jpg',
        'https://i.redd.it/es2yw11nwed11.jpg',
      ],
    },
    {
      route: 'dogs',
      name: 'Doggies',
      images: [
        'https://i.redd.it/i1oglzx7uwa11.jpg',
        'https://i.redd.it/xmc89jpu2zd11.jpg',
        'https://i.redd.it/9piga2920je11.jpg',
        'https://i.redd.it/tt5rkaxl02b11.jpg',
        'https://i.redd.it/wz0jm44fkqb11.jpg',
        'https://i.redd.it/w9kasctkglb11.jpg',
        'https://i.redd.it/3ikunfhxhgf11.jpg',
        'https://i.redd.it/qexgsulum4f01.jpg',
        'https://i.redd.it/xbzjt9iicpf11.jpg',
        'https://i.redd.it/2xzg8060oye11.jpg',
        'https://i.redd.it/6mlf40lmtdd11.jpg',
      ],
    }
  ];
  selectedAnimal: Animal;

  constructor(
    private router: Router,
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    const bandName = route.paramMap.get('animal');
    const allowedBands = [
      'cats',
      'dogs'
    ];

    this.animals.forEach(animal => {
      if (animal.route === bandName) {
        this.selectedAnimal =  animal;
      }
    });

    if (allowedBands.includes(bandName)) {
      return this.selectedAnimal;
    } else {
      this.router.navigate(['/404']);
    }
  }
}
