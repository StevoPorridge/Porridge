import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private subjects: { [key: string]: BehaviorSubject<any> } = {};

  constructor() {}

  get<T>(
    key: string,
    defaultValue: T | null = null,
  ): BehaviorSubject<T | null> {
    if (!this.subjects[key]) {
      const storedValue = this.getFromStorage<T>(key) ?? defaultValue;
      this.subjects[key] = new BehaviorSubject<T | null>(storedValue);
    }
    return this.subjects[key];
  }

  set<T>(key: string, value: T): void {
    this.saveToStorage<T>(key, value);
    const subject = this.get<T>(key);
    subject.next(value);
  }

  clear<T>(key: string): void {
    this.saveToStorage<T>(key, null);
    const subject = this.get<T>(key);
    subject.next(null);
  }

  private getFromStorage<T>(key: string): T | null {
    const raw = localStorage.getItem(key);
    try {
      return raw ? (JSON.parse(raw) as T) : null;
    } catch (e) {
      console.error(`Error parsing localStorage key "${key}"`, e);
      return null;
    }
  }

  private saveToStorage<T>(key: string, value: T | null): void {
    if (value === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
}
