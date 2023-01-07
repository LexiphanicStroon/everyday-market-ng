import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model';
import { CategoriesService } from '../../core/services/categories.service';
@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  categories!: Category[];
 selectedCategory!: Category;
  constructor(private readonly categoriesService: CategoriesService) { }
 
  ngOnInit() {
    this.categoriesService.loadCategories()
    .then(r => this.categories = r);
  }

onCategoryChanged(category: Category) {
  this.selectedCategory = category;
  alert(category.name);
}

}
