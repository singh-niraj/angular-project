import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { ModalModule } from "ngx-bootstrap/modal";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
import { ParticlesModule } from "angular-particle";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/material.module";
import { MatConfirmDialogComponent } from "./shared/mat-confirm-dialog/mat-confirm-dialog.component";
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from "ngx-pagination";
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    EmpDetailsComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    FilterPipe,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ParticlesModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-top-right",
      preventDuplicates: true,
    }),
    NgxPaginationModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatConfirmDialogComponent],
})
export class AppModule {}
