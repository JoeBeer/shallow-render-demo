import { Injectable } from "@angular/core";
import {Observable, of} from "rxjs";
import {HttpResponse} from "@angular/common/http";

export interface SomeObject {
  name: string;
  id: number;
}

@Injectable({
  providedIn: "root"
})
export class SomeService {

  newObject: SomeObject = {
    name: "someObject1",
    id: 1
  };

  //public getSomeObject(): Observable<SomeObject>;
  //public getSomeObject(): Observable<HttpResponse<SomeObject>>;
  //public getSomeObject(): Observable<any> {
  //  return of(this.newObject);
  //}

  public getSomeObject(): Observable<SomeObject | HttpResponse<SomeObject>> {
    return of(this.newObject);
  }
}
