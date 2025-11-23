import React from 'react';
import { motion } from 'framer-motion';
import { NADIA_HERO_IMAGE } from '../constants';
import { scrollToElement } from '../utils';

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-5 py-4 sm:py-6 md:py-8 bg-hero-gradient overflow-hidden">
            {/* Gradient Blobs Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
                    style={{ background: '#E8B4A8' }}
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-12"
                    style={{ background: '#E8B4A8' }}
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -40, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-12"
                    style={{ background: '#F4F4F2' }}
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, 30, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl opacity-10"
                    style={{ background: '#151313' }}
                    animate={{
                        scale: [1, 1.15, 1],
                        x: [0, -30, 0],
                        y: [0, 25, 0],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full blur-3xl opacity-8"
                    style={{ background: '#302D2C' }}
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 20, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 19,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
            <div className="max-w-screen-sm sm:max-w-screen-md md:max-w-7xl mx-auto w-full relative z-10">
                {/* Desktop: 2 columns for text and Nadia, then video at bottom */}
                <div className="flex flex-col md:grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-4 lg:gap-6 items-start mb-4 md:mb-6">
                    {/* Left Column - Text Content */}
                    <div className="space-y-2 sm:space-y-3 md:space-y-4 w-full order-1 h-full">
                        {/* Pill Label */}
                        <motion.div
                            className="inline-block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-luxe-white/90 text-luxe-black text-[10px] sm:text-xs uppercase tracking-wider rounded-full border border-luxe-charcoal/40 shadow-sm">
                                Communauté Business • Academy • Coaching
                            </span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-luxe-cream leading-snug sm:leading-tight tracking-wide"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                        >
                            <span className="font-semibold">ELAN BC</span>{' '}
                            <span className="font-bold">BUSINESS COMMUNITY</span>
                        </motion.h1>

                        {/* Subheadline - Mise en évidence */}
                        <motion.p
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-luxe-cream font-bold mb-4 sm:mb-5 leading-tight tracking-wide"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        >
                            <span className="bg-gradient-to-r from-luxe-cream to-luxe-roseGold bg-clip-text text-transparent">
                                Business clair, actions concrètes, résultats assurés.
                            </span>
                        </motion.p>

                        {/* Supporting Paragraph */}
                        <motion.p
                            className="text-sm sm:text-base md:text-lg text-luxe-cream/90 leading-relaxed max-w-xl mb-4 sm:mb-5"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                        >
                            <span className="font-bold text-luxe-cream">Passe de l'incertitude à la clarté… et de la clarté à la croissance.</span>
                            <br />
                            <span className="text-luxe-cream/90">Avec ELAN BUSINESS, un chemin guidé pour créer et développer ton projet rentable.</span>
                            <br />
                            <a
                                href="#benefits-section"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToElement('benefits-section');
                                }}
                                className="text-luxe-cream underline hover:text-luxe-roseGold transition-colors duration-150 hover:border-b-2 hover:border-luxe-roseGold font-medium cursor-pointer"
                            >
                                👤 Découvrir mon parcours
                            </a>
                        </motion.p>

                        {/* Mobile: Nadia Card */}
                        <motion.div
                            className="md:hidden w-full space-y-4 mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                        >
                            {/* Nadia Card */}
                            <div className="bg-card-luxe border border-luxe-charcoal/25 rounded-lg p-3 flex flex-col gap-2 shadow-md hover:shadow-lg hover:border-luxe-roseGold/50 transition-all duration-150">
                                {/* Nadia Portrait */}
                                <motion.img
                                    src={NADIA_HERO_IMAGE}
                                    alt="Nadia Lakzir - Coach Business : Mindset -Marketing -Vente"
                                    className="w-full rounded-lg object-contain object-center aspect-square mb-3 bg-luxe-cream"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                />
                                {/* Nadia Info */}
                                <div className="space-y-1">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-luxe-black">Nadia</h3>
                                    <p className="text-sm text-luxe-charcoal mb-0">
                                        Coach Business : Mindset -Marketing -Vente
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mobile: Video */}
                        <motion.div
                            className="md:hidden w-full mb-3"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                        >
                            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-luxe-charcoal/25 shadow-md">
                                <iframe
                                    src="https://player.vimeo.com/video/1139166666?title=0&byline=0&portrait=0"
                                    className="absolute top-0 left-0 w-full h-full"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="Vidéo de présentation ELAN BC"
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Mobile: CTA Buttons (after video) */}
                        <motion.div
                            className="md:hidden flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-3"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
                        >
                            <motion.button
                                onClick={() => scrollToElement('contact-form')}
                                className="w-full px-6 sm:px-8 py-3 h-11 bg-button-cta text-luxe-cream text-sm sm:text-base font-semibold rounded-full hover:shadow-lg hover:shadow-luxe-black/40 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-luxe-black focus:ring-offset-2 focus:ring-offset-luxe-cream"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Rejoindre ELAN maintenant
                            </motion.button>
                            <motion.button
                                className="w-full px-6 sm:px-8 py-3 h-11 border-2 border-luxe-black text-luxe-black bg-transparent text-sm sm:text-base font-semibold rounded-full hover:bg-luxe-black hover:text-luxe-cream transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-luxe-black focus:ring-offset-2 focus:ring-offset-luxe-cream"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Découvrir les parcours
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Right Column - Desktop: Nadia Card */}
                    <motion.div
                        className="hidden md:flex md:flex-col w-full order-2 h-full"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                        {/* Nadia Card */}
                        <motion.div
                            className="bg-card-luxe border border-luxe-charcoal/25 rounded-lg p-3 flex flex-col gap-2 shadow-md hover:shadow-lg h-full"
                            whileHover={{ translateY: -4, borderColor: "#E8B4A8" }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Nadia Portrait */}
                            <motion.img
                                src={NADIA_HERO_IMAGE}
                                alt="Nadia Lakzir - Fondatrice de ELAN BUSINESS COMMUNITY (ELAN BC)"
                                className="w-full rounded-lg object-contain object-center aspect-square mb-3 bg-section-gradient"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />
                            {/* Nadia Info */}
                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold text-luxe-black">Nadia Lakzir</h3>
                                <p className="text-sm text-luxe-charcoal mb-0">
                                    Coach Business : Mindset -Marketing -Vente
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Desktop: Video + CTA at bottom center */}
                <motion.div
                    className="hidden md:flex md:flex-col w-full max-w-2xl mx-auto items-center justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                    {/* Video - Web Style */}
                    <motion.div
                        className="relative w-full aspect-video rounded-lg overflow-hidden border-2 border-luxe-charcoal/25 shadow-lg hover:border-luxe-roseGold hover:shadow-xl transition-all duration-150"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                    >
                        <iframe
                            src="https://player.vimeo.com/video/1139166666?title=0&byline=0&portrait=0"
                            className="absolute top-0 left-0 w-full h-full"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Vidéo de présentation ELAN BC"
                        ></iframe>
                    </motion.div>

                    {/* Desktop: CTA Buttons (Centered under video) */}
                    <div className="flex flex-col gap-3 w-full pt-4">
                        <motion.button
                            onClick={() => scrollToElement('contact-form')}
                            className="w-full px-6 py-3 h-11 bg-button-cta text-luxe-cream text-sm font-semibold rounded-full hover:opacity-90 hover:shadow-lg hover:shadow-luxe-black/40 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-luxe-black focus:ring-offset-2 focus:ring-offset-luxe-cream"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Rejoindre ELAN BC maintenant
                        </motion.button>
                        <motion.button
                            className="w-full px-6 py-3 h-11 border-2 border-luxe-black text-luxe-black bg-transparent text-sm font-semibold rounded-full hover:bg-button-cta hover:text-luxe-cream transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-luxe-black focus:ring-offset-2 focus:ring-offset-luxe-cream"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Découvrir les parcours
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
