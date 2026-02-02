import React from 'react';
import { motion } from 'framer-motion';

const WhyElanSection: React.FC = () => {
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
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-6 sm:mb-8 text-luxe-black leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    💡 Pourquoi choisir ELAN BUSINESS COMMUNITY (ELAN BC) ?
                </motion.h2>

                {/* Introduction Text */}
                <div className="max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 text-center">
                    <motion.p
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-luxe-charcoal leading-relaxed mb-4 sm:mb-5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        ⏰ Arrête de <span className="font-bold text-luxe-black">perdre ton temps</span> à chercher partout. Tout ce dont tu as besoin pour <span className="font-bold text-luxe-black">lancer</span>, <span className="font-bold text-luxe-black">développer</span> et <span className="font-bold text-luxe-black">scaler</span> ton business est réuni ici.
                    </motion.p>
                    <motion.p
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-luxe-charcoal leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        🎯 Avec ELAN BC, une méthode claire et structurée qui t'oriente à chaque étape. Apprends efficacement et applique immédiatement.
                    </motion.p>
                </div>

                {/* Cards Grid - 2 per row, 4 cards total */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
                    {[
                        { icon: "✅", text: "Méthode structurée et progressive" },
                        { icon: "📚", text: "Ressources centralisées en un seul endroit" },
                        { icon: "⚡", text: "Application immédiate des concepts" },
                        { icon: "🎯", text: "Guidance à chaque étape" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="group bg-card-luxe rounded-lg p-5 sm:p-6 md:p-8 border border-luxe-charcoal/25 shadow-md hover:shadow-xl w-full cursor-pointer flex flex-col transition-all duration-150"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            whileHover={{ translateY: -8, borderColor: "#E8B4A8", boxShadow: "0 25px 50px -12px rgba(48, 45, 44, 0.25)", scale: 1.02 }}
                        >
                            <div className="flex items-start gap-4 mb-3">
                                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-2xl sm:text-3xl">
                                    {item.icon}
                                </div>
                                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 mt-1">
                                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-luxe-black" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-sm sm:text-base md:text-lg font-semibold text-luxe-black flex-1 transition-colors duration-150 group-hover:text-luxe-charcoal">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default WhyElanSection;
