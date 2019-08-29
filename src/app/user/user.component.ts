import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse{
      username:string;
      fullName:string;
      profile:string;
      repoNumber:number;
    }
    this.http.get<ApiResponse>("'https://api.github.com/users/'+username+'?access_token='+ environment.myApi")
  }


}
