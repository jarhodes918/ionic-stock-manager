import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastComponent } from './toast/toast.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    // Shared Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // Shared Components
    ToastComponent
  ],
  declarations: [
    ToastComponent
  ],
  providers: [
    ToastComponent
  ]
})
export class SharedModule { }
