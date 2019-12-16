import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'myAngularProject';
  con=true;
  @Input() trf;
  //array for ul
  list=[
   {
    name:"list1",
    number:1
   } ,
   {
    name:"list2",
    number:2
   } 
  ]
  //array for cards
  cards=[
    {
      period:"monthly",
      border:"danger",
      price:"20000",
      currency:"$"
    },
    {
      period:"weekly",
      border:"warning",
      price:"5000",
      currency:"INR"
    },
    {
      period:"daily",
      border:"success",
      price:"10000",
      currency:"EURO",
      trf:true
    },
    {
      period:"monthly",
      border:"danger",
      price:"220000",
      currency:"$"
    },
    {
      period:"yearly",
      border:"primary",
      price:"50000",
      currency:"INR"
    }
  ]
 //function to add cards
  addcard(){
    let card={
      period:"yearly",
      border:"primary",
      price:"50000",
      currency:"INR"
    }
    this.cards.push(card)
  }

  toddle(){
    this.con =!this.con;
  }
}
