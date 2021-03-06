import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user:User;
  
  constructor(private activatedRoute:ActivatedRoute,
              private userService:UserService) { 
    this.user = new User();
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params["id"];
    this.userService.retrieve(id).subscribe(
      (res:User)=>{
        this.user = res;
      }
    );
  }

  onSubmit(){
    this.userService.update(this.user).subscribe(
      (res:User)=>{
        console.log(`User id ${res.id} updated!`);
      }
    );
  }

}
