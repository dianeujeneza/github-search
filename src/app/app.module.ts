import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { RepositoryComponent } from './repository/repository.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    UserComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
