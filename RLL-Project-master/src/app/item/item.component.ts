import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/item';
import { itemService } from 'src/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

itemname:String='';
itemnumber:number=-123;
quantity:number=-11;
description:String='';
productid:number=-11;
unitprice:number=-11;
totalprice:number=-11;
discount:number=-11;
status:String='';

  constructor(private itemService:itemService ) { }

  ngOnInit(): void {
  }
  add()
  {
    const item = new Item();
    item.itemName = this.itemname;
    item.itemNumber = this.itemnumber;
    item.quantity = this.quantity;
    item.description = this.description;
    item.productId = this.productid;
    item.unitPrice = this.unitprice;
    item.totalPrice = this.totalprice;
    item.discount = this.discount;
    item.status = this.status;
    this.itemService.registerItem(item).subscribe((resp:any)=>{
      alert("item added");
    })
}
}
