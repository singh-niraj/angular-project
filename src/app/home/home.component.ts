import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DialogService } from '../dialog.service';
import { HttpService } from '../http.service';
import { Employee } from '../model/employee';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  empData: any[] = [];
  radioCheck: boolean = false;
  empObj = <Employee>{};
  p: number = 1;
  nameSearch: string = "";

  modalRef: BsModalRef;

  config = {
    animated: true,

    ignoreBackdropClick: false,
    class: "alert alert-danger",
  };

  constructor(
    private service: HttpService,
    private modalservice: BsModalService,
    private dialogservice: DialogService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getAllRecord();
  }
  getAllRecord() {
    this.service.getEmpList().subscribe((response) => {
      //console.log(response);
      this.empData = <any>response;
      console.log(this.empData);
    });
  }

  onRadioClick(item) {
    //console.log(item);
    this.radioCheck = true;
    this.empObj = item;
  }

  onUpdate(popUp: TemplateRef<any>) {
    if (this.isRadioCheck()) {
      this.modalRef = this.modalservice.show(popUp, this.config);
    } else {
      alert("Select A Employee To Update");
    }
  }

  isRadioCheck() {
    if (this.radioCheck) return true;
    else return false;
  }

  onDelete() {
    if (this.isRadioCheck()) {
      this.dialogservice
        .OpenConfirmDialog("Do you want to delete selected Record ?")
        .afterClosed()
        .subscribe((res) => {
          // console.log(res);
          if (res) {
            this.service
              .deleteEmployee(this.empObj.id)
              .subscribe((response) => {
                console.log(response);
                this.toastr.success(response, "Delete Notification");
                this.getAllRecord();
              });
          }
        });
    } else {
      alert("Select a Employee to Delete");
    }
  }
  onChange(){
    if (this.radioCheck) {

    }else{
      alert("Select a Employee to Change Status");
    }
  }
} 
