import { OnInit } from '@angular/core';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AppSettingsService } from './core/services/app-settings.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle') titleField: ElementRef<HTMLElement>;

  title = 'shop';
  shopName = 'Happy Birds';

  constructor(
    private appSettingsService: AppSettingsService
    ) { }

  ngOnInit(): void {
    this.appSettingsService.getAppSettings().subscribe((settings) => {
      console.log('Setting: "' + settings.someSetting + '" was loaded from ' + settings.source);
    });
  }

  ngAfterViewInit() {
    this.titleField.nativeElement.textContent = 'Welcome to ' + this.shopName + '! A place where you can buy everything you need!';
  }
}
