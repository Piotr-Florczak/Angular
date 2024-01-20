import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  serverElements: ServerElement[] = [
    { type: 'server', name: 'Testserver', content: 'Just a test' },
  ];
  onAddServer({serverName,serverContent}) 
  {
    this.serverElements.push({
      type: 'server',
      name: serverName,
      content: serverContent
    });
  }
}
interface ServerElement {
  type: string;
  name: string;
  content: string;
}
