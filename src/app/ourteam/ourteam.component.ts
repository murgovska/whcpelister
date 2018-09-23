import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.scss']
})
export class OurteamComponent implements OnInit {

  players = [
    {image: 'angela_jankulovska', nameSurname:'Angela Jankulovska', dateOfBirth:'27.07.2002', position:'Left Back, Playmaker'},
    {image: 'anastasija_belevska', nameSurname:'Anastasija Belevska', dateOfBirth:'03.01.2003', position:'Right Wing, Right Back'},
    {image: 'maja_karanfilovska', nameSurname:'Maja Karanfilovska', dateOfBirth:'01.05.1996', position:'Left Back, Right Back'},
    {image: 'anastasija_nikolovska', nameSurname:'Anastasija Nikolovska', dateOfBirth:'12.08.1998', position:'Left Wing'},
    {image: 'arijona_raif', nameSurname:'Arijona Raif', dateOfBirth:'18.06.2001', position:'Left Back, Right Back'},
    {image: 'dimitrieva_ilina', nameSurname:'Dimitrieva Ilina', dateOfBirth:'05.11.2000', position:'Pivot'},
    {image: 'dragana_milosavljevikj', nameSurname:'Dragana Milosavljevikj', dateOfBirth:'left wing,28.04.2002', position:'Playmaker'},
    {image: 'frosina_apostolovska', nameSurname:'Frosina Apostolovska', dateOfBirth:'18.06.2001', position:'Playmaker, Right Back'},
    {image: 'grujevska_ivona', nameSurname:'Grujevska Ivona', dateOfBirth:'-', position:'-'},
    {image: 'iva_bozhinoska', nameSurname:'Iva Bozhinoska', dateOfBirth:'21.01.1999', position:'Playmaker'},
    {image: 'kakovska_kristina', nameSurname:'Kakovska Kristina', dateOfBirth:'-', position:'Pivot'},
    {image: 'medea_chokeli', nameSurname:'Medea Chokeli', dateOfBirth:'02.01.1999', position:'Pivot'},
    {image: 'sandra_durlanova', nameSurname:'Sandra Durlanova', dateOfBirth:'02.11.1994', position:'Goalkeeper'},
    {image: 'sashka_filiposka', nameSurname:'Sashka Filiposka', dateOfBirth:'13.12.1999', position:'Pivot'},
    {image: 'slobodanka_kiceska', nameSurname:'Slobodanka Kiceska', dateOfBirth:'16.12.1999', position:'Goalkeeper'},
    {image: 'talevska_monika', nameSurname:'Monika Talevska', dateOfBirth:'03.09.1995', position:'Left Wing'},
    {image: 'vaska_gligorjadis', nameSurname:'Vaska Gligorjadis', dateOfBirth:'20.07.1999', position:'Right Wing'},
  ]

  otherMembers = [
    {image: 'viktorija_blazhevska', nameSurname: 'Viktorija Blazhevska', dateOfBirth: '20.02.1992', position: 'Coach'},
    {image: 'jovan_vasilev', nameSurname: 'Jovan Vasilev', dateOfBirth: '30.10.1949', position: 'President'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
