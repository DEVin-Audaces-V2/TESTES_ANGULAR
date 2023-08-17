import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(): Promise<any> {

    /**
     *const response = await API('/login')
     * return response.status
     */

    return Promise.resolve(true)
  }
}
