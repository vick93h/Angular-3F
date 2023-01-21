import {Component, ViewChild} from '@angular/core';
import {OperazioniCrudComponent} from '../Insert/operazioni-crud.component';
import {RestServiceService} from '../services/rest-service.service';
import {DeleteComponent} from '../delete/delete.component';
import { ReadComponent } from '../read/read.component';
import { TabellaComponent } from '../tabella/tabella.component';
@Component({
  selector: 'app-lista-op',
  templateUrl: './lista-op.component.html',
  styleUrls: ['./lista-op.component.css']
})
export class ListaOpComponent {
  @ViewChild(OperazioniCrudComponent)insert!:OperazioniCrudComponent
  @ViewChild(DeleteComponent)delete!:DeleteComponent
  @ViewChild(ReadComponent)read!:ReadComponent
  @ViewChild(TabellaComponent)tabella!:TabellaComponent;
  public inserisci:boolean=false;
  public leggi:boolean=false;
  public aggiorna:boolean=false;
  public cancella:boolean=false;
  constructor(private service: RestServiceService) {
  }
    Inserted() {
    this.inserisci=true;
    if(this.service.areaCondivisa.sel==true)
    {
         this.insert.ngAfterViewInit();
    }

  }

     Read() {
    this.leggi=true;
    if(this.service.areaCondivisa.selectRead==true){
      console.log("sono nella read");
         this.read.ngAfterViewInit();
  }
 }

  Update() {
    this.aggiorna=true;
  }

    Delete() {
    this.cancella=true;
    if(this.service.areaCondivisa.sel==true)
    {
         this.delete.ngAfterViewInit();
    }
  }
}
