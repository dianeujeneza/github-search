import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Search } from '../search';
import { Repository } from '../repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  goToUrl(find){
    this.router.navigate(['/user',find])
  }
  
  // searchInfo = new Search('');
  // @Output() getName = new EventEmitter<Search>();

  // searchFor(data){
  //     this.getName.emit(data.value.find);
  //     console.log(data.value.find)
  //     data.reset();
  // }
  // searchName:string;
  // website:Search;
  // repo:Repository[];
  // RequestService: any;

  // search(){
  //   this.RequestService.githubRequest(this.searchName)
  //   this.website=this.RequestService.search
  //   this.RequestService.gitRepos(this.searchName)
  //   this.repo=this.RequestService.repos
  // }




  constructor(private router:Router) { }

  ngOnInit() {
  }

}
