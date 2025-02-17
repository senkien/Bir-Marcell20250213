import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() a!: number;
  @Input() b!: number;
  @Output() result = new EventEmitter<number>();

  calculate(isAddition: boolean) {
    this.result.emit(isAddition ? this.a + this.b : this.a - this.b);
  }

}
