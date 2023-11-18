import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from './client-panel.interface';
import { clientAndProviderData, ClientApiDataResponse, clientDetails, SingleApiRes } from './client-panel.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public clientData = new BehaviorSubject<any>(null);
  private baseUrl = environment.apiUrl;
  token = localStorage.getItem('token');
  private shareClientData =new BehaviorSubject<any>(null);
  shareClientData$ = this.shareClientData.asObservable();
  subId;
  providerId = localStorage.getItem('providerId');

  constructor(private http: HttpClient) { }

  getData(page: number): Observable<ClientApiDataResponse> {
    return this.http.get<ClientApiDataResponse>(`${this.baseUrl}/client/page/${page}`)
  }
  getDataByProviderId(providerId:any):Observable<ClientApiDataResponse>{
    return this.http.get<ClientApiDataResponse>(`${this.baseUrl}/client/${providerId}`);
  }

  updateData(data: any) {
    this.shareClientData.next(data);
  }



  getSingleClient(id:any):Observable<clientAndProviderData>{
    const url = `${this.baseUrl}/v1/client/${id}`;
    return this.http.get<clientAndProviderData>(url)
  }

  setSingleClient(data:any){
    return this.clientData.next(data);
  }

  setSingleClientData(){
    return this.clientData.asObservable();
  }

  createClient(providerId:number,data:Client):Observable<Client>{
    const url = `${this.baseUrl}/client/${providerId}`;
    return this.http.post<Client>(url, data);
  }

    updateClient(id,data:Client){
    const url = `${this.baseUrl}/v1/client/${id}/update`;
    return this.http.put<Client>(url,data)
  }

  getProviderDataById(id:any):Observable<any>{
    const url = `${this.baseUrl}/api/getproviderbyid/${id}`;
    return this.http.get(url);
  }
}
