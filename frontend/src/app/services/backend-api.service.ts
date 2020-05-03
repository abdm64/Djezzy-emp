import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

const BASE_URL = environment.api+'emp/'

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http:HttpClient) { }


  fetchuser(email : string){

  return  this.http.get(BASE_URL+email)
  }
}
