import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './../../auth/auth.service';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(
    private formb: FormBuilder,
    private authService: AuthService
  ){}

    ngOnInit(){
        this.form = this.formb.group({
          userName: ['admin', Validators.required],
          password: ['admin', Validators.required]
        });
    }

    isFieldInvalid(field: string) {
      return (
        (!this.form.get(field).valid && this.form.get(field).touched) ||
        (this.form.get(field).untouched && this.formSubmitAttempt)
      );
    }

    onSubmit() {
      if (this.form.valid) {
        this.authService.login(this.form.value);
      }
      this.formSubmitAttempt = true;
    }
}
