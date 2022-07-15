import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder,private route:Router,private dataservice:DataService) { 
    this.angForm = fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      address:['',Validators.required],
      message:['',Validators.required],
    });
  }

  ngOnInit(): void {
  }
  postdata(data:any){
    this.dataservice.AddUser(this.angForm.value).subscribe((data)=>{
      this.route.navigate(['list-users']);
    })

  }

}
