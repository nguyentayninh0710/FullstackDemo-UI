import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
   name = '';
   message:string = '';

  constructor(private router: ActivatedRoute, 
              private welcome: WelcomeDataService,
              ){
    
  }

  ngOnInit(){
    console.log(this.router.snapshot.params['name']);
    this.name = this.router.snapshot.params['name'];
  }

  getWelcomeMessage(){
    console.log(this.welcome.excuteHelloWorldBeanService());
    this.welcome.excuteHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  getWelcomeMessageWithParrameter(){
    console.log(this.welcome.excuteHelloWorldBeanServiceWithVariable);
    this.welcome.excuteHelloWorldBeanServiceWithVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response: any){
    this.message = response.message;
      console.log(response);
      console.log(response.message);
  }

}
