import React from 'react';
import { motion } from 'framer-motion';
import { NEW_IMAGE_2 } from '../constants';

const ParcoursSection: React.FC = () => {
    return (
        <motion.section
            className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-5 bg-section-gradient border-t border-luxe-charcoal/30 overflow-hidden"
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
                    🚀 Les 3 parcours de l'Academy ELAN BC
                </motion.h2>

                {/* Learning Image - Mobile stacked above, desktop could be side-by-side */}
                <motion.div
                    className="mb-6 sm:mb-8 md:mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.img
                        src={NEW_IMAGE_2}
                        alt="Parcours de l'Academy en ligne ELAN BC"
                        className="w-full rounded-2xl object-cover mb-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    {/* Starter Card */}
                    <motion.div
                        className="group bg-card-luxe rounded-xl p-4 sm:p-5 md:p-8 border border-luxe-charcoal/25 shadow-md hover:shadow-xl transition-all duration-150"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ translateY: -6, borderColor: "#E8B4A8", boxShadow: "0 25px 50px -12px rgba(48, 45, 44, 0.25)", scale: 1.02 }}
                    >
                        <div className="mb-4 sm:mb-6">
                            <motion.span
                                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-section-gradient text-luxe-black text-xs sm:text-sm uppercase tracking-wider rounded-full border border-luxe-charcoal/25 transition-all duration-150 group-hover:bg-button-cta group-hover:text-luxe-cream group-hover:border-luxe-charcoal inline-block"
                                whileHover={{ scale: 1.05 }}
                            >
                                Starter
                            </motion.span>
                        </div>
                        <motion.h3
                            className="text-lg sm:text-xl md:text-2xl font-semibold text-luxe-black mb-4 sm:mb-6 transition-colors duration-150 group-hover:text-luxe-charcoal"
                            whileHover={{ scale: 1.05 }}
                        >
                            Ceux qui démarrent
                        </motion.h3>
                        <ul className="space-y-1.5 sm:space-y-2 md:space-y-4">
                            <li className="flex items-start gap-2 sm:gap-3">
                                <span className="text-luxe-black mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                                <span className="text-sm sm:text-base text-luxe-charcoal flex-1">Trouve et clarifie ton idée de projet</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3">
                                <span className="text-luxe-black mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                                <span className="text-sm sm:text-base text-luxe-charcoal flex-1">Bases solides pour structurer ton projet</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3">
                                <span className="text-luxe-black mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                                <span className="text-sm sm:text-base text-luxe-charcoal flex-1">Idée claire et détaillée prête à se lancer</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3">
                                <span className="text-luxe-black mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                                <span className="text-sm sm:text-base text-luxe-charcoal flex-1">Pose les fondations pour démarrer vite et en confiance</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Builder Card */}
                    <motion.div
                        className="group bg-card-luxe rounded-xl p-4 sm:p-5 md:p-8 border border-luxe-charcoal/25 shadow-md hover:shadow-xl transition-all duration-150"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ translateY: -6, borderColor: "#E8B4A8", boxShadow: "0 25px 50px -12px rgba(48, 45, 44, 0.25)", scale: 1.02 }}
                    >
                        <div className="mb-4 sm:mb-6">
                            <motion.span
                                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-section-gradient text-luxe-black text-xs sm:text-sm uppercase tracking-wider rounded-full border border-luxe-charcoal/25 transition-all duration-150 group-hover:bg-button-cta group-hover:text-luxe-cream group-hover:border-luxe-charcoal inline-block"
                                whileHover={{ scale: 1.05 }}
                            >
                                Builder
                            </motion.span>
                        </div>
                        <motion.h3
                            className="text-lg sm:text-xl md:text-2xl font-semibold text-luxe-black mb-4 sm:mb-6 transition-colors duration-150 group-hover:text-luxe-charcoal"
                            whileHover={{ scale: 1.05 }}
                        >
                            Entrepreneurs déjà lancés
                        </motion.h3>
                        <ul className="space-y-1.5 sm:space-y-2 md:space-y-4">
                            <li className="flex items-start gap-2 sm:gap-3">
                                <span className="text-luxe-black mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                                <span className="text-sm sm:text-base text-luxe-charcoal flex-1">Développe ta stratégie marketing et vente</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3">
                                <span className="text-luxe-black mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                                <span className="text-sm sm:text-base text-luxe-charcoal flex-1">Organisation et process business optimisés</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3">
                                <span className="text-luxe-black mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                                <span className="text-sm sm:text-base text-luxe-charcoal flex-1">Apprends à vendre efficacement tes produits/services</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3">
                                <span className="text-luxe-black mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                                <span className="text-sm sm:text-base text-luxe-charcoal flex-1">Transforme ton projet en business rentable et structuré</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Scaler Card */}
                    <motion.div
                        className="group bg-card-luxe rounded-xl p-4 sm:p-5 md:p-8 border border-luxe-charcoal/25 shadow-md hover:shadow-xl transition-all duration-150"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        whileHover={{ translateY: -6, borderColor: "#E8B4A8", boxShadow: "0 25px 50px -12px rgba(48, 45, 44, 0.25)", scale: 1.02 }}
                    >
                        <div className="mb-4 sm:mb-6">
                            <motion.span
                                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-section-gradient text-luxe-black text-xs sm:text-sm uppercase tracking-wider rounded-full border border-luxe-charcoal/25 transition-all duration-150 group-hover:bg-button-cta group-hover:text-luxe-cream group-hover:border-luxe-charcoal inline-block"
                                whileHover={{ scale: 1.05 }}
                            >
                                Scaler
                            </motion.span>
                        </div>
                        <motion.h3
                            className="text-lg sm:text-xl md:text-2xl font-semibold text-luxe-black mb-4 sm:mb-6 transition-colors duration-150 group-hover:text-luxe-charcoal"
                            whileHover={{ scale: 1.05 }}
                        >
                            Entrepreneurs établis
                        </motion.h3>
                        <ul className="space-y-1.5 sm:space-y-2 md:space-y-4">
                            <li className="flex items-start gap-2 sm:gap-3">
                                <span className="text-luxe-black mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                                <span className="text-sm sm:text-base text-luxe-charcoal flex-1">Mise en place de l'écosystème complet</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3">
                                <span className="text-luxe-black mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                                <span className="text-sm sm:text-base text-luxe-charcoal flex-1">Optimisation pour scaler sans friction</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3">
                                <span className="text-luxe-black mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                                <span className="text-sm sm:text-base text-luxe-charcoal flex-1">Passe d'un business qui fonctionne à un business qui croît durablement</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default ParcoursSection;
