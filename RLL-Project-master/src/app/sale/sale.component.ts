import { Component, OnInit } from '@angular/core';
import { Sales } from 'src/models/sales';
import { SalesService } from 'src/services/sales.service';
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

itemName:String='';
itemNumber:number=91;
quantity:number=91;
customerName:String='';
customerId:number=91;
unityPrice:number=91;
total:number=91;
totalStock:number=91;
saleId:number=91;
discount:number=91;
saleDate:Date=new Date();

  constructor(private SalesService: SalesService) { }

  ngOnInit(): void {
  }
  add()
  {
    const sale = new Sales();
    sale.itemName = this.itemName;
    sale.itemNumber = this.itemNumber;
    sale.quantity = this.quantity;
    sale.customerName = this.customerName;
    sale.customerId = this.customerId;
    sale.unityPrice = this.unityPrice;
    sale.total = this.total;
    sale.totalStock = this.totalStock;
    sale.saleId = this.saleId;
    sale.discount = this.discount;
    sale.saleDate = this.saleDate;
    this.SalesService.registerSales(sale).subscribe((resp:any)=>{
    alert('Sale Added Sucessfully !!')
    })
    // this.snackbar.open('Sale Added Succefully','close')
  }
}
