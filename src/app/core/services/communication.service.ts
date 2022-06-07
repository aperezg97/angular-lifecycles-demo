import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CommunicationService {

  $observable: BehaviorSubject<string> = new BehaviorSubject<string>('');

  get value() {
    return this.$observable.value;
  }

  push(value: string): void {
    this.$observable.next(value);
  }

  get observable(): Observable<string> {
    return this.$observable.asObservable();
  }
}
