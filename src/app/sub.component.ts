import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yb-sub-component',
  template:`<h3> {{title}}</h3>`,
  styles:[``]
})
export class SubComponent {
  title:string = "Sub Component";
  constructor() { }

  ngOnInit(): void {
  }

}
