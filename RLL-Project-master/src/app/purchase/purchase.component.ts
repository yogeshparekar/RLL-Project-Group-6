import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/models/purchase';
import { PurchaseService } from 'src/services/purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  itemName:String='';
  itemNumber:number=-123;
  quantity:number=-12;
  purchaseId:number=-123;
  purchaseDate:Date=new Date();
  currentStock:number=-123;
  saleDate:Date=new Date();
  totalCost:number=-123;
  unityPrice:number=-123;
  vendorName:String='';

  constructor(private purchaseService: PurchaseService) { }
  ngOnInit(): void {
  }
  add()
  {
    const purchase = new Purchase()
    purchase.itemName = this.itemName;
    purchase.itemNumber = this.itemNumber;
    purchase.quantity = this.quantity;
    purchase.purchaseId = this.purchaseId;
    purchase.purchaseDate = this.purchaseDate;
    purchase.currentStock = this.currentStock;
    purchase.saleDate = this.saleDate;
    purchase.totalCost = this.totalCost;
    purchase.unityPrice = this.unityPrice;
    purchase.vendorName = this.vendorName;
    this.purchaseService.registerPurchase(purchase).subscribe((resp:any)=>{
      alert('Purchase Added Sucessfully !!');
    })
  }
}

