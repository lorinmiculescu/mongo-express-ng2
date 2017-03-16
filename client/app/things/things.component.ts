import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
