import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GetApplicationDataService } from './get-application-data.service';
import { AppComponent } from './app.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { AgGridModule }  from "ag-grid-angular";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents(
      []),
      HttpClientModule
  ],
  providers: [GetApplicationDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
