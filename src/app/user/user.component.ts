import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { RequestService } from '../request.service';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // users:User[];
  user: User;
  searchName:string;
  repos: any;

  constructor(private githubRequestService:RequestService, 
    public userRepos: RequestService,private route:ActivatedRoute) {
    // this.githubRequestService=githubRequestService;
   }
//   constructor(private githubService:RequestService, private http: HttpClient){
// this.githubService.gitUser().subscribe(user =>{
//   this.user=user;
// });
// this.githubService.gitRepos().subscribe(repos =>{
//   this.repos = repos;
// });
//   }

  ngOnInit() {
    let username = this.route.snapshot.paramMap.get('username')
    this.githubRequestService.githubRequest(this.searchName)
    this.user=this.githubRequestService.user
    // this.githubRequestService.gitRepos(this.searchName)
    // this.user=this.githubRequestService.user
    // this.githubRequestService.githubRequest(this.searchName);
    //   this.user = this.githubRequestService.user;
    //   this.userRepos.gitRepos(this.searchName);
      // console.log(this.userRepos);
    
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
