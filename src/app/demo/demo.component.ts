import { Component, OnInit } from '@angular/core';
import { SourceMapSource } from 'webpack-sources';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  product:any={
    id: "",
    name: "",
    price : "",
  }
  productArray:any = [];
  // check:boolean= false;
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem("ArrayProduct")){
      this.productArray = JSON.parse(localStorage.getItem("ArrayProduct"));
      console.log( this.productArray);
    }
    console.log( "break");
  }
  addProduct(id:string, name:string , price:string){
    this.product= {id,name,price};
    this.productArray.push(this.product);
    console.log(this.productArray);
    localStorage.setItem("ArrayProduct", JSON.stringify(this.productArray));


  }

}
