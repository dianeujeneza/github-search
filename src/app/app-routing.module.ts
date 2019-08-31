import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'search-form', component: SearchFormComponent},
  { path: 'user/:username', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
