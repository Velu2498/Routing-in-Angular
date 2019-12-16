import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-cardbody',
  templateUrl: './cardbody.component.html',
  styleUrls: ['./cardbody.component.css']
})
export class CardbodyComponent implements OnInit {
  @Input() price;
  @Input() color;
  @Input() pay;
  @Input() trf;
  @Input() currency;
  constructor() { }

  ngOnInit() {
  }

}
