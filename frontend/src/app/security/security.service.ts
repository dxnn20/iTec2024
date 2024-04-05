import { Injectable } from '@angular/core';
import {User} from "./User";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SecurityService{
  private user: User | undefined;
  private search: string;

  setUser(user: User) {
    this.user = user;
  }

  isAuthenticated(): boolean {
    return this.user !== undefined;
  }
}
