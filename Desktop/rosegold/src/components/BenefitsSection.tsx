import React from 'react';
import { motion } from 'framer-motion';
import { NEW_IMAGE_1 } from '../constants';

const BenefitsSection: React.FC = () => {
    return (
        <motion.section
            id="benefits-section"
            className="relative w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-5 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            {/* Background */}
            <div className="absolute inset-0 bg-section-gradient" />

            <div className="relative z-10 max-w-screen-sm sm:max-w-screen-md md:max-w-7xl mx-auto">
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-6 sm:mb-8 md:mb-10 text-luxe-black leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    ⭐ Ce que tu obtiens en rejoignant ELAN BC
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    {/* Card 1 */}
                    <motion.div
                        className="group bg-card-luxe rounded-xl p-4 sm:p-5 md:p-8 border border-luxe-charcoal/25 shadow-md hover:shadow-xl transition-all duration-150"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ translateY: -6, borderColor: "#E8B4A8", boxShadow: "0 25px 50px -12px rgba(48, 45, 44, 0.25)", scale: 1.02 }}
                    >
                        <motion.h3
                            className="text-lg sm:text-xl md:text-2xl font-semibold text-luxe-black mb-4 sm:mb-6 transition-colors duration-150 group-hover:text-luxe-charcoal"
                            whileHover={{ scale: 1.05 }}
                        >
                            Une plateforme complète d'Academy
                        </motion.h3>
                        <ul className="space-y-1.5 sm:space-y-2 md:space-y-4">
                            <li className="flex items-start gap-2 sm:gap-3">
                                <span className="text-luxe-black mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                                <span className="text-sm sm:text-base text-luxe-charcoal flex-1">Plus de 30 cours sur le marketing, la vente et le leadership</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3">
                                <span className="text-luxe-black mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                                <span className="text-sm sm:text-base text-luxe-charcoal flex-1">Ressources & contenus pratiques, applicables immédiatement</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="group bg-card-luxe rounded-xl p-4 sm:p-5 md:p-8 border border-luxe-charcoal/25 shadow-md hover:shadow-xl transition-all duration-150"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ translateY: -6, borderColor: "#E8B4A8", boxShadow: "0 25px 50px -12px rgba(48, 45, 44, 0.25)", scale: 1.02 }}
                    >
                        <motion.h3
                            className="text-lg sm:text-xl md:text-2xl font-semibold text-luxe-black mb-4 sm:mb-6 transition-colors duration-150 group-hover:text-luxe-charcoal"
                            whileHover={{ scale: 1.05 }}
                        >
                            Un accompagnement et suivi au quotidien
                        </motion.h3>
                        <ul className="space-y-1.5 sm:space-y-2 md:space-y-4">
                            <li className="flex items-start gap-2 sm:gap-3">
                                <span className="text-luxe-black mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                                <span className="text-sm sm:text-base text-luxe-charcoal flex-1">Guidance personnalisée pour ne jamais te sentir perdu</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3">
                                <span className="text-luxe-black mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                                <span className="text-sm sm:text-base text-luxe-charcoal flex-1">Support continu via la communauté et les sessions live</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3">
                                <span className="text-luxe-black mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                                <span className="text-sm sm:text-base text-luxe-charcoal flex-1">Coaching pour appliquer la méthode pas à pas</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        className="group bg-card-luxe rounded-xl p-4 sm:p-5 md:p-8 border border-luxe-charcoal/25 shadow-md hover:shadow-xl transition-all duration-150"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ translateY: -6, borderColor: "#E8B4A8", boxShadow: "0 25px 50px -12px rgba(48, 45, 44, 0.25)", scale: 1.02 }}
                    >
                        <motion.h3
                            className="text-lg sm:text-xl md:text-2xl font-semibold text-luxe-black mb-4 sm:mb-6 transition-colors duration-150 group-hover:text-luxe-charcoal"
                            whileHover={{ scale: 1.05 }}
                        >
                            Des résultats concrets
                        </motion.h3>
                        <ul className="space-y-1.5 sm:space-y-2 md:space-y-4">
                            <li className="flex items-start gap-2 sm:gap-3">
                                <span className="text-luxe-black mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                                <span className="text-sm sm:text-base text-luxe-charcoal flex-1">Plus de ventes et de clients</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3">
                                <span className="text-luxe-black mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                                <span className="text-sm sm:text-base text-luxe-charcoal flex-1">Gain de temps : fini la dispersion</span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3">
                                <span className="text-luxe-black mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                                <span className="text-sm sm:text-base text-luxe-charcoal flex-1">Motivation et growth mindset grâce à la communauté</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Results Image */}
                <motion.div
                    className="mt-6 sm:mt-8 md:mt-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <motion.img
                        src={NEW_IMAGE_1}
                        alt="Résultats concrets obtenus par les membres de ELAN BC"
                        className="w-full rounded-2xl object-cover mb-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default BenefitsSection;
