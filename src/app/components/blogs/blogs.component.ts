import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service'
import { MessageService } from '../../services/message.service';

/**
 * <p>
 *  This component orchestrates the displaying of Blog data to the web page.
 * </p>
 *
 * <p>Useful Class Info:</p>
 * <ul>
 *   <li>@Component         - Specifies this classes metadata that can be used and referenced from other classes and html pages. </li>
 *   <li>selector           - Specifies the component's element selector. This can be used to hook in components in html files such as <app-blogs></app-blogs>.</li>
 *   <li>templateUrl        - Specifies the location of the component's template file.</li>
 *   <li>styleUrls          - Specifies the location of the component's private CSS styles.</li>
 *   <li>impolements OnInit - Implementing this class means that on instantiation of the object on the webpage the ngOnInit method will be executed.</li>
 *   <li>ngOnInit           - Is a lifecycle hook. Angular calls this method shortly after creating the component.</li>
 *   <li>export class       - By applying export to the class, it means you can import this class elsewhere and use its logic such as in another component.</li>
 * </ul>
 *
 * <p>Useful Templating Info:</p>
 * <ul>
 *   <li>Class properties can be easily accessed in the template html by using the syntax <p>{{title}}</p></li>
 *   <li>Template bindings can be applied to properties using a pipe and the functions name, such as <p>{{title | uppercase}}</p></li>
 *   <li>Pipes are a good way to format strings, currency amounts, dates, and other display data. Angular ships with several built-in pipes and you can create your own. </li>
 *   <li>[(ngModel)] is Angular's two-way data binding syntax. It binds a classes property to the input so that data can flow in both directions, from the property to the input and back.</li>
 * </ul>
 */
@Component({
    selector: 'app-blogs',
    templateUrl: './blogs.component.html',
    styleUrls: ['./blogs.component.sass']
})
export class BlogsComponent implements OnInit {

    /** Basic class propertie. No type definition is necessary for primitives. */
    /** If type definition is wanted then <name>: <type> = <value> */
    blog: Blog = {
        id: 1,
        name: 'Windstorm'
    }

    title = "Blog Index"

    financeBlog = "finance-blog"
    chineseBlog = "chinese-blog"
    developBlog = "develop-blog"


    blogData: Blog[] = []

    /**
     * When Angular creates a BlogsComponent, the Dependency Injection system sets the blogService
     * parameter to the singleton instance of BlogService.
     * The parameter simultaneously defines a private blogService property and identifies it as a
     * BlogService injection site.
     *
     * Reserve the constructor for minimal initialization such as wiring constructor parameters to properties.
     * The constructor shouldn't do anything.
     * It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
     *
     * @param blogService
     */
    constructor(private blogService: BlogService,
                private messageService: MessageService) {
    }

    /**
     * Instead, call getBlogs() inside the ngOnInit lifecycle hook and let Angular call ngOnInit()
     * at an appropriate time after constructing a BlogsComponent instance.
     *
     * The blogService.getBlogs() method has a synchronous signature, which implies that the blogService
     * can fetch Blogs synchronously. The BlogsComponent consumes the getBlogs() result as if blogs could
     * be fetched synchronously.
     * If getBlogs() can't return immediately with hero data, it shouldn't be synchronous,
     * because that would block the browser as it waits to return data.
     *
     * blogService.getBlogs returns an Observable so that it can use the Angular HttpClient.get
     * method to fetch the blogs and have HttpClient.get() return an Observable
     * Observable is one of the key classes in the RxJS library
     *
     */
    ngOnInit(): void {
        this.ofBlogs();
    }

    onSelect(blog: Blog) {
        this.blog.name = blog.name
        this.blog.id = blog.id

        this.messageService.add(`Blogs: Selected Item: [${this.blog.name}]`);
    }

    /**
     * This version assigns an array of blogs to the component's blogs property.
     * The assignment occurs synchronously, as if the server could return blogs instantly or the browser
     * could freeze the UI while it waited for the server's response.
     * That won't work when the blogService is actually making requests of a remote server.
     */
    getBlogs(): void {
        this.blogData = this.blogService.getBlogs();
    }

    /**
     * This version waits for the Observable to emit the array of blogs,
     * which could happen now or several minutes from now.
     * The subscribe() method passes the emitted array to the callback, which sets the component's blogs property.
     * This asynchronous approach works when the blogService requests heroes from the server
     */
    ofBlogs(): void {
        this.blogService.ofBlogs().subscribe(blogs => this.blogData = blogs);
    }
}
