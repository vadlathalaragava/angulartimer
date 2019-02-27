import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.css']
})
export class TimersComponent implements OnInit {

  constructor() { }

 
 
  ngOnInit() {
    for(var i=0;i<100;i++){
      setTimeout (() => {
        for(var j=0;j<6;j++){
         console.log(j);
       }
       console.log('---------------');
      },i * 2000);
     
    }


   }
 
 
  
      
     
 
    

}
