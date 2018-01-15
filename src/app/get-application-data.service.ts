import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { DataModel } from './DataModel';
import { DATA} from './applicationData' 
@Injectable()
export class GetApplicationDataService {

  constructor() { }

  getData() :Observable<DataModel[]>{
    return of(DATA);
  }

}
