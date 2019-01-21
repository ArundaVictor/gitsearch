import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GhProfileService {
private username:string;
private clientid:'8ac81a7c355fc0d41aa6';
private clientsecret:'1d606642bfa2901ec54a6bedc4fedb26eb47cbde';
  constructor(private http:HttpClient) {
   console.log("Service is now ready");
   this.username = 'ArundaVictor';
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret" + this.clientsecret);

  }
}
