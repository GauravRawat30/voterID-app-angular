import { FormGroup, FormControl } from '@angular/forms';
import { HttpserviceService } from './../httpservice.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit,OnChanges {
  allList: any;
  statelist: any;
  inputList: FormGroup;
  specificList: any;

  constructor(private servlist: HttpserviceService) {}
  ngOnChanges(){
    
  }

  ngOnInit() {
    this.servlist
      .getstate()
      .subscribe((allStates) => (this.statelist = allStates));
    this.servlist.getlist().subscribe((list) => (this.allList = list));

    this.inputList = new FormGroup({
      state: new FormControl(null),
    });
  }

  submitList() {
    console.log(this.inputList.controls['state'].value);
    this.servlist
      .getListFromList(this.inputList.controls['state'].value)
      .subscribe((data) => (this.allList = data));
    this.inputList.patchValue({
      state: 'Select State',
    });
  }
  userList() {
    this.servlist.getlist().subscribe((list) => (this.allList = list));
    this.servlist.sub.next(this.allList);
  }
}
