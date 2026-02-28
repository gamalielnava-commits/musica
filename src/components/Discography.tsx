import React, { useState } from 'react';
import { Album, Song } from '../types';
import { PlayCircle, Youtube, Music, Disc, ChevronLeft, ChevronRight } from 'lucide-react';

interface DiscographyProps {
    albums: Album[];
}

const Discography: React.FC<DiscographyProps> = ({ albums }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeEmbed, setActiveEmbed] = useState<{ url: string; type: 'spotify' | 'apple' } | null>(null);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === albums.length - 1 ? 0 : prev + 1));
        setActiveEmbed(null);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? albums.length - 1 : prev - 1));
        setActiveEmbed(null);
    };

    const playSong = (song: Song, preferredPlatform: 'spotify' | 'apple') => {
        if (preferredPlatform === 'spotify' && song.spotifyUrl && song.spotifyUrl !== '#') {
            // Extraer el ID de Spotify de la URL
            const urlObj = new URL(song.spotifyUrl);
            const pathParts = urlObj.pathname.split('/');
            const trackId = pathParts[pathParts.length - 1];
            if (trackId) {
                setActiveEmbed({
                    url: `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`,
                    type: 'spotify'
                });
            }
        } else if (preferredPlatform === 'apple' && song.appleMusicUrl) {
            // Reemplazar music.apple.com por embed.music.apple.com
            const embedUrl = song.appleMusicUrl.replace('music.apple.com', 'embed.music.apple.com');
            setActiveEmbed({
                url: embedUrl,
                type: 'apple'
            });
        }
    };

    if (!albums || albums.length === 0) return null;

    const currentAlbum = albums[currentIndex];

    return (
        <section id="musica" className="py-20 md:py-32 bg-[#F9F8F6] scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 reveal">
                    <span className="text-[#8E8A84] font-black text-[10px] tracking-[0.8em] uppercase mb-4 block">Discografía</span>
                    <h3 className="text-4xl md:text-5xl lg:text-7xl font-cinzel font-bold text-[#2D2926] uppercase tracking-tighter">
                        Colección Musical
                    </h3>
                </div>

                {/* Controles del Carrusel Superiores */}
                {albums.length > 1 && (
                    <div className="flex justify-center items-center gap-6 mb-16 reveal">
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 rounded-full border border-[#E8E6E1] flex items-center justify-center text-[#2D2926] hover:bg-[#2D2926] hover:text-white transition-all soft-shadow"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <span className="text-[#8E8A84] font-bold text-xs tracking-widest">
                            {currentIndex + 1} / {albums.length}
                        </span>
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 rounded-full border border-[#E8E6E1] flex items-center justify-center text-[#2D2926] hover:bg-[#2D2926] hover:text-white transition-all soft-shadow"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                )}

                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                    >
                        {/* Como implementamos un fade/replace en vez de flex-slider real, solo mostramos el disco actual (o puedes usar slider. Acá es un replace directo)*/}
                        <div className="w-full flex-shrink-0 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start reveal animate-in fade-in duration-700">
                            {/* Lado izquierdo: Portada y Reproductor */}
                            <div className="w-full lg:w-1/2 group flex flex-col gap-8">
                                <div className="relative aspect-square max-w-[500px] w-full mx-auto overflow-hidden rounded-2xl soft-shadow bg-[#E8E6E1]">
                                    <img
                                        src={currentAlbum.coverImage}
                                        alt={currentAlbum.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                                </div>

                                {/* Reproductor incrustado dinámico */}
                                {activeEmbed && (
                                    <div className="w-full max-w-[500px] mx-auto soft-shadow rounded-xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-500">
                                        <iframe
                                            src={activeEmbed.url}
                                            width="100%"
                                            height={activeEmbed.type === 'apple' ? "150" : "152"}
                                            frameBorder="0"
                                            allowFullScreen
                                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                            loading="lazy"
                                            className="bg-transparent"
                                        ></iframe>
                                    </div>
                                )}
                            </div>

                            {/* Lado derecho: Lista de canciones */}
                            <div className="w-full lg:w-1/2">
                                <div className="mb-10 text-center lg:text-left">
                                    <span className="text-[#8E8A84] font-black text-[10px] tracking-[0.6em] uppercase mb-2 block">
                                        {currentAlbum.genre} • {currentAlbum.releaseYear}
                                    </span>
                                    <h4 className="text-4xl md:text-5xl font-cinzel font-bold text-[#2D2926] uppercase tracking-wider mb-6">
                                        {currentAlbum.title}
                                    </h4>
                                    <div className="h-[1px] w-full bg-[#E8E6E1] mb-8"></div>
                                </div>

                                <div className="space-y-4">
                                    {currentAlbum.songs.map((song, songIdx) => (
                                        <div
                                            key={song.id}
                                            className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 bg-white rounded-xl border border-[#E8E6E1] hover:border-[#2D2926] transition-all soft-shadow"
                                        >
                                            <div className="flex items-center gap-5 mb-4 sm:mb-0">
                                                <span className="text-[#8E8A84] font-cinzel font-bold text-lg w-6 text-right opacity-50">
                                                    {String(songIdx + 1).padStart(2, '0')}
                                                </span>
                                                <div>
                                                    <h5 className="text-[#2D2926] font-bold text-sm tracking-wide mb-1 uppercase">{song.title}</h5>
                                                    {song.lyricsSnippet && (
                                                        <p className="text-[#8E8A84] text-xs italic font-light line-clamp-1">{song.lyricsSnippet}</p>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3 ml-11 sm:ml-0">
                                                <span className="text-[#8E8A84] text-[10px] font-black tracking-widest mr-2">{song.duration}</span>

                                                {/* Play Apple Music */}
                                                {song.appleMusicUrl && (
                                                    <button
                                                        onClick={() => playSong(song, 'apple')}
                                                        className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F9F8F6] border border-[#E8E6E1] text-[#2D2926]/40 hover:text-[#FA243C] hover:border-[#FA243C]/30 hover:bg-[#FA243C]/5 transition-all"
                                                        title="Reproducir en Apple Music"
                                                    >
                                                        <Music className="w-4 h-4" />
                                                    </button>
                                                )}

                                                {/* Play Spotify */}
                                                {song.spotifyUrl && song.spotifyUrl !== '#' && (
                                                    <button
                                                        onClick={() => playSong(song, 'spotify')}
                                                        className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F9F8F6] border border-[#E8E6E1] text-[#2D2926]/40 hover:text-[#1DB954] hover:border-[#1DB954]/30 hover:bg-[#1DB954]/5 transition-all"
                                                        title="Reproducir en Spotify"
                                                    >
                                                        <Disc className="w-4 h-4" />
                                                    </button>
                                                )}

                                                {/* Enlace YouTube Externo */}
                                                {song.youtubeUrl && (
                                                    <a
                                                        href={song.youtubeUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F9F8F6] border border-[#E8E6E1] text-[#2D2926]/40 hover:text-[#FF0000] hover:border-[#FF0000]/30 hover:bg-[#FF0000]/5 transition-all"
                                                        title="Ver en YouTube"
                                                    >
                                                        <Youtube className="w-4 h-4" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Discography;
