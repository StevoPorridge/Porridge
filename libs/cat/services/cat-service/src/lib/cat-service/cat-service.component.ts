import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Cat } from '@porridge/cat/models';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  usersCats: Cat[] = [];

  getCats(): Cat[] {
    return this.usersCats;
  }

  resetCats(): void {
    this.usersCats = [];
  }

  getCatById(id: string): Cat | undefined {
    return this.usersCats.find((cat) => cat.id === id);
  }

  addCat(catToAdd: Cat): void {
    catToAdd.id = uuidv4();
    this.usersCats.push(catToAdd);
  }

  removeCat(id: string): void {
    this.usersCats = this.usersCats.filter((cat) => cat.id !== id);
  }

  updateCat(id: string, updates: Partial<Cat>): void {
    const index = this.usersCats.findIndex((cat) => cat.id === id);
    if (index !== -1) {
      this.usersCats[index] = { ...this.usersCats[index], ...updates };
    }
  }
}
