import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  
  searchTerm: string;
  stations = [
    {
      "name": "Agoncillo Municipal Police Station",
    },

    {
      "name": "Alitagtag Municipal Police Station",
    },

    {
      "name": "Balayan Municipal Police Station (Batangas Provincial Police Office)",
    },

    {
      "name": "Balete Municipal Police Station (Batangas Provincial Police Office)",
    },

    {
      "name": "Batangas City Police Station",
    },

    {
      "name": "Bauan Municipal Police Station",
    },
    
    {
      "name": "Calaca Municipal Police Station",
    },

    {
      "name": "Calatagan Municipal Police Station",
    },

    {
      "name": "Cuenca Municipal Police Station",
    },

    {
      "name": "Ibaan Municipal Police Station",
    },

    {
      "name": "Laurel Municipal Police Station",
    },

    {
      "name": "Lemery Municipal Police Station (Batangas Provincial Police Office)",
    },

    {
      "name": "Lian Municipal Police Station",
    },

    {
      "name": "Lipa City Police Station",
    },

    {
      "name": "Lobo Municipal Police Station",
    },

    {
      "name": "Mabini Municipal Police Station (Batangas Provincial Police Office)",
    },

    {
      "name": "Malvar Municipal Police Station",
    },

    {
      "name": "Mataas na Kahoy Municipal Police Station",
    },

    {
      "name": "Nasugbu Municipal Police Station",
    },

    {
      "name": "Padre Garcia Municipal Police Station",
    },

    {
      "name": "Rosario Municipal Police Station (Batangas Provincial Police Office)",
    },

    {
      "name": "San Jose Municipal Police Station (Batangas Provincial Police Office)",
    },

    {
      "name": "San Juan Municipal Police Station (Batangas Provincial Police Office)",
    },

    {
      "name": "San Luis Municipal Police Station (Batangas Provincial Police Office)",
    },

    {
      "name": "San Nicolas Municipal Police Station (Batangas Provincial Police Office)",
    },

    {
      "name": "San Pascual Municipal Police Station",
    },

    {
      "name": "Santa Teresita Municipal Police Station (Batangas Provincial Police Office)",
    },

    {
      "name": "Santo Tomas Municipal Police Station (Batangas Provincial Police Office)",
    },

    {
      "name": "Taal Municipal Police Station",
    },

    {
      "name": "Tanauan City Police Station",
    },

    {
      "name": "Taysan Municipal Police Station",
    },

    {
      "name": "Tingloy Municipal Police Station",
    },

    {
      "name": "Tuy Municipal Police Station",
    },

  ];

  constructor(private route: Router) { }

  ngOnInit() {
  }

  message() {
    this.route.navigate(['/home/message']);
  }

}
