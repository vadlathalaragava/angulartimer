import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.css']
})
export class TimersComponent implements OnInit {

  constructor() { }

 
  arr:any[];
  ngOnInit() {
    for(var i=0;i<100;i++){
      setTimeout (() => {
        for(var j=0;j<6;j++){
         document.write(j + "<br> : first code");
       }
       
      },i * 2000);
     
    }
    
    for(var ar=0;ar<=100;ar++){
      (function(ar){
        setTimeout(function(){
          document.write(ar+ "<br>: Second code");
          console.log(ar);

        },ar*1000);
      })(ar); 
    }

    var b=0;
    (function rotate(){
      if(b++ > 100) return;
      setTimeout(function(){
        document.write(b + "<br>:Third code ");
        rotate();

      },1000);
    })();


   }
 
 
  
      
     
 
    

}
