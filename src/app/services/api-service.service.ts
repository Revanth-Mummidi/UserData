import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface UserType {
  _id: undefined | string;
  firstname: string;
  email: string;
  lastname: string;
  dob: string;
  description: string;
  gender: string;
}

interface UserResponse {
  message: string;
  data: UserType[];
  token: any;
}

interface PageType {
  pageNumber: number;
  pageSize: number;
}

const base_url = 'http://localhost:3000/api/users';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) {

  }

  login(body: any): Observable<UserResponse> {
   
    return this.http.post<UserResponse>(`${base_url}/auth/login`, body);
  }

  register(body: any): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${base_url}/auth/register`, body);
  }

  getCategorizedUsers(body: any): Observable<UserResponse> {
    var t = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + t
    });

    const httpOptions = {
      headers: headers_object
    };
    return this.http.post<UserResponse>(`${base_url}/getcategorizeddata`, body,httpOptions);
  }

  getAllUsers(): Observable<UserResponse> {
    var t = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + t
    });

    const httpOptions = {
      headers: headers_object
    };

    return this.http.get<UserResponse>(base_url,httpOptions);
  }

  uploadFile(file: File): Observable<any> {
    var t = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders({
      'Authorization': "Bearer " + t
    });

    const httpOptions = {
      headers: headers_object
    };
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${base_url}/upload`, formData,httpOptions);
  }

  getSplitUsers(data: PageType | any): Observable<any> {
    console.log("DATA", data);
    var t = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + t
    });

    const httpOptions = {
      headers: headers_object
    };

    return this.http.post<UserResponse>(`${base_url}/split`, data , httpOptions);
  }

  createUser(user: UserType): Observable<any> {
    var t = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + t
    });

    const httpOptions = {
      headers: headers_object
    };
    console.log("USER DETAILS=", user);
    return this.http.post<any>(base_url, user , httpOptions);
  }

  updateUser(user: UserType): Observable<UserResponse> {
    var t = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + t
    });

    const httpOptions = {
      headers: headers_object
    };
    
    return this.http.put<UserResponse>(`${base_url}/${user._id}`,  user , httpOptions);
  }

  deleteUser(id: string): Observable<UserResponse> {
    var t = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + t
    });

    const httpOptions = {
      headers: headers_object
    };

    return this.http.delete<UserResponse>(`${base_url}/${id}` , httpOptions);
  }

}
