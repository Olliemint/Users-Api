import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_URL = 'http://127.0.0.1:8000/api/users/'

  constructor(private http: HttpClient) { }

  listUsers(){
    return this.http.get<Users>(this.API_URL);
  }
  delUsers(id:any){
    return this.http.delete<Users>(`${this.API_URL}${id}`);

  }
  AddUser(data:any){
    return this.http.post<Users>(`${this.API_URL}`,data)
  }
  
  getSingleUser(id:any){
    return this.http.get<Users>(`${this.API_URL}${id}`);
  }

  editUser(id:number,data:any){

    return this.http.put<Users>(`${this.API_URL}${id}/`,data)


  }
  


}
