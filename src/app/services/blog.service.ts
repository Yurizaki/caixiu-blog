import { Injectable } from '@angular/core';
import { Blog, MOCK_DATA } from '../models/blog';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

/**
 * Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data.
 * They should focus on presenting data and delegate data access to a service.
 *
 * Instead of creating that service with the new keyword, use the dependency injection that Angular supports to
 * inject it into the BlogsComponent constructor.
 *
 * A Service could get blog data from anywhere such as a web service, local storage, or a mock data source.
 * Removing data access from components means you can change your mind about the implementation anytime,
 * without touching any components. They don't know how the service works.
 *
 * You must make the BlogService available to the dependency injection system before Angular can inject
 * it into the BlogsComponent by registering a provider. A provider is something that can create or deliver a service
 *
 * To make sure that the BlogService can provide this service, register it with the injector.
 * The injector is the object that chooses and injects the provider where the application requires it.
 *
 * By default, ng generate service registers a provider with the root injector for your service by
 * including provider metadata, that's providedIn: 'root' in the @Injectable() decorator
 * When you provide the service at the root level, Angular creates a single, shared instance of
 * BlogService and injects into any class that asks for it.
 *
 * Info:
 *  - @Injectable - This marks the class as one that participates in the dependency injection system.
 * is going to provide an injectable service, and it can also have its own injected dependencies.
 * It doesn't have any dependencies yet.
 * The @Injectable() decorator accepts a metadata object for the service,
 * the same way the @Component() decorator did for your component classes.
 *
 * In the tutorial on HTTP, you can see how Angular's HttpClient methods return RxJS Observable objects.
 * This tutorial simulates getting data from the server with the RxJS of() function
 */
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private messageService: MessageService) { }

  getBlogs() {
    return MOCK_DATA
  }

  ofBlogs(): Observable<Blog[]> {
    const blogs = of(MOCK_DATA);
    this.messageService.add("BlogService: Fetching blogs");
    return blogs;
  }
}
