import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/modules/auth/models/model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  clearDataFromLocalStorage() {
    localStorage.clear();
  }

  setDataToLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getDataFromLocalStorage(key: string) {
    localStorage.getItem(key);
  }

  registerUser(payload: {
    name: string;
    email: string;
    role: string;
    password: string;
  }) {
    return this.http.post('/api/auth/register', payload);
  }

  loginUser(payload: { email: string; password: string }) {
    return this.http.post<Login>('/api/auth/login', payload);
  }
}
