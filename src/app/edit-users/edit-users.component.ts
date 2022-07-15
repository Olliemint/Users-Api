import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  angForm: FormGroup;
  id: any;
  

  constructor(private fb: FormBuilder,private route:Router,private dataservice:DataService,private activatedroute:ActivatedRoute) { 
    this.angForm = fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      address:['',Validators.required],
      message:['',Validators.required],
    });
  }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(paramId => {
      this.id = paramId.get('id');
      console.log(this.id);
      this.dataservice.getSingleUser(this.id).subscribe(data => {
        this.angForm.patchValue(data);
      });

    })
  }
  postdata(data:any){
    this.dataservice.editUser(this.id,this.angForm.value).subscribe((data)=>{
      this.route.navigate(['list-users']);
    })

  }

}
