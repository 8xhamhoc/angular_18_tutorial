import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  masterService: MasterService = inject(MasterService);

  isLoader: boolean = true;

  designations: IDesignation[] = [];

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((result: APIResponseModel) => {
      this.designations = result.data;
      this.isLoader = false;
    }, error => { 
      alert("API error");
    });
  }

}
