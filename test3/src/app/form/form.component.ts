import { Component,EventEmitter,Output } from '@angular/core';
import { TestServiceService } from '../test-service.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent 
{
  newServerName : string ='';
  newServerContent : string ='';

  constructor(private testService: TestServiceService) {}

  onAddServer() 
  {
    this.testService.addServer(this.newServerName,this.newServerContent);
    this.testService.displayServers();
  }
}
