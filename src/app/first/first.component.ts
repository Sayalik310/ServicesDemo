import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
   users : user[] = [];
   u !: user;
   idToGet !: number;
  constructor(private us : UserService) {
   }

  ngOnInit(): void {
  }

  getUsers(){
    this.us.getAllUsers().subscribe(data =>{
      this.users = data;
    })
  }

  getUserById(){
    this.us.getUserByID(this.idToGet).subscribe(data => {
      this.u = data
    })

  }

}