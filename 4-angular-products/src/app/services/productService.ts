// src/app/services/product.service.ts
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    // ✅ USAR URL COMPLETA
    private url: string = 'http://localhost:8080/api/products';
    private http = inject(HttpClient);

    findAll(): Observable<Product[]> {
        console.log('📡 Llamando a:', this.url);
        return this.http.get(this.url).pipe(
            map((response: any) => response as Product[])
        );
    }

    findById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.url}/${id}`);
    }

    create(product: Product): Observable<Product> {
        return this.http.post<Product>(this.url, product);
    }

    update(product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.url}/${product.id}`, product);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
}