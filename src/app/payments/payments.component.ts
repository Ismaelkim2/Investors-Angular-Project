import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'; 

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
  animations: [
    trigger('bobInOut', [
      state('in', style({ opacity: 1, transform: 'scale(1.2)' })),
      state('out', style({ opacity: 0, transform: 'scale(0.5)' })),
      transition('in <=> out', animate('0.1s ease-in-out'))
    ])
  ]
})
export class PaymentsComponent implements OnInit {
  animationState = 'out'; 

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.animationState = this.animationState === 'in' ? 'out' : 'in'; 
    }, 1000); 
  }
}
