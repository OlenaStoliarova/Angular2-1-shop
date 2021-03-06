import { UrlTree } from '@angular/router';

// rxjs
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () =>
  boolean | Promise<boolean> | Observable<boolean>;
}
