import { Injectable } from '@angular/core';
import {User} from "./User";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SecurityService{
  private user: User | undefined;
  private search: string;

  constructor() {
  }

  setUser(user: User) {
    this.user = user;
  }

  getId(): number | undefined {
    return this.user?.id
  }

  isAuthenticated(): boolean {
    return this.user != undefined;
  }
}
