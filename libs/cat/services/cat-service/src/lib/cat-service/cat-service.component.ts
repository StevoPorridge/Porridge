import { inject, Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Cat } from '@porridge/cat/models';
import { LocalStorageService } from '@state/local-storage';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  store = inject(LocalStorageService);

  private key = 'cats';

  usersCats$ = this.store.get<Cat[]>(this.key);

  getCats(): Cat[] {
    return this.usersCats$.value ?? [];
  }

  resetCats(): void {
    this.store.clear<Cat[]>(this.key);
  }

  getCatById(id: string): Cat | undefined {
    return this.getCats().find((cat) => cat.id === id);
  }

  addCat(catToAdd: Cat): void {
    catToAdd.id = uuidv4();
    const updated = [...this.getCats(), catToAdd];
    this.store.set<Cat[]>(this.key, updated);
  }

  removeCat(id: string): void {
    const updated = this.getCats().filter((cat) => cat.id !== id);
    this.store.set<Cat[]>(this.key, updated);
  }

  updateCat(id: string, updates: Partial<Cat>): void {
    const updated = this.getCats().map((cat) =>
      cat.id === id ? { ...cat, ...updates } : cat,
    );
    this.store.set<Cat[]>(this.key, updated);
  }
}
