import React from 'react';
import { motion } from 'framer-motion';
import { NEW_IMAGE_3 } from '../constants';

const CommunitySection: React.FC = () => {
    return (
        <motion.section
            className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-5 bg-section-gradient overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-screen-sm sm:max-w-screen-md md:max-w-7xl mx-auto w-full">
                <div className="flex flex-col gap-6 md:gap-6">
                    {/* Image - Horizontal on top */}
                    <motion.div
                        className="w-full"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.img
                            src={NEW_IMAGE_3}
                            alt="Communauté d'entrepreneurs ELAN BC en atelier"
                            className="w-full rounded-lg object-cover object-center aspect-video"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    {/* Text & Avatars - Below image */}
                    <motion.div
                        className="text-center md:text-left space-y-4 sm:space-y-5 w-full"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-luxe-black leading-tight">
                            👥 Une communauté d'entrepreneurs engagés
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-luxe-charcoal leading-relaxed mb-6 sm:mb-8 px-2 md:px-0">
                            👥 Rejoins une communauté dynamique d'entrepreneurs. Entraide, motivation, sessions live et échanges enrichissants pour t'accompagner dans ta croissance avec ELAN BC.
                        </p>

                        {/* Avatar Placeholders */}
                        <div className="w-full overflow-x-auto pb-2 -mx-4 sm:mx-0 px-4 sm:px-0">
                            <div className="flex justify-center md:justify-start items-center gap-3 sm:gap-4 min-w-max">
                                {['AB', 'CD', 'EF', 'GH', 'IJ', 'KL'].map((initials, index) => (
                                    <motion.div
                                        key={index}
                                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-luxe-cream border-2 border-luxe-charcoal/25 flex items-center justify-center text-luxe-charcoal font-semibold text-sm sm:text-base md:text-lg flex-shrink-0"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                                        whileHover={{ scale: 1.1, borderColor: "#E8B4A8" }}
                                    >
                                        {initials}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default CommunitySection;
