import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
users:any = [];

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    
    this.fetchUsers();
    
    
  }
  deleteUser(id:any){
    this.dataservice.delUsers(id).subscribe(()=>{
      this.fetchUsers();

    });

  }
 fetchUsers(){

  this.dataservice.listUsers().subscribe((data)=>{
    this.users = data;
    console.log(this.users);
  })

 }
}
