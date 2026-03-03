import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private http = inject(HttpClient);
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  private albumsCache: Album[] = [];
  private isLoaded = false;

  getAlbums(): Observable<Album[]> {
    if (this.isLoaded) {
      return of(this.albumsCache);
    }
    return this.http.get<Album[]>(`${this.baseUrl}/albums`).pipe(
      tap(albums => {
        this.albumsCache = albums;
        this.isLoaded = true;
      })
    );
  }

  getAlbum(id: number): Observable<Album> {
    if (this.isLoaded) {
      const album = this.albumsCache.find(a => a.id === id);
      if (album) return of(album);
    }
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album).pipe(
      tap(updatedAlbum => {
        const index = this.albumsCache.findIndex(a => a.id === updatedAlbum.id);
        if (index !== -1) {
          this.albumsCache[index] = updatedAlbum;
        }
      })
    );
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`).pipe(
      tap(() => {
        this.albumsCache = this.albumsCache.filter(a => a.id !== id);
      })
    );
  }
}
