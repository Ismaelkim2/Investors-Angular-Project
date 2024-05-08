import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  animations: [
    trigger('bobInOut', [
      state('in', style({ opacity: 1, transform: 'scale(1.2)' })),
      state('out', style({ opacity: 0, transform: 'scale(1)' })),
      transition('in <=> out', animate('0.0s ease-in-out'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  animationState = 'out'; 

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.animationState = this.animationState === 'in' ? 'out' : 'in'; 
    }, 1000); 
  }

}
