import { MessageService } from './services/message.service';
import { Component, ViewChild } from '@angular/core';
import {RestServiceService} from './services/rest-service.service';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(CardComponent) cardComponent: CardComponent;
  public display:string;
  receivedData:any;
  title = 'popolaTabella';
  constructor(private rest:RestServiceService){
  }
  displayHandler(event:any)
  {
    this.cardComponent.saluto('esempio');
    console.log('sono nel display handler')
    this.receivedData=event;
    console.log(this.receivedData);
  }
}
