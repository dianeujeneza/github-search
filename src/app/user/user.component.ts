import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // users:User[];
  user: User;

  constructor(private Re) {
   }

  ngOnInit() {
    
    // interface ApiResponse{
    //   login:string;
    //   name:string;
    //   avatar_url:string;
    //   public_repos:number;
    // }
    // this.http.get<ApiResponse>("'https://api.github.com/users/'+username+'?access_token='+ environment.myApi").subscribe(data=>{

    //   this.user= new User(data.login,data.name,data.avatar_url,data.public_repos,);
    // })
  }
}