import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface posts {
  "userId": number;
  "id": number;
  "title": string;
  "body": string;
}

@Injectable({
  providedIn: 'root'
})
export class PostblogService {

  constructor(private httpClient: HttpClient) { }

  retornar() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }

}
