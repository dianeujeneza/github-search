import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Repository } from './repository';
import { Search } from './search';

@Injectable({
	providedIn: 'root'
})
export class RequestService {
	user: User;
  repository: any;
  searchRepo: any;
  repos:Repository[];
  website:Search;
  private key:String="11efeb41d8cea16ae17280f29f43c45edd949733";


	constructor(private http: HttpClient) {
    this.user = new User('', '', '',0,'',new Date());
    this.repository = new Repository('', '', '', new Date());
    this.repos=[];
	}
	githubRequest(searchName) {
		interface ApiResponse {
			login: string;
			name: string;
			avatar_url: string;
      public_repos: number;
      html_url:string;
      created_at:Date;
		}
		let promise = new Promise((resolve, reject) => {
			this.http
        .get<ApiResponse>
        ('https://api.github.com/users/'+ searchName +'?access_token=' + this.key)
        // ('https://api.github.com/users/dianeujeneza?access_token='+ environment.key)
				.toPromise()
				.then(
					(response) => {
						this.user.login = response.login;
						this.user.name = response.name;
						this.user.avatar_url = response.avatar_url;
            this.user.public_repos = response.public_repos;
            this.user.html_url = response.html_url;
            this.user.created_at = response.created_at;
						resolve();
					},
					(error) => {
						this.user.login = 'User not found';
						this.user.name = 'No name is found';
						this.user.avatar_url = 'No profile picture';
            this.user.public_repos = 0;
						reject(error);
					}
				);
    });
    return promise;
  }
  gitRepos(searchName) {
    interface ApiResponse {
        items: any;
    }

    let Repromise = new Promise((resolve, reject) => {
        this.http.get<ApiResponse>('https://api.github.com/search/repos?q=' + searchName + ' &per_page=10 ' + environment.key)
        .toPromise().then(response => 
        {for(var i in response){

          this.repos.push(response[i]);
        }
            // this.searchRepo = response.items;

            resolve();
        }, error => {
            this.searchRepo = 'error';
            reject(error);
        });
    });
    return Repromise;
}
}
