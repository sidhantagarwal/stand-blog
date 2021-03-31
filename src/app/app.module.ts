import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/core/header/header.component';
import { FooterComponent } from './modules/core/footer/footer.component';
import { CarouselComponent } from './modules/home/carousel/carousel.component';
import { CarouselItemComponent } from './modules/home/components/carousel-item/carousel-item.component';
import { TemplateBannerComponent } from './modules/shared/components/template-banner/template-banner.component';
import { PostComponent } from './modules/shared/components/post/post.component';
import { RecentPostsComponent } from './modules/shared/components/recent-posts/recent-posts.component';
import { CategoriesComponent } from './modules/shared/components/categories/categories.component';
import { TagCloudsComponent } from './modules/shared/components/tag-clouds/tag-clouds.component';
import { PostSearchComponent } from './modules/shared/components/post-search/post-search.component';
import { ModuleBannerComponent } from './modules/shared/components/module-banner/module-banner.component';
import { AboutUsDetailComponent } from './modules/about-us/components/about-us-detail/about-us-detail.component';
import { BriefDescriptionComponent } from './modules/about-us/components/brief-description/brief-description.component';
import { CommentsComponent } from './modules/post-details/components/comments/comments.component';
import { YourCommentComponent } from './modules/post-details/components/your-comment/your-comment.component';
import { CommentComponent } from './modules/post-details/components/comment/comment.component';
import { SendUsMessageComponent } from './modules/contact-us/components/send-us-message/send-us-message.component';
import { ContactInformationComponent } from './modules/contact-us/components/contact-information/contact-information.component';
import { AddressGeoMapComponent } from './modules/contact-us/components/address-geo-map/address-geo-map.component';
import { HomeComponent } from './modules/home/home/home.component';
import { ContactUsComponent } from './modules/contact-us/contact-us/contact-us.component';
import { PostDetailsComponent } from './modules/post-details/components/post-details/post-details.component';
import { BlogEntriesComponent } from './modules/blog-entries/blog-entries/blog-entries.component';
import { AboutUsComponent } from './modules/about-us/about-us/about-us.component';
import { SharedComponent } from './modules/shared/shared/shared.component';
import { CoreComponent } from './modules/core/core/core.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CarouselItemComponent,
    TemplateBannerComponent,
    PostComponent,
    RecentPostsComponent,
    CategoriesComponent,
    TagCloudsComponent,
    PostSearchComponent,
    ModuleBannerComponent,
    AboutUsDetailComponent,
    BriefDescriptionComponent,
    CommentsComponent,
    YourCommentComponent,
    CommentComponent,
    SendUsMessageComponent,
    ContactInformationComponent,
    AddressGeoMapComponent,
    HomeComponent,
    ContactUsComponent,
    PostDetailsComponent,
    BlogEntriesComponent,
    AboutUsComponent,
    SharedComponent,
    CoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
