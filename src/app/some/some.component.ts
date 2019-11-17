import { Component, OnInit } from "@angular/core";
import {SomeObject, SomeService} from "../service/some.service";

@Component({
  selector: "app-some",
  templateUrl: "./some.component.html",
  styleUrls: ["./some.component.sass"]
})
export class SomeComponent implements OnInit {

  someObject: SomeObject;

  constructor(private readonly someService: SomeService) { }

  ngOnInit() {
    this.someService.getSomeObject().subscribe(someObject => {
      this.someObject = someObject;
    });
  }
}
