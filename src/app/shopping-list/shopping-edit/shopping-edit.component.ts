import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import {Ingredient} from '../../common/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('amountRef', { static: false }) amount: ElementRef;
  @ViewChild('nameRef', { static: false }) name: ElementRef;
  @Output() itemAdded = new EventEmitter<Ingredient>();

  constructor() { }

  clearForm = () => {
    this.name.nativeElement.value = '';
    this.amount.nativeElement.value = '';
  }

  addIngredient = () => {
    this.itemAdded.emit(new Ingredient(
      this.name.nativeElement.value,
      this.amount.nativeElement.value,
    ));
    this.clearForm();
  }

  ngOnInit() {
  }

}
