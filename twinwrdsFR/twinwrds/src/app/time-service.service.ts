import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { environment as env } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TimeServiceService {

  constructor(private http: HttpClient) {
    console.log('Instantiating ItemService');
  }

  getCurrentTime(){
    console.log("time called")
    var today = new Date();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return today;
  }
  getTimeData(){
    console.log("Fetching data...")
    console.log("URL: "+`${env.API_URL}/time`);
    return this.http.get(`${env.API_URL}/time`,{responseType:'json',observe:"response"});
  }

  createTimeData(){
    console.log("Fetching data...")
    console.log("URL: "+`${env.API_URL}/time`);
    return this.http.post(`${env.API_URL}/time`,{responseType:'json',observe:"response"});
  }

  timeToWords(hours, minutes){
    let words = [
      "zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen",
      "fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty",
      "twenty one","twenty two","twenty three","twenty four","twenty five","twenty six","twenty seven",
      "twenty eight","twenty nine"];

    let phrase = '';
    if(minutes == 0){
        phrase = words[hours] + " " + "o' clock";
    } else if (minutes==1){
      phrase = words[hours] + " " + "o' clock";
    } else if (minutes==15){
      phrase = "quarter past " + words[hours];
    } else if (minutes<30 && minutes!=15){
      phrase = words[minutes]+" past " + words[hours];
    } else if (minutes==30){
      phrase = "half past "+words[hours];
    } else if (minutes>30 && minutes!=45){
      let sub = 60-minutes;
      phrase = words[sub] + " minutes to " + words[hours+1];
    } else if(minutes==45){
      phrase = "quarter til "+words[hours+1];
    }
    return phrase;
  }



}
