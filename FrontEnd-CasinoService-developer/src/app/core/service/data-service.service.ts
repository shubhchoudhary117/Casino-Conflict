// data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer,map } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataLoadedSubject = new BehaviorSubject<boolean>(false);

  loadData(): Observable<boolean> {
    // Simulate data loading with a 2-second delay
    return timer(2000).pipe(
      take(1),
      map(() => {
        this.dataLoadedSubject.next(true); // Notify that data loading is complete
        return true;
      })
    );
  }

  isDataLoaded(): Observable<boolean> {
    return this.dataLoadedSubject.asObservable();
  }
}
