import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LimitBodyModel, LimitResBodyModel } from 'src/app/sharedModel/LimitBodyModel';
import { environment } from 'src/environments/environment';
import { MasterSuper, SingleApiRes, SuperAgent, SuperApiDataResponse } from './super-agent.interface';

@Injectable({
  providedIn: 'root'
})
export class SuperService {
  public superData = new BehaviorSubject<any>(null);
  private shareSuperData =new BehaviorSubject<any>(null);
  shareSuperData$ = this.shareSuperData.asObservable();
  private baseUrl = environment.apiUrl;
  token = localStorage.getItem('token');
  getMasterId:any;
  masterId = localStorage.getItem('masterId');

  constructor(private http: HttpClient) {

  }

  protectedHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getData(page: number): Observable<SuperApiDataResponse> {
    return this.http.get<SuperApiDataResponse>(`${this.baseUrl}/v1/super/page/${page}`)
  }
  getSuperId():Observable<SuperApiDataResponse>{
    return this.http.get<SuperApiDataResponse>(`${this.baseUrl}/v1/super/page`)
  }
  getSingleSuperData(id:any):Observable<SingleApiRes>{
    const url = `${this.baseUrl}/v1/super/${id}`;
    return this.http.get<SingleApiRes>(url)
  }
  setSingleSuper(data:any){
    return this.superData.next(data);
  }
  createSuper(data: SuperAgent,getMasterId:any): Observable<SuperAgent> {
    const url = `${this.baseUrl}/v1/super/${getMasterId}/save`;
    return this.http.post<SuperAgent>(url, data)
  }
  setSingleMasterData(){
    return this.superData.asObservable()
  }
  updateSuper(id,data:SuperAgent){
    const url = `${this.baseUrl}/v1/super/${id}/update`;
    return this.http.put<SuperAgent>(url,data)
  }
  getSuperMaster(id):Observable<MasterSuper>{
    const url = `${this.baseUrl}/v1/super/master/${id}`;
    return this.http.get<MasterSuper>(url);
  }
  limitSuperMaster(masterId:any,page:number):Observable<SuperApiDataResponse>{
    const url = `${this.baseUrl}/v1/super/limit/${masterId}/${page}`;
    return this.http.get<SuperApiDataResponse>(url);
  }
  limitPatchValue(limitBody: LimitBodyModel): Observable<LimitResBodyModel> {
    return this.http.patch<LimitResBodyModel>(`${this.baseUrl}/v1/super/limit`, limitBody)
}

}
