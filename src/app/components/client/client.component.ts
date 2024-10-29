import { Component, OnInit, inject } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../service/client.service';
import { APIResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  clientObj: Client = new Client();
  clients: Client[] = [];
  clientService: ClientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClients();
  }


  loadClients() {
    this.clientService.getClients().subscribe((res: APIResponseModel) => {
      this.clients = res.data;
    });
  }

  onSaveClient() {
    debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert('Client created successful');
        this.loadClients();
        this.clientObj = new Client();
      } else {
        alert(res.message);
      }
    });
  }

  onEdit(data: Client) {
    this.clientObj = data;
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you sure want to delete');
    if (isDelete) {
      this.clientService.deleteClientById(id).subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert('Client deleted successful');
          this.loadClients();
          this.clientObj = new Client();
        } else {
          alert(res.message);
        }
      });
    }
  }

}
