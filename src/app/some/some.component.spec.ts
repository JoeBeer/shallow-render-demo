import {async} from "@angular/core/testing";

import {SomeComponent} from "./some.component";
import {Shallow} from "shallow-render";
import {AppModule} from "../app.module";
import {SomeObject, SomeService} from "../service/some.service";
import {of} from "rxjs";
import {HttpResponse} from '@angular/common/http';

describe("SomeComponent", () => {
  let shallow: Shallow<SomeComponent>;

  beforeEach(async(() => {
    shallow = new Shallow(SomeComponent, AppModule);
  }));

  describe("ngOnInit", () => {
    it("should call some service", async () => {
      const {instance} = await shallow
        .mock(SomeService, {getSecurity: () => of(createSomeObject())})
        .render();

      expect(instance.someObject.name).toBe("someOtherObject");
      expect(instance.someObject.id).toBe(777);

    });
  });

  function createSomeObject(): SomeObject | HttpResponse<SomeObject> {
    return {
      name: "someOtherObject",
      id: 777
    };
  }
});
