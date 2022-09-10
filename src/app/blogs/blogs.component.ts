import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.sass']
})
export class BlogsComponent implements OnInit {

  blog: Blog =  {
    id: 1,
    name: 'Windstorm'
  }

  title = "Blog Index"

  financeBlog = "finance-blog"
  chineseBlog = "chinese-blog"
  developBlog = "develop-blog"

  constructor() { }

  ngOnInit(): void {
  }


}
