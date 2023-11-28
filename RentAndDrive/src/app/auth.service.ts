import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedFlag: boolean = false;
  private isAuthenticatedFlagAdmin: boolean = false;

  setAuthenticatedUser(status: boolean): void {
    this.isAuthenticatedFlag = status;
  }
  setAuthenticatedAdmin(status: boolean): void {
    this.isAuthenticatedFlagAdmin = status;
  }

  // Check if the user is authenticated
  isAuthenticatedUser(): boolean {
    return this.isAuthenticatedFlag;
  }
  isAuthenticatedAdmin(): boolean {
    return this.isAuthenticatedFlagAdmin;
  }
}
