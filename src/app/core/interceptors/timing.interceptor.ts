import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams, HttpEventType } from '@angular/common/http';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('hello from TimingInterceptor');
        if (req.url.includes('products')) {
            console.time('productsRequest');
        }

        return next.handle(req).pipe(
          filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
          map((event: HttpResponse<any>) => {
            if (event.url.includes('products')) {
                console.timeEnd('productsRequest');
            }
            return event;
          })
        );
    }
}
