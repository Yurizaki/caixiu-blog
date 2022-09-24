import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.sass']
})
export class BlogDetailComponent implements OnInit {

  /**
   * A way of passing items as params from one component to another.
   * This property can then be referenced in the template of another component when wanting to include this component
   * i.e. <blog-detail [blog]="selectedBlog"></blog-detail>
   * [blog]="selectedBlog" is an Angular property binding.
   * It's a one-way data binding from the selectedBlog property of the BlogsComponent
   * to the blog property of the target element, which maps to the hero property of the BlogDetailComponent
   *
   */
  @Input() blog?: Blog

  constructor() { }

  ngOnInit(): void {
  }
}
