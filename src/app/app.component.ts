import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private daysArray = ['Sunday', 'Monday', 'Tuesday', '  Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
  private date = new Date();

  public hour: any;
  public minute: any;
  public second: any;
  public ampm: any;
  public day: any;
  public month: any;
  public dnum: any;
  public year: any;

  constructor(){}

  ngOnInit() {
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    }, 1000);

    this.day = this.daysArray[this.date.getDay()];
    this.month = this.monthsArray[this.date.getMonth()];


  }

  private updateDate(date: Date){
    const hours = date.getHours();

    this.ampm = hours >= 12 ? 'PM' : 'AM';

    this.hour = hours % 12;
    this.hour = this.hour ? this.hour : 12;

    this.hour = this.hour < 10 ? '0' + this.hour : this.hour;

    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();

    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();

    const dnums = date.getDate();

    const year = date.getFullYear();



  }
  


  // const time = document.querySelector("#time");
  // title = 'clock';
  // d = new Date();
  // hours = d.getHours();
  // minutes = d.getMinutes();
  // seconds = d.getSeconds();

  // time.textContent = hours + ":" + minutes + ":"+ seconds + ":";

  // get clock(){
  //   this.d = new Date();
  //   return (this.d);
  // }

 

  // constructor(){
  //   setInterval( () => {
  //     this.d = new Date();
  //   }, 1000);
  // }
  // time = d.getTime(); 
}
