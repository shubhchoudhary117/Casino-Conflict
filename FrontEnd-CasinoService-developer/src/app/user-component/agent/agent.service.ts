import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LimitBodyModel, LimitResBodyModel } from 'src/app/sharedModel/LimitBodyModel';
import { environment } from 'src/environments/environment';
import { Agent, AgentResponseData, AgentSuper } from './agent.interface';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
loadSuperData;
getSuperId:any;
private baseUrl = environment.apiUrl;
superId = parseInt(localStorage.getItem('superId'))

  constructor(private http: HttpClient) { }

  getData(page: number): Observable<AgentResponseData> {
    return this.http.get<AgentResponseData>(`${this.baseUrl}/v1/agent/page/${page}`)
  }
  createAgnet(agentId:number,data: Agent): Observable<Agent> {
    const url = `${this.baseUrl}/v1/agent/${agentId}/save`;
    return this.http.post<Agent>(url, data)
  }
  getSuperAgentData(id:number):Observable<Agent>{
    const url = `${this.baseUrl}/v1/agent/super/${id}`;
    return this.http.get<Agent>(url);
  }
  getSingleAgentData(id:number):Observable<Agent>{
    const url = `${this.baseUrl}/v1/agent/${id}`;
    return this.http.get<Agent>(url);
  }
  limitAgent(superId:any,page:number):Observable<AgentResponseData>{
    const url = `${this.baseUrl}/v1/agent/limit/${superId}/${page}`;
    return this.http.get<AgentResponseData>(url);
  }
  limitPatchValue(limitBody: LimitBodyModel): Observable<LimitResBodyModel> {
    return this.http.patch<LimitResBodyModel>(`${this.baseUrl}/v1/super/limit`, limitBody)
}
updateAgent(id:number,data:any):Observable<Agent>{
  const url = `${this.baseUrl}/v1/agent/${id}/update`;
  return this.http.put<Agent>(url,data)
}
}
