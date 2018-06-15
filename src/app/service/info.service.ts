import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { map} from 'rxjs/operators'

@Injectable()

export class InfoService {

  constructor(private http: Http) {

   }


  getUser(){

    return this.http.get(`http://conduit.productionready.io/api/profiles/drake`).pipe(map(res =>{ return res.json()}));

    

    
   

}


getInfo(){
  return this.http.get(`http://conduit.productionready.io/api/profiles/drake`);
}
}
