import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    console.log('[HTTP] Request', req.method, req.urlWithParams);
    return next.handle(req).pipe(
      tap({
        next: () => console.log('[HTTP] Response for', req.urlWithParams, 'took', Date.now() - started, 'ms'),
        error: (err) => console.error('[HTTP] Error for', req.urlWithParams, err)
      })
    );
  }
}
