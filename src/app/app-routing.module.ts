import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent } from  './modules/home/components/home/home.component';
import { AboutUsComponent } from './modules/about-us/components/about-us/about-us.component';
import { ContactUsComponent } from './modules/contact-us/components/contact-us/contact-us.component';
import { BlogEntriesComponent } from './modules/blog-entries/components/blog-entries/blog-entries.component';
import { PostDetailsComponent } from './modules/post-details/components/post-details/post-details.component';


const routes: Routes = [
  { path:"" , redirectTo:"/home",pathMatch:"full" },
  { path:  "aboutus" , component: AboutUsComponent},
  { path:  "blogentries" , component:BlogEntriesComponent},
  { path:  "contactus" , component:ContactUsComponent},
  { path:  "postdetails" , component:PostDetailsComponent},
  { path:  "home" , component:HomeComponent},
  {path:"*",component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
