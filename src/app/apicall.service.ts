import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Http } from '@angular/http';

@Injectable()
export class ApicallService {
  url='http://localhost:4000'
  constructor(private httpClient: HttpClient) { }

  getHandling() {
    return this.httpClient.get(this.url)
  }

  postHandling(post: any) {
    return this.httpClient.post(this.url, post, {
      headers: {"Content-Type": "application/json"}
    })
  }

}
