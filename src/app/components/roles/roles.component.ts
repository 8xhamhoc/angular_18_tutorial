import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  
  roles: IRole[] = [];
  http: HttpClient = inject(HttpClient);

  // constructor(private http: HttpClient) {

  // }

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    // this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles")
    // .subscribe((res:any) => {
    //   this.roles = res.data;
    // });
    
    this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles")
    .subscribe((res: APIResponseModel) => {
      this.roles = res.data;
    });
  }




  // firstName: string = "Angular tutorial";
  // angularVersion: string = "Version 18";

  // version: number = 18;
  // isActive: boolean = false;
  // currentDate: Date = new Date();
  // inputType: string = "button";
  // selectedState: string = '';

  // showWelcomeAlert() {
  //   alert("Welcome to Angular 18 Tutorial");
  // }

  // showMessage(message: string) {
  //   alert(message);
  // }

}
