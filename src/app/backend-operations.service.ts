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

  private userUrl = 'http://localhost:8080';

  public getUsers() {
    return this.http.get(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createEntity(create) {
    console.log(create);
    return this.http.post(this.userUrl+"/create", create);
  }

  public mapToObj(map)
  {
    console.log(map);
    let obj=Object.create(null);
    for(let[k,v] of map.entries())
    {
      console.log("Key is:-"+k+" Value is:-"+v);
      obj[k]=v;
    }
    console.log(obj);
    return obj;
  }
}
