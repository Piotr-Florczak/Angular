import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TestServiceService {
  subject$ = new Subject();

  constructor (private http: HttpClient) {}

  getFromDB(): Observable<ServerElement[]> {
    return this.http.get<ServerElement[]>('http://localhost:8080/api/v2/getall');
  }
  

  serverElements: ServerElement[] = [];
  private id: number = 0;
  index: number;

  addServer(serverName: string, serverContent: string) 
  {
    this.serverElements.push({
      id: this.id++,
      serverName: serverName,
      serverContent: serverContent,
    });
    this.subject$.next(this.serverElements);
  }
  deleteServer(id: number)
  {
    this.index = this.serverElements.findIndex(item => item.id === id);
    this.serverElements.splice(this.index, 1);
    this.subject$.next(this.serverElements);  
  }

  displayServers()
  {
    this.getFromDB().subscribe({
      next: data => {
        console.log(data);
        
      }
    })
  }
}







interface ServerElement {
  id: number;
  serverName: string;
  serverContent: string;
}
