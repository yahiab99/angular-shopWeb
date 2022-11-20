import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/services/users.service';
import { DataService } from 'src/services/data.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = new User('','','','','','','','','','')
  enterpng: string = 'assets/images/enter.png';
  users2: any = []

  constructor(private userService: UsersService, private router: Router, private dataService: DataService) {
  } 

  ngOnInit(): void {
    this.userService.getUsers2().subscribe(users2 => {
      this.users2 = users2
    })
  }


  signup(){
    if (this.user.firstName == ''){
      alert("חסר שם פרטי");
    }
    else if(this.user.lastName == '')
    {
        alert("חסר שם משפחה");
    }
    else if(this.user.id == '')
    {
        alert("חסר תעודת זהות");
    }
    else if(this.user.phone == '')
    {
        alert("חסר מספר נייד");
    }
    else if(this.user.mail == '')
    {
        alert("חסר כתובת מייל");
    }
    else if(this.user.userName == '')
    {
        alert("חסר שם משתמש");
    }
    else if(this.user.userPassword == '')
    {
        alert("חסר סיסמה");
    }
    else if(this.user.city == '')
    {
        alert("חסר עיר");

    }
    else if(this.user.address == '')
    {
        alert("חסר כתובת");

    }
    else if(this.user.street == '')
    {
        alert("חסר רחוב");
    }
    else{
      alert("הרשמתך בוצעה בהצלחה");
      this.clean();
      this.exitSignup()
    }
    
  }
  
  clean(){
    this.user.firstName = ''
    this.user.lastName = ''
    this.user.id = ''
    this.user.phone = ''
    this.user.mail = ''
    this.user.userName = ''
    this.user.userPassword = ''
    this.user.city = ''
    this.user.address = ''
    this.user.street = ''
  }
  exitSignup(){
    this.router.navigateByUrl('/')
  }
  addUser2(){
    this.userService.addUsers2(this.user).subscribe(result  => {
    this.users2 = result;
    });
    console.log(this.users2)
    this.signup();
  }

}
