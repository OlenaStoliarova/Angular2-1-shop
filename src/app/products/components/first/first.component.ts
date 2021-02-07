import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { Constants, ConstantsService } from 'src/app/core/services/constants.service';
import { GeneratedString } from 'src/app/core/services/generator.factory';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  constructor(
    private configOptionsService: ConfigOptionsService,

    @Optional()
    @Inject(ConstantsService)
    public constants: Constants,

    @Optional()
    @Inject(GeneratedString)
    public generatedString: string,

    @Optional()
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.configOptionsService.setOrUpdateConfig({id: "1", login: "login1"});
    console.log(this.configOptionsService.getConfig());
    this.configOptionsService.setOrUpdateConfig({email: "a@b.ua", id: "2"});
    console.log(this.configOptionsService.getConfig());

    this.localStorageService.set("test", "1");
    console.log(this.localStorageService.get("test"));
  }
}
