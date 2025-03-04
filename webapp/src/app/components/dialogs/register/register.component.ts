import {Component, inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf, CommonModule} from "@angular/common";

@Component({
  selector: 'register-modal',
  templateUrl: 'register.component.html',
  imports: [MatDialogTitle, MatDialogContent, ReactiveFormsModule, NgIf, MatDialogClose],
})

export class RegisterDialogComponent implements OnInit {
  data = inject(MAT_DIALOG_DATA);
  private formBuilder = inject(FormBuilder);
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      id: new FormControl(this.data.id),
      first_name: new FormControl('', [
        Validators.required,
        // Validators.minLength(4),
      ]),
      last_name: new FormControl('', [Validators.required]),
      registering: new FormControl('', [Validators.required, Validators.max(this.data.needed)]),
      phoneNumber: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (!this.registerForm.valid) {
      this.registerForm.markAllAsTouched();
      return
    }
  };
}
