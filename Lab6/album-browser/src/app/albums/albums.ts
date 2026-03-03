import { Component, inject, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-albums',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css'
})
export class Albums implements OnInit {
  private albumService : AlbumService = inject(AlbumService);

  albums = signal<Album[]>([]);
  isLoading = signal(true);
  deletingAlbumId = signal<number | null>(null);

  ngOnInit() {
    this.albumService.getAlbums().subscribe({
      next: (data : Album[]) => {
        this.albums.set(data);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  deleteAlbum(event: Event, id: number) {
    event.stopPropagation();
    this.deletingAlbumId.set(id);
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums.update(list => list.filter(a => a.id !== id));
        this.deletingAlbumId.set(null);
      },
      error: () => this.deletingAlbumId.set(null)
    });
  }
}
