import React from 'react';
import { Album } from '../types';
import { PlayCircle, Youtube, Music, Disc } from 'lucide-react';

interface DiscographyProps {
    albums: Album[];
}

const Discography: React.FC<DiscographyProps> = ({ albums }) => {
    return (
        <section id="musica" className="py-20 md:py-32 bg-[#F9F8F6] scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 reveal">
                    <span className="text-[#8E8A84] font-black text-[10px] tracking-[0.8em] uppercase mb-4 block">Discografía</span>
                    <h3 className="text-4xl md:text-5xl lg:text-7xl font-cinzel font-bold text-[#2D2926] uppercase tracking-tighter">
                        Colección Musical
                    </h3>
                </div>

                <div className="space-y-32">
                    {albums.map((album, index) => (
                        <div
                            key={album.id}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
                        >
                            {/* Pantalla del álbum */}
                            <div className="w-full lg:w-1/2 reveal group">
                                <div className="relative aspect-square max-w-[500px] mx-auto overflow-hidden rounded-2xl soft-shadow bg-[#E8E6E1]">
                                    <img
                                        src={album.coverImage}
                                        alt={album.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                                </div>
                            </div>

                            {/* Lista de canciones */}
                            <div className="w-full lg:w-1/2 reveal-scale" style={{ transitionDelay: '200ms' }}>
                                <div className="mb-10 text-center lg:text-left">
                                    <span className="text-[#8E8A84] font-black text-[10px] tracking-[0.6em] uppercase mb-2 block">
                                        {album.genre} • {album.releaseYear}
                                    </span>
                                    <h4 className="text-4xl md:text-5xl font-cinzel font-bold text-[#2D2926] uppercase tracking-wider mb-6">
                                        {album.title}
                                    </h4>
                                    <div className="h-[1px] w-full bg-[#E8E6E1] mb-8"></div>
                                </div>

                                <div className="space-y-4">
                                    {album.songs.map((song, songIdx) => (
                                        <div
                                            key={song.id}
                                            className="group flex flex-col md:flex-row md:items-center justify-between p-5 bg-white rounded-xl border border-[#E8E6E1] hover:border-[#2D2926]/30 transition-all soft-shadow cursor-default"
                                        >
                                            <div className="flex items-center gap-5 mb-4 md:mb-0">
                                                <span className="text-[#8E8A84] font-cinzel font-bold text-lg w-6 text-right opacity-50">
                                                    {String(songIdx + 1).padStart(2, '0')}
                                                </span>
                                                <div>
                                                    <h5 className="text-[#2D2926] font-bold text-sm tracking-wide mb-1 uppercase group-hover:text-[#4A4541] transition-colors">{song.title}</h5>
                                                    {song.lyricsSnippet && (
                                                        <p className="text-[#8E8A84] text-xs italic font-light line-clamp-1">{song.lyricsSnippet}</p>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 ml-11 md:ml-0">
                                                <span className="text-[#8E8A84] text-[10px] font-black tracking-widest mr-2">{song.duration}</span>
                                                {song.spotifyUrl && song.spotifyUrl !== '#' && (
                                                    <a href={song.spotifyUrl} target="_blank" rel="noopener noreferrer" className="text-[#2D2926]/40 hover:text-[#1DB954] transition-colors" title="Escuchar en Spotify">
                                                        <Disc className="w-4 h-4" />
                                                    </a>
                                                )}
                                                {song.youtubeUrl && (
                                                    <a href={song.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-[#2D2926]/40 hover:text-[#FF0000] transition-colors" title="Ver en YouTube">
                                                        <Youtube className="w-4 h-4" />
                                                    </a>
                                                )}
                                                {song.appleMusicUrl && (
                                                    <a href={song.appleMusicUrl} target="_blank" rel="noopener noreferrer" className="text-[#2D2926]/40 hover:text-[#FA243C] transition-colors" title="Escuchar en Apple Music">
                                                        <Music className="w-4 h-4" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Discography;
