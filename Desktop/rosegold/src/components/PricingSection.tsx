import React from 'react';
import { motion } from 'framer-motion';
import { scrollToElement } from '../utils';

const PricingSection: React.FC = () => {
    return (
        <motion.section
            className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-5 bg-section-gradient overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-screen-sm sm:max-w-screen-md md:max-w-7xl mx-auto w-full">
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-6 sm:mb-8 md:mb-10 text-luxe-black leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    💰 Plans tarifaires ELAN BUSINESS COMMUNITY (ELAN BC)
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {/* Mensuel */}
                    <motion.div
                        onClick={() => scrollToElement('contact-form')}
                        className="group bg-card-luxe rounded-lg p-5 sm:p-6 md:p-8 border border-luxe-charcoal/25 shadow-md hover:shadow-xl w-full cursor-pointer flex flex-col transition-all duration-150"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ translateY: -8, borderColor: "#E8B4A8", boxShadow: "0 25px 50px -12px rgba(48, 45, 44, 0.25)" }}
                    >
                        <motion.h3
                            className="text-xl sm:text-2xl font-semibold text-luxe-black mb-3 sm:mb-4 transition-colors duration-150 group-hover:text-luxe-charcoal"
                            whileHover={{ scale: 1.05 }}
                        >
                            Mensuel
                        </motion.h3>
                        <div className="mb-4 sm:mb-6">
                            <motion.span
                                className="text-3xl sm:text-4xl font-bold text-luxe-black inline-block transition-all duration-150"
                                whileHover={{ scale: 1.1 }}
                            >
                                390 DH
                            </motion.span>
                            <span className="text-sm sm:text-base text-luxe-charcoal transition-colors duration-150 group-hover:text-luxe-black"> / mois</span>
                        </div>
                        <div className="flex-1"></div>
                        <motion.button
                            onClick={() => scrollToElement('contact-form')}
                            className="w-full px-4 sm:px-6 py-3 h-11 bg-button-cta text-luxe-cream text-sm sm:text-base font-semibold rounded-full hover:opacity-90 hover:shadow-lg hover:shadow-luxe-black/50 transition-all duration-150"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Choisir ce plan
                        </motion.button>
                    </motion.div>

                    {/* Trimestre - Highlighted */}
                    <motion.div
                        onClick={() => scrollToElement('contact-form')}
                        className="group bg-card-luxe rounded-lg p-5 sm:p-6 md:p-8 border-2 border-luxe-charcoal shadow-lg shadow-luxe-taupe/20 relative w-full cursor-pointer flex flex-col transition-all duration-150 hover:border-luxe-black"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ translateY: -8, boxShadow: "0 25px 50px -12px rgba(232, 180, 168, 0.3)", scale: 1.02 }}
                    >
                        <motion.div
                            className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2"
                            whileHover={{ scale: 1.1 }}
                        >
                            <span className="px-3 sm:px-4 py-1 bg-button-cta text-luxe-cream text-[10px] sm:text-xs uppercase rounded-full transition-all duration-150 group-hover:opacity-90 group-hover:shadow-lg">Populaire</span>
                        </motion.div>
                        <motion.h3
                            className="text-xl sm:text-2xl font-semibold text-luxe-black mb-3 sm:mb-4 transition-colors duration-150 group-hover:text-luxe-charcoal"
                            whileHover={{ scale: 1.05 }}
                        >
                            Trimestre
                        </motion.h3>
                        <div className="mb-4 sm:mb-6">
                            <motion.span
                                className="text-3xl sm:text-4xl font-bold text-luxe-black inline-block transition-all duration-150"
                                whileHover={{ scale: 1.1 }}
                            >
                                885 DH
                            </motion.span>
                            <span className="text-sm sm:text-base font-semibold text-luxe-black ml-2">live</span>
                            <div className="mt-2 text-sm sm:text-base text-luxe-charcoal transition-colors duration-150 group-hover:text-luxe-black">
                                <span className="font-semibold">295 DH</span> / mois
                            </div>
                        </div>
                        <p className="text-sm sm:text-base text-luxe-charcoal mb-3 sm:mb-4 min-h-[3rem] transition-colors duration-150 group-hover:text-luxe-black">Accès aux 2 workshops : Vente 360° et préparer son année 2026</p>
                        <div className="flex-1"></div>
                        <motion.button
                            onClick={() => scrollToElement('contact-form')}
                            className="w-full px-4 sm:px-6 py-3 h-11 bg-button-cta text-luxe-cream text-sm sm:text-base font-semibold rounded-full hover:opacity-90 hover:shadow-lg hover:shadow-luxe-black/50 transition-all duration-150"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Choisir ce plan
                        </motion.button>
                    </motion.div>

                    {/* Semestre */}
                    <motion.div
                        onClick={() => scrollToElement('contact-form')}
                        className="group bg-card-luxe rounded-lg p-5 sm:p-6 md:p-8 border border-luxe-charcoal/25 shadow-md hover:shadow-xl w-full cursor-pointer flex flex-col transition-all duration-150"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        whileHover={{ translateY: -8, borderColor: "#E8B4A8", boxShadow: "0 25px 50px -12px rgba(48, 45, 44, 0.25)" }}
                    >
                        <motion.h3
                            className="text-xl sm:text-2xl font-semibold text-luxe-black mb-3 sm:mb-4 transition-colors duration-150 group-hover:text-luxe-charcoal"
                            whileHover={{ scale: 1.05 }}
                        >
                            Semestre
                        </motion.h3>
                        <div className="mb-4 sm:mb-6">
                            <motion.span
                                className="text-3xl sm:text-4xl font-bold text-luxe-black inline-block transition-all duration-150"
                                whileHover={{ scale: 1.1 }}
                            >
                                1650 DH
                            </motion.span>
                            <span className="text-sm sm:text-base font-semibold text-luxe-black ml-2">live</span>
                            <div className="mt-2 text-sm sm:text-base text-luxe-charcoal transition-colors duration-150 group-hover:text-luxe-black">
                                <span className="font-semibold">275 DH</span> / mois
                            </div>
                        </div>
                        <p className="text-sm sm:text-base text-luxe-charcoal mb-3 sm:mb-4 min-h-[3rem] transition-colors duration-150 group-hover:text-luxe-black">Accès aux 2 workshops : Vente 360° et préparer son année 2026</p>
                        <div className="flex-1"></div>
                        <motion.button
                            onClick={() => scrollToElement('contact-form')}
                            className="w-full px-4 sm:px-6 py-3 h-11 bg-button-cta text-luxe-cream text-sm sm:text-base font-semibold rounded-full hover:opacity-90 hover:shadow-lg hover:shadow-luxe-black/50 transition-all duration-150"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Choisir ce plan
                        </motion.button>
                    </motion.div>

                    {/* Année */}
                    <motion.div
                        onClick={() => scrollToElement('contact-form')}
                        className="group bg-card-luxe rounded-lg p-5 sm:p-6 md:p-8 border border-luxe-charcoal/25 shadow-md hover:shadow-xl w-full cursor-pointer flex flex-col transition-all duration-150"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ translateY: -8, borderColor: "#E8B4A8", boxShadow: "0 25px 50px -12px rgba(48, 45, 44, 0.25)" }}
                    >
                        <motion.h3
                            className="text-xl sm:text-2xl font-semibold text-luxe-black mb-3 sm:mb-4 transition-colors duration-150 group-hover:text-luxe-charcoal"
                            whileHover={{ scale: 1.05 }}
                        >
                            Année
                        </motion.h3>
                        <div className="mb-4 sm:mb-6">
                            <motion.span
                                className="text-3xl sm:text-4xl font-bold text-luxe-black inline-block transition-all duration-150"
                                whileHover={{ scale: 1.1 }}
                            >
                                3000 DH
                            </motion.span>
                            <div className="mt-2 text-sm sm:text-base text-luxe-charcoal transition-colors duration-150 group-hover:text-luxe-black">
                                <span className="font-semibold">250 DH</span> / mois
                            </div>
                        </div>
                        <p className="text-sm sm:text-base text-luxe-charcoal mb-3 sm:mb-4 min-h-[3rem] transition-colors duration-150 group-hover:text-luxe-black">Accès complet à la communauté et à l'Academy</p>
                        <p className="text-sm sm:text-base text-luxe-black font-semibold mb-3 sm:mb-4 transition-colors duration-150 group-hover:text-luxe-charcoal">45 min de coaching individuel (Pour diagnostic de ton projet)</p>
                        <div className="flex-1"></div>
                        <motion.button
                            onClick={() => scrollToElement('contact-form')}
                            className="w-full px-4 sm:px-6 py-3 h-11 bg-button-cta text-luxe-cream text-sm sm:text-base font-semibold rounded-full hover:opacity-90 hover:shadow-lg hover:shadow-luxe-black/50 transition-all duration-150"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Choisir ce plan
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default PricingSection;
