import { Component, inject, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetail implements OnInit {
  private route : ActivatedRoute = inject(ActivatedRoute);
  private albumService : AlbumService = inject(AlbumService);

  album = signal<Album | null>(null);
  editTitle = signal('');
  isLoading = signal(true);
  isSaving = signal(false);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.fetchAlbum(id);
      }
    });
  }

  fetchAlbum(id: number) {
    this.albumService.getAlbum(id).subscribe({
      next: (data : Album) => {
        this.album.set(data);
        this.editTitle.set(data.title);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  onTitleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.editTitle.set(input.value);
  }

  save() {
    const current = this.album();
    if (current) {
      this.isSaving.set(true);
      const updated: Album = { ...current, title: this.editTitle() };
      this.albumService.updateAlbum(updated).subscribe({
        next: (res : Album) => {
          this.album.set(res);
          this.isSaving.set(false);
        },
        error: () => this.isSaving.set(false)
      });
    }
  }
}
