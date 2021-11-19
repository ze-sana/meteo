import { ViewportScroller } from '@angular/common';
import { Component,OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
//import {Api} from  "https://www.prevision-meteo.ch/services/json/Zurich";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Météo par Isabelle et Sana';
  apiUrl = 'https://www.prevision-meteo.ch/services/json/Zurich';
  data : any;
  constructor(
    //private httpClient: HttpClient
    ){}


  ngOnInit(){
    this.fetchData();
  }

  fetchData(){
    fetch(this.apiUrl).then(resp => {
      return resp.json()
  }).then(dataMeteo => {
      console.log(dataMeteo);
      this.data = dataMeteo;
    });

    // const promise = this.httpClient.get(this.apiUrl).toPromise();
    // console.log(promise);  
    // promise.then((data)=>{
    //   console.log("Promise resolved with: " + JSON.stringify(data));
    // }).catch((error)=>{
    //   console.log("Promise rejected with " + JSON.stringify(error));
    // });
  }
}
      