import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  

  customerInfo: any[]=[];
 constructor(private customerService: CustomerService) {}


ngOnInit() {
  this.customerService.getData('get').subscribe(response => {
    if (response && response.status === 200 && response.data && response.data.customerInfo) {
      this.customerInfo = response.data.customerInfo;
    }
  });
}
}
