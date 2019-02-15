import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const experiences = [
      { id: 1, companyUrl:'../../assets/images/company/nyc.jpg', 
        company: 'NYC Department of Education', 
        duration:'May 2016 - Till date', 
        position: 'Senior Developer',
        country: "USA", countryUrl:'../../assets/images/flags/usa.jpg' },
        { id: 2, companyUrl:'../../assets/images/company/SCC.jpg', 
        company: 'Surrey County Council', 
        duration:'October 2014 to March 2016', 
        position: 'Lead Developer',
        country: "UK", countryUrl:'../../assets/images/flags/uk.jpg' },
        { id: 3, companyUrl:'../../assets/images/company/fsi.jpg', 
        company: 'First Sports International', 
        duration:'September 2013 to October 2014', 
        position: 'Lead Developer',
        country: "UK", countryUrl:'../../assets/images/flags/uk.jpg' },
        { id: 4, companyUrl:'../../assets/images/company/RBI.jpg', 
        company: 'Reed Business Information', 
        duration:'November 2012 to August 2013', 
        position: 'Senior Developer',
        country: "UK", countryUrl:'../../assets/images/flags/uk.jpg' },
        { id: 5, companyUrl:'../../assets/images/company/ht.png', 
        company: 'Harvey and Thomson Ltd', 
        duration:'August 2012 to November 2012', 
        position: 'Senior Developer',
        country: "UK", countryUrl:'../../assets/images/flags/uk.jpg' },
        { id: 6, companyUrl:'../../assets/images/company/slam.png', 
        company: 'South London and Maudsley NHS Trust', 
        duration:'February 2011 to October 2012', 
        position: 'Senior Developer',
        country: "UK", countryUrl:'../../assets/images/flags/uk.jpg' },
        { id: 7, companyUrl:'../../assets/images/company/Logica.jpg', 
        company: 'CGI', 
        duration:'November 2005 to Jan 2010', 
        position: 'IT Consultant',
        country: "India", countryUrl:'../../assets/images/flags/india.jpg' },
        { id: 8, companyUrl:'../../assets/images/company/icode.jpg', 
        company: 'Icode Softwares', 
        duration:'February 2001 to November 2005', 
        position: 'Software Consultant',
        country: "India", countryUrl:'../../assets/images/flags/india.jpg' },
        { id: 9, companyUrl:'../../assets/images/company/datasoft.png', 
        company: 'Datasoft Application Software Ltd', 
        duration:'February 1998 to January 2001', 
        position: 'Senior Developer/ Team Lead',
        country: "India", countryUrl:'../../assets/images/flags/india.jpg' }
    ];
    return {heroes,experiences};
  }
    // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}
