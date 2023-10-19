import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export class HelloBean{
    constructor(
      private message: string
    ){

    }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  excuteHelloWorldBeanService(){
    
    return this.http.get<HelloBean>('http://localhost:8082/api/hello-world/bean'); 
  }

  excuteHelloWorldBeanServiceWithVariable(name: string){
    return this.http.get<HelloBean>(`http://localhost:8082/api/hello-world/${name}`); 
    
  }
}
