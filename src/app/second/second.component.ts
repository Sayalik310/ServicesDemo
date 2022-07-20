import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    { "id": 11, "name": "Chris", "age": "25" },
    { "id": 12, "name": "Josph", "age": "25" },
    { "id": 13, "name": "Alex", "age": "39" }
]

}