import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrimeNGConfig, Translation } from 'primeng/api';
import { FilterService } from 'primeng/api';


@Component({
  selector: 'app-table-horario',
  templateUrl: './table-horario.component.html',
  styleUrls: ['./table-horario.component.scss']
})
export class TableHorarioComponent {
  customers = [
    {
      id: 1000,
      name: 'James Butt',
      country: {
          name: 'Algeria',
          code: 'dz'
      },
      company: 'Benton, John B Jr',
      date: '2015-09-13',
      status: 'unqualified',
      verified: true,
      activity: 17,
      representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
      },
      balance: 70663
  },
  {
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},
{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},
{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
  ];
}
