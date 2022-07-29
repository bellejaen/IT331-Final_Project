import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  
  searchTerm: string;
  station0 = [
    {
      "name": "Batangas Provicial Police Office",
      "location": "Location: Camp Malvar, Brgy Kumintang Ilaya",
      "phoneNum": "Contact Number: 980-0400/0910-2256-638",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station1 = [
    {
      "name": "Agoncillo Municipal Police Station",
      "location": "Location: Agoncillo Municipality",
      "phoneNum": "Contact Number: 09152619656",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];
    
  station2 = [
    {
      "name": "Alitagtag Municipal Police Station",
      "location": "Location: Alitagtag Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];
      
  station3 = [
    {
      "name": "Balayan Municipal Police Station",
      "location": "Location: Balayan Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];
    
  station4 = [
    {
      "name": "Balete Municipal Police Station",
      "location": "Location: Balete Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];
          
  station5 = [
    {
      "name": "Batangas City Police Station",
      "location": "Location: Batangas City",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station6 = [
    {
      "name": "Bauan Municipal Police Station",
      "location": "Location: Bauan Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station7 = [
    {
      "name": "Calaca Municipal Police Station",
      "location": "Location: Calaca Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];
                
  station8 = [
    {
      "name": "Calatagan Municipal Police Station",
      "location": "Location: Calatagan Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];
                  
  station9 = [
    {
      "name": "Cuenca Municipal Police Station",
      "location": "Location: Cuenca Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];
                    
  station10 = [
    {
      "name": "Ibaan Municipal Police Station",
      "location": "Location: Ibaan Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];
                      
  station11 = [
    {
      "name": "Laurel Municipal Police Station",
      "location": "Location: Laurel Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];
                        
  station12 = [
    {
      "name": "Lemery Municipal Police Station",
      "location": "Location: Lemery Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station13 = [
    {
      "name": "Lian Municipal Police Station",
      "location": "Location: Lian Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
     }];

  station14 = [
    {
      "name": "Lipa City Police Station",
      "location": "Location: Lipa City",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station15 = [
    {
      "name": "Lobo Municipal Police Station",
      "location": "Location: Lobo Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station16 = [
    {
      "name": "Mabini Municipal Police Station",
      "location": "Location: Mabini Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station17 = [
    {
      "name": "Malvar Municipal Police Station",
      "location": "Location: Malvar Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station18 = [
    {
      "name": "Mataas na Kahoy Municipal Police Station",
      "location": "Location: Mataas na Kahoy Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station19 = [
    {
      "name": "Nasugbu Municipal Police Station",
      "location": "Location: Nasugbu Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station20 = [
    {
      "name": "Padre Garcia Municipal Police Station",
      "location": "Location: Padre Garcia Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];
  
  station21 = [
    {
      "name": "Rosario Municipal Police Station",
      "location": "Location: Rosario Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];
   
  station22 = [
    {
      "name": "San Jose Municipal Police Station",
      "location": "Location: San Jose Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station23 = [
    {
      "name": "San Juan Municipal Police Station",
      "location": "Location: San Juan Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station24 = [
    {
      "name": "San Luis Municipal Police Station",
      "location": "Location: San Luis Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station25 = [
    {
      "name": "San Nicolas Municipal Police Station",
      "location": "Location: San Nicolas Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station26 = [
    {
      "name": "San Pascual Municipal Police Station",
      "location": "Location: San Pascual Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];
  
  station27 = [
    {
      "name": "Santa Teresita Municipal Police Station",
      "location": "Location: Santa Teresita Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station28 = [
    {
      "name": "Santo Tomas Municipal Police Station",
      "location": "Location:Santo Tomas Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station29 = [
    {
      "name": "Taal Municipal Police Station",
      "location": "Location: Taal Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station30 = [
    {
      "name": "Tanauan City Police Station",
      "location": "Location: Tanauan City",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station31 = [
    {
      "name": "Taysan Municipal Police Station",
      "location": "Location: Taysan Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station32 = [
    {
      "name": "Tingloy Municipal Police Station",
      "location": "Location: Tingloy Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  station33 = [
    {
      "name": "Tuy Municipal Police Station",
      "location": "Location: Tuy Municipality",
      "phoneNum": "Contact Number: 09261465487",
      "email": "Email: email@gmail.com",
      "personnel": "Personnel: Mr. Carl Rosales",
      "numMissingPerson": "Number of Reported Missiong Person: ",
      "numMissingPets": "Number of Reported Missiong Pets: ",
    }];

  constructor(private route: Router) { }

  ngOnInit() {
  }

  message() {
    this.route.navigate(['/home/message']);
  }

}
