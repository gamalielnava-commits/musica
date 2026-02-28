
import { Album } from './types';

export const COLORS = {
  background: '#F9F8F6', 
  cardBg: '#FFFFFF',
  textMain: '#2D2926',
  textSecondary: '#8E8A84',
  border: '#E8E6E1',
  accent: '#D1CEC7',
  pearl: '#FDFCFB'
};

export const INITIAL_ALBUMS: Album[] = [
  {
    id: 'diademas-esencia-2026',
    title: 'DIADEMAS ESENCIA',
    releaseYear: '2026',
    genre: 'Urban Soul Worship',
    coverImage: 'https://lh3.googleusercontent.com/d/13GB3Tta7XRAe7sq3i8PtZsFCxhRNuPOP',
    songs: [
      {
        id: 'esencia-01',
        title: 'Esencia Pura',
        duration: '3:58',
        lyricsSnippet: 'Buscando la esencia de Tu amor en cada nota.',
        spotifyUrl: '#'
      },
      {
        id: 'esencia-02',
        title: 'Reflejo de Tu Gloria',
        duration: '4:45',
        lyricsSnippet: 'Que mi vida sea un reflejo de Tu gloria eterna.',
        spotifyUrl: '#'
      }
    ]
  },
  {
    id: 'diademas-worship-2024-official',
    title: 'DIADEMAS WORSHIP',
    releaseYear: 'Febrero 2026',
    genre: 'Urban Worship',
    // Usamos un placeholder de alta calidad
    coverImage: 'https://picsum.photos/seed/diademas/1000/1000', 
    songs: [
      {
        id: 'track-01',
        title: 'Mi Adoración',
        duration: '4:32',
        appleMusicUrl: 'https://music.apple.com/us/album/mi-adoracion/1876319477?i=1876319478&l=es-MX',
        spotifyUrl: 'https://open.spotify.com/track/3a7eYhWtg4etaL5cvezRx4?si=7iJWb6p6Ssq7uxRmcpAOJw',
        youtubeUrl: 'https://music.youtube.com/watch?v=_dn3RD-sbXk&si=lnjLzfQnjxeNPXE7',
        lyricsSnippet: 'Toma mi vida, es mi adoración delante de Tu altar.',
        embedType: 'spotify'
      },
      {
        id: 'track-02',
        title: 'Cuando Tu Hablas',
        duration: '4:15',
        appleMusicUrl: 'https://music.apple.com/us/album/cuando-tu-hablas/1876319477?i=1876319479&l=es-MX',
        spotifyUrl: 'https://open.spotify.com/track/1zBRyTLacMN3dJabdg2MHR?si=LQcO85cISemlN8DMtbTxKQ',
        youtubeUrl: 'https://music.youtube.com/watch?v=4Kk6umTr8CY&si=ocAEI5oumgH1navQ',
        lyricsSnippet: 'Cuando Tu hablas, todo silencio se rinde ante Tu majestad.',
        embedType: 'youtube'
      },
      {
        id: 'track-03',
        title: 'Tu Amor es Suficiente',
        duration: '5:02',
        appleMusicUrl: 'https://music.apple.com/us/album/tu-amor-es-suficiente/1876319477?i=1876319480&l=es-MX',
        spotifyUrl: 'https://open.spotify.com/track/6WNCAWLRivAGXkNLNedfiQ?si=JDV_r3TpRbaoSBnoqR6JEg',
        youtubeUrl: 'https://music.youtube.com/watch?v=Np_ez9oSbJs&si=ceu6zQew8W3kcqr0',
        lyricsSnippet: 'En Tu gracia descanso, Tu amor es suficiente para mí.',
        embedType: 'spotify'
      }
    ]
  }
];
