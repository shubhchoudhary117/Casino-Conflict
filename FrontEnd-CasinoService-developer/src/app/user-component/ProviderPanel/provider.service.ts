import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LimitBodyModel, LimitResBodyModel } from 'src/app/sharedModel/LimitBodyModel';
import { SubAdminModel } from 'src/app/sharedModel/SubAdminModel';
import { environment } from 'src/environments/environment';
import { MasterLimit, ProviderData, ProviderPannelApiDataResponse, SingleApiRes } from './provider.interface';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  public MasterData = new BehaviorSubject<any>(null);
  private baseUrl = environment.apiUrl;
  token = localStorage.getItem('token');
  private shareMasterData = new BehaviorSubject<any>(null);
  shareMasterData$ = this.shareMasterData.asObservable();

  constructor(private http: HttpClient) {

  }

  getData(page: number): Observable<ProviderPannelApiDataResponse> {
      return this.http.get<ProviderPannelApiDataResponse>(`${this.baseUrl}/api/getProvider/${page}`);
  }

  createProvider(data: ProviderData): Observable<ProviderData> {

      const url = `${this.baseUrl}/api/createprovider`;
      return this.http.post<ProviderData>(url, data)
  }

  updateProvider(id, data: ProviderData): Observable<ProviderData> {
      const url = `${this.baseUrl}/api/providers/${id}`;
      return this.http.put<ProviderData>(url, data)
  }

  updateData(data: any) {
      this.shareMasterData.next(data);
  }

  getSingleProvider(id: any): Observable<SingleApiRes> {
      const url = `${this.baseUrl}/api/getproviderbyid/${id}`;
      return this.http.get<SingleApiRes>(url)
  }

  getProviderSub(): Observable<SubAdminModel> {
      const url = `${this.baseUrl}/admin/subadmins`;
      return this.http.get<SubAdminModel>(url)
  }

  setSingleMaster(data: any) {
      return this.MasterData.next(data)
  }

  setSingleMasterData() {
      return this.MasterData.asObservable()
  }

  getProviderLimit(page: number): Observable<MasterLimit> {
      const url = `${this.baseUrl}/v1/master/limit/${page}`;
      return this.http.get<MasterLimit>(url)
  }

  limitPatchValue(limitBody: LimitBodyModel): Observable<LimitResBodyModel> {
      return this.http.patch<LimitResBodyModel>(`${this.baseUrl}/v1/master/limit`, limitBody)
  }
}
