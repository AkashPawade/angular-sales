import { Component, OnInit } from '@angular/core';
import { Salesperson } from 'src/app/classs/salesperson';

@Component({
  selector: 'app-salespersonlist',
  templateUrl: './salespersonlist.component.html',
  styleUrls: ['./salespersonlist.component.css']
})
export class SalespersonlistComponent implements OnInit {

  constructor() { }
  inputData : Salesperson = new Salesperson("", "", "" , 0);
  ngOnInit(): void {
    this.salesPersonList.push(this.inputData)
  }
  salesPersonList:Salesperson[]=[

  new Salesperson("akash","pawade","ak07@gmail.com",1000),
  new Salesperson("mahi","dhoni","msd07@gmail.com",1000),
  new Salesperson("rohit","sharma","rohit07@gmail.com",4000),
  new Salesperson("virat","kohali","virat7@gmail.com",3000)


]

onSubmit(){
  console.log(this.inputData);
}

}
