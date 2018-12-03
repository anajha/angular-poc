import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BackendOperationsService {
  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8080/';
 
  public createEntity(create) {
    return this.http.post(this.userUrl+"/create", create);
  }

  public getEntityStructure(tableName)
  {
    return this.http.get(this.userUrl+"/viewSchema/"+tableName)
  }
  public getEntityList(){
    return this.http.get(this.userUrl+"/listAllTables")
  }
  public saveEntityData(insert)
  {
    return this.http.post(this.userUrl+"/insertData/",insert);
  }
  public viewEntityData(tableName)
  {
    return this.http.get(this.userUrl+"/viewData/"+tableName)
  }
}
