import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError, share } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';

export class AppSettingsModel {
    someSetting: string;
    source: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor(
    private localStorage: LocalStorageService,
    private http: HttpClient
    ) { }

  getAppSettings(): Observable<AppSettingsModel> {
    // this.localStorage.clear();
    let appSettings = this.loadFromStorage();
    if (!appSettings) {
      // это асинхронная операция, которая может завершиться после выполнения return of(appSettings)
        this.loadFromAssets().subscribe(
            (settings) => {
                console.log('Setting: loadedFromAssets');
                appSettings = settings;
                this.localStorage.set('app-settings', JSON.stringify(appSettings));
            },
            (error) => {
                appSettings = this.getDefault();
            });
    }
    return of(appSettings);
  }

  private loadFromStorage(): AppSettingsModel {
    console.log('Setting: loadFromStorage');
    const appSettingsValue: string = this.localStorage.get('app-settings');
    if (appSettingsValue) {
        console.log('Setting: loadedFromStorage');
        const storageSettings: AppSettingsModel = JSON.parse(appSettingsValue);
        storageSettings.source = 'storage';
        return storageSettings;
    }
  }

  private loadFromAssets(): Observable<AppSettingsModel> {
    console.log('Setting: loadFromAssets');
    return this.http.get<AppSettingsModel>('../../../assets/app-settings.json').pipe(
        retry(2),
        share(),
        catchError(this.handleError)
    );
  }

  private getDefault(): AppSettingsModel {
    console.log('Setting: getDefault');
    const appSettings = new AppSettingsModel();
    appSettings.someSetting = 'default value of some setting';
    appSettings.source = 'default';
    return appSettings;
  }

  private handleError(err: HttpErrorResponse) {
    console.error('An error occurred:', err.error.message);
    return throwError('Something bad happened; please try again later.');
  }
}
