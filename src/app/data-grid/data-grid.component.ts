import { Component, OnInit } from '@angular/core';
import { GridOptions } from "ag-grid";
import { GetApplicationDataService } from '../get-application-data.service';
import { DataModel } from '../DataModel';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  private gridOptions: GridOptions;
  private rowSelection;
  private autoGroupColumnDef;
  data: DataModel[];


  constructor(private getApplicationDataService: GetApplicationDataService,
    private http: HttpClient) {
    this.gridOptions = <GridOptions>{
      floatingFilter: true,
      columnDefs:
        [
          // {
          //   headerName: "Id",
          //   field: "id",
          //   headerCheckboxSelection: true,
          //   headerCheckboxSelectionFilteredOnly: true,
          //   checkboxSelection: true

          // },
          {
            headerName: "Name", 
            field: "name",
            headerCheckboxSelection: true,
            headerCheckboxSelectionFilteredOnly: true,
            checkboxSelection: true
          },
          { headerName: "Position", field: "position" },
          { headerName: "Email", field: "email" },
          { headerName: "Employment Status", field: "status" },
          { headerName: "Experience", field: "exp" },
          { headerName: "Currunt Location", field: "city" },

         

        ],
      rowSelection: "multiple",
      // rowData: this.getApplicationData.getData(),
      pagination: true,
      paginationPageSize: 10,
      enableColResize: true

    }






  }
  onGridReady(params) {
    console.log("Called");
    this.http
      .get("http://localhost:5555/data")
      .subscribe(data => {
        params.api.setRowData(data);
      });
  }

  ngOnInit() {
  }



}
