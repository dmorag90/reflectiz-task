import { BuyerService } from './../../services/buyer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lnading-page',
  templateUrl: './lnading-page.component.html',
  styleUrls: ['./lnading-page.component.scss'],
})
export class LnadingPageComponent implements OnInit {
  isSubmitted: boolean = false;
  numOfVisitor: number = 0;

  hobbiesList = [
    'Cooking',
    'Bookes',
    'Gaming',
    'Gym',
    'Tenis',
    'Golf',
    'jogging',
    'Carpentary',
    'Drawing',
    'Sculpture',
    'Tai Chi',
    'Other Sports',
  ];

  buyerDetailsForm: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    birthDate: new FormControl(Date, Validators.required),
    location: new FormGroup({
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
    }),
    hobbies: new FormControl([], Validators.required),
    color: new FormControl('#fff', Validators.required),
    seats: new FormControl(null, [
      Validators.min(2),
      Validators.max(7),
      Validators.required,
    ]),
    engine: new FormControl('', Validators.required),
  });

  constructor(private buyerService: BuyerService) {}
  ngOnInit(): void {
    this.buyerDetailsForm.get('color')?.setValue('#ED0741');
    this.addCount();
  }

  get email() {
    return this.buyerDetailsForm.get('email');
  }

  get birthDate() {
    return this.buyerDetailsForm.get('birthDate');
  }

  logForm() {
    console.log(this.buyerDetailsForm);
  }
  addCount() {
    this.numOfVisitor = this.buyerService.addCount();
    console.log(this.numOfVisitor);
  }
  async submitDetails() {
    try {
      if (!this.buyerDetailsForm.valid) {
        alert('Please fill all the form fileds correctly.');
        return;
      }
      console.log(this.buyerDetailsForm.value);
      for (let key in this.buyerDetailsForm.value) {
        let value = this.buyerDetailsForm.value[key];
        if (typeof value == 'string') {
          value = value.trim();
          value = value.split(';').join('');
          this.buyerDetailsForm.get(key)?.setValue(value);
        }
      }
      let location: any = this.buyerDetailsForm.controls['location'];
      for (let key in this.buyerDetailsForm.value.location) {
        let value = this.buyerDetailsForm.value.location[key];
        if (typeof value == 'string' && location) {
          value = value.trim();
          value = value.split(';').join('');
          location.get(key).setValue(value);
        }
      }

      console.log(this.buyerDetailsForm.value);

      let result = await this.buyerService.postBuyerDetails(
        this.buyerDetailsForm.value
      );
      if (result == 'success') {
        alert(
          'Your details were saved successfully, an email with you car match will be sent to you.'
        );
        this.buyerDetailsForm.reset();
        this.isSubmitted = true;
      }
      if (result == 'error') {
        alert('Something unexpected happend. Try again.');
      }
    } catch (error) {
      console.log(error);
      alert('Something unexpected happend. Try again later.');
    }
  }
}
