import { Component, Inject, OnInit } from '@angular/core';
import { TimeServiceService } from '../time-service.service';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-timehandler',
  templateUrl: './timehandler.component.html',
  styleUrls: ['./timehandler.component.css']
})
export class TimehandlerComponent implements OnInit {
  private clock;
  private phrase;
  

  constructor(public timeserviceservice:TimeServiceService, @Inject(DOCUMENT) document) {
    // 
   }

  ngOnInit(): void {
    
    // setTimeout(()=>{
      this.clockUpdate();
    // }, 500);
  }




  clockUpdate(){
    let today = this.timeserviceservice.getCurrentTime();
    let hoursFix;
    if(today.getHours()>12){
      hoursFix = today.getHours()-12;
    } else {
      hoursFix = today.getHours();
    }
    this.clock = hoursFix + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.phrase = this.timeserviceservice.timeToWords(hoursFix, today.getMinutes());
    document.getElementById('clock').innerHTML = this.clock;
    document.getElementById('words').innerHTML = this.phrase;
    setTimeout(()=>{
      // console.log("test");
      this.clockUpdate();
    }, 1000);
  }

}
