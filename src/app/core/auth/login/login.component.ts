import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { Errors } from '../../models/errors.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup=new FormGroup({});
  destroy$ = new Subject<void>();
  errors: Errors = { errors: {} };
  isSubmitting: boolean =false;
  loading: boolean =false;
  constructor(private formBuilder: FormBuilder,private userservice:UserService,   private  route: ActivatedRoute,   private router: Router,) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loading =true;
    // Process the login logic here

    let loginObservable =this.userservice.login( this.loginForm.value as { email: string; password: string });

    loginObservable.pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.loading =false;
        void this.router.navigate(["home"])
      },
      error: (err) => {


        this.errors = err;
        this.loading =false;
        this.isSubmitting = false;


        void this.router.navigate(["login"])
      },
    });


    console.log('Login successful!');
    console.log(this.loginForm.value);
  }
}
