import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
})
export class NewComponent {
  constructor() {
    this.user = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/[a-z]/),
      ]),
      password: new FormControl(''),
    });
  }

  user: any = FormGroup;

  submit() {
    console.log(this.user.value);
  }
}
