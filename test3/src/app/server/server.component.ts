import { Component, EventEmitter, Input, Output, numberAttribute} from "@angular/core";
import { TestServiceService } from '../test-service.service';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent
{
    @Input() element;
    constructor(private testService: TestServiceService) {}

    onDelete()
    {
        this.testService.deleteServer(this.element.id);
    }
}