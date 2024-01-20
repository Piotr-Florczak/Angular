import { Component, Input, OnDestroy, OnChanges,SimpleChanges} from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  elements: any;


  constructor(private testService: TestServiceService) {}
  
  
  ngOnInit() {
    this.testService.subject$.subscribe({

      next: (x) => {this.elements = x;}

    })
  }
}