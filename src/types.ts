
export interface Song {
  id: string;
  title: string;
  duration: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  youtubeUrl?: string;
  lyricsSnippet?: string;
  embedType?: 'spotify' | 'youtube';
}

export interface Album {
  id: string;
  title: string;
  releaseYear: string;
  coverImage: string;
  songs: Song[];
  genre?: string;
}