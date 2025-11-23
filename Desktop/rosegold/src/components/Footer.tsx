import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full py-8 sm:py-12 px-4 sm:px-5 bg-luxe-charcoal border-t border-luxe-roseGold/30 overflow-hidden">
            <div className="max-w-screen-sm sm:max-w-screen-md md:max-w-7xl mx-auto w-full">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
                    <a href="#" className="text-sm sm:text-base text-luxe-cream/90 hover:text-luxe-cream transition-colors duration-150">
                        Mentions légales
                    </a>
                    <a href="#" className="text-sm sm:text-base text-luxe-cream/90 hover:text-luxe-cream transition-colors duration-150">
                        Conditions
                    </a>
                    <a href="#" className="text-sm sm:text-base text-luxe-cream/90 hover:text-luxe-cream transition-colors duration-150">
                        Contact
                    </a>
                </div>
                <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-luxe-cream/70">
                    © 2024 ELAN BUSINESS COMMUNITY (ELAN BC). Tous droits réservés.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
