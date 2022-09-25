import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

import { AppComponent } from './app.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './modules/app-routing.module';

/**
 * The imports array contains the list of external modules that the application needs.
 */
@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    TrackerComponent,
    BlogDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
