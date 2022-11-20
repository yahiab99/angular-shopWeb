import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { User } from 'src/models/user';
import { Router } from '@angular/router';
import { UsersService } from 'src/services/users.service';
import { ShareService } from '../../services/share.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User('','','','','','','','','','')

  users2: any = []
  users3: any = []
  userConnected: any = []

  correct: boolean = false 
  enterpng: string = 'assets/images/enter.png';
  user01: string = "assets/images/user-01.png";
  
  logindisplay: any  
  signupdisplay: any
  userdisplay: any

  constructor(private userService: UsersService, private data: DataService, private router: Router, private shareService: ShareService) {
    this.userConnected = this.data.getLogin();
    this.logindisplay = this.data.getlogind();
    this.signupdisplay = this.data.getsignupd();
    this.userdisplay = this.data.getuserd();
  }

  ngOnInit(): void {
    this.userService.getUsers2().subscribe(result  => {
      this.users2 = result;
     });
     
  }
  login(){
    this.userService.getUsers3(this.user).subscribe(result  => {
      this.users3 = result;
    });
    
    console.log(this.users3)
    let w = true
    if (this.user.userName == ''){
      alert("צריך להכניס שם משתמש ");
    }
    if (this.user.userPassword == ''){
      alert("צריך להכניס סיסמה");
    }
    else{
      for (let i = 0; i < this.users2.length; i++){
        if(this.users2[i].userName == this.user.userName && this.users2[i].userPassword == this.user.userPassword)
        {
          this.correct = true
          // alert(`${this.users2[i].firstName} שלום`);
          this.loginClean();
          this.exitLogin()
          this.userConnected.push(this.users2[i].firstName)
          console.log(this.userConnected)
          this.shareService.sendClickEvent();
          break;
        }
        else{
          this.correct = false
        }
      }
      
      if(this.correct == false){
        alert(' הנתונים שהזנת לא נכונים !!! ');
      }
    }
    
  }

  loginClean(){
    this.user.userName = ''
    this.user.userPassword = ''
  }
  exitLogin(){
    this.router.navigateByUrl('/')  
  }
  

}
