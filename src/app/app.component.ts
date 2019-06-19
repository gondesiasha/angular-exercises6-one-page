import { Component } from '@angular/core';
import { Item } from './models/app.interface';
import { cart } from './models/app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exercise6';
  amount:number=0;
  arr1:Item[]=[
    {
    item:"shoes",
    price:100,
    amount:0
  },
  {
    item:"earings",
    price:150,
    amount:0
  },
  {
    item:"saree",
    price:900,
    amount:0
  },
  {
    item:"jeans",
    price:600,
    amount:0
  }
];
arr2:cart[]=[];
Onclick(id:any)
{
  this.arr2.push(this.arr1[id])
  this.amount=this.amount+this.arr1[id].price;
  

}

remove(item:any,m:number)
{
  this.arr2.splice(m,1)
  this.amount=this.amount-item.price;
}




}
