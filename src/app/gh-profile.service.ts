import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GhProfileService {
private usernmame:string;
private clientid:'8ac81a7c355fc0d41aa6';
private clientsecret:'1d606642bfa2901ec54a6bedc4fedb26eb47cbde';
  constructor(private http:Http) {
   console.log("Service is now ready");
   this.username = 'ArundaVictor';
  }

  getProfileInfo(){
    retun this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret" + this.clientsecret).map(res => res.json());
  }
}
