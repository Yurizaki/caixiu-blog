import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from '../components/blogs/blogs.component';

const routes: Routes = [
  { path: 'blogs', component: BlogsComponent }
];

/**
 * In Angular, the best practice is to load and configure the router in a separate,
 * top-level module. The router is dedicated to routing and imported by the root AppModule.
 * By convention, the module class name is AppRoutingModule and it belongs in the app-routing.module.ts
 * in the src/app directory.
 *
 * --flat	Puts the file in src/app instead of its own directory.
 * --module=app	Tells ng generate to register it in the imports array of the AppModule.
 *
 * First, the app-routing.module.ts file imports RouterModule and Routes so the application can have routing capability.
 * The next import, BlogsComponent, gives the Router somewhere to go once you configure the routes.
 *
 * The next part of the file is where you configure your routes.
 * Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar.
 * Since app-routing.module.ts already imports BlogsComponent, you can use it in the routes array:
 * A typical Angular Route has two properties:
 * path	A string that matches the URL in the browser address bar.
 * component	The component that the router should create when navigating to this route.
 * This tells the router to match that URL to path: 'blogs' and display the BlogsCopmonent
 * when the URL is something like localhost:4200/blogs.
 *
 * The @NgModule metadata initializes the router and starts it listening for browser location changes.
 * The following line adds the RouterModule to the AppRoutingModule imports array and
 * configures it with the routes in one step by calling RouterModule.forRoot():
 * imports: [ RouterModule.forRoot(routes) ],
 * The method is called forRoot() because you configure the router at the application's root level.
 * The forRoot() method supplies the service providers and directives needed for routing,
 * and performs the initial navigation based on the current browser URL.
 *
 * Next, AppRoutingModule exports RouterModule to be available throughout the application.
 * exports: [ RouterModule ]
 *
 * The RouterOutlet is one of the router directives that became available to the AppComponent because
 * AppModule imports AppRoutingModule which exported RouterModule.
 * The ng generate command you ran at the start of this tutorial added this import because of the --module=app flag.
 * If you didn't use the ng generate command to create app-routing.module.ts,
 *  import AppRoutingModule into app.module.ts and add it to the imports array of the NgModule.
 */

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
