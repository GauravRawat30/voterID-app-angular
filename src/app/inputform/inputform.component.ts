import { ActivatedRoute, Router } from '@angular/router';
import { HttpserviceService } from './../httpservice.service';

import { formModel } from './form.model';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ageValidator } from './Validator';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css'],
})
export class InputformComponent implements OnInit {
  model: formModel;

  inputForm: FormGroup;
  tdate: any;
  tdata: any;
  ddate: any;
  ddata: any;
  total: number;
  ageYear: number;
  year: boolean = false;
  allStates: any;
  dataa: any;
  postit: any;
  message: any;
  text: boolean = false;

  constructor(
    private service: HttpserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.inputForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, Validators.required),
      dob: new FormControl(null, [Validators.required, ageValidator]),
      nationality: new FormControl(null),
      state: new FormControl(null),
      city: new FormControl(null),
      pinCode: new FormControl(null, Validators.required),
    });

    this.service.getstate().subscribe((state) => {
      this.allStates = state;
    });
    console.log(this.allStates);
  }

  onSubmit() {
    console.log(this.inputForm.value);

    this.model = new formModel(
      this.inputForm.controls['firstName'].value,
      this.inputForm.controls['lastName'].value,
      this.inputForm.controls['dob'].value,
      this.inputForm.controls['city'].value,
      this.inputForm.controls['nationality'].value,
      this.inputForm.controls['state'].value,
      this.inputForm.controls['pinCode'].value
    );
    console.log(this.model);

    this.service
      .postDetails(this.model)
      .subscribe((data) => (this.postit = data));

    if (this.inputForm.valid) {
      this.router.navigate(['list']).then(() => {
        window.location.reload();
      });
      this.service.sub.subscribe((list) => window.location.reload());
    }

    /* if (this.inputForm.valid) {
      this.text = true;
      this.message = 'Form Is Submitted';
    }*/

    this.inputForm.reset();
  }
}
