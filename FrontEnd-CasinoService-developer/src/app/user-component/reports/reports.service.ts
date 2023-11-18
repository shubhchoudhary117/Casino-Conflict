import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AllUserData, AllMSACReport, AllMSACReportData } from './reports';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMasterDataReport():Observable<AllUserData>{
    return this.http.get<AllUserData>(`${this.baseUrl}/v1/master/report`)
  }
  getSuperDataReport():Observable<AllUserData>{
    return this.http.get<AllUserData>(`${this.baseUrl}/v1/super/report`)
  }
  getAgentDataReport():Observable<AllUserData>{
    return this.http.get<AllUserData>(`${this.baseUrl}/v1/agent/report`)
  }
  getClientDataReport():Observable<AllUserData>{
    return this.http.get<AllUserData>(`${this.baseUrl}/v1/client/report`)
  }

  createMasterData(masterData:AllMSACReport):Observable<AllMSACReport>{
    return this.http.post<AllMSACReport>(`${this.baseUrl}/v1/master/report`,masterData)
  }
  createSuperData(superData:AllMSACReportData):Observable<AllMSACReport>{
    return this.http.post<AllMSACReport>(`${this.baseUrl}/v1/super/report`,superData)
  }
  createAgentData(superData:AllMSACReportData):Observable<AllMSACReport>{
    return this.http.post<AllMSACReport>(`${this.baseUrl}/v1/agent/report`,superData)
  }
  createClientData(superData:AllMSACReportData):Observable<AllMSACReport>{
    return this.http.post<AllMSACReport>(`${this.baseUrl}/v1/client/report`,superData)
  }
}
