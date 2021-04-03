import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './modules/core/components/core/core.component';
import { HeaderComponent } from './modules/core/components/header/header.component';
import { FooterComponent } from './modules/core/components/footer/footer.component';
import { CarouselComponent } from './modules/home/components/carousel/carousel.component';
import { CarouselItemComponent } from './modules/home/components/carousel/components/carousel-item/carousel-item.component';
import { SharedComponent } from './modules/shared/components/shared/shared.component';
import { TemplateBannerComponent } from './modules/shared/components/template-banner/template-banner.component';
import { PostComponent } from './modules/shared/components/post/post.component';
import { RecentPostsComponent } from './modules/shared/components/recent-posts/recent-posts.component';
import { CategoriesComponent } from './modules/shared/components/categories/categories.component';
import { TagCloudsComponent } from './modules/shared/components/tag-clouds/tag-clouds.component';
import { PostSearchComponent } from './modules/shared/components/post-search/post-search.component';
import { ModuleBannerComponent } from './modules/shared/components/module-banner/module-banner.component';
import { AboutUsComponent } from './modules/about-us/components/about-us/about-us.component';
import { AboutUsDetailComponent } from './modules/about-us/components/about-us-detail/about-us-detail.component';
import { BriefDescriptionComponent } from './modules/about-us/components/brief-description/brief-description.component';
import { BlogEntriesComponent } from './modules/blog-entries/components/blog-entries/blog-entries.component';
import { PostDetailsComponent } from './modules/post-details/components/post-details/post-details.component';
import { CommentsComponent } from './modules/post-details/components/comments/comments.component';
import { YourCommentComponent } from './modules/post-details/components/your-comment/your-comment.component';
import { CommentComponent } from './modules/post-details/components/comment/comment.component';
import { ContactUsComponent } from './modules/contact-us/components/contact-us/contact-us.component';
import { SendUsMessageComponent } from './modules/contact-us/components/send-us-message/send-us-message.component';
import { ContactInformationComponent } from './modules/contact-us/components/contact-information/contact-information.component';
import { AddressGeoMapComponent } from './modules/contact-us/components/address-geo-map/address-geo-map.component';
import { HomeComponent } from './modules/home/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CarouselItemComponent,
    SharedComponent,
    TemplateBannerComponent,
    PostComponent,
    RecentPostsComponent,
    CategoriesComponent,
    TagCloudsComponent,
    PostSearchComponent,
    ModuleBannerComponent,
    AboutUsComponent,
    AboutUsDetailComponent,
    BriefDescriptionComponent,
    BlogEntriesComponent,
    PostDetailsComponent,
    CommentsComponent,
    YourCommentComponent,
    CommentComponent,
    ContactUsComponent,
    SendUsMessageComponent,
    ContactInformationComponent,
    AddressGeoMapComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
