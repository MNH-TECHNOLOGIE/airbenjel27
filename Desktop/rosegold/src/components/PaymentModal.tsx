import React from 'react';
import { motion } from 'framer-motion';
import { PAYMENT_RIB, WHATSAPP_LINK } from '../constants';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="bg-card-luxe rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative backdrop-blur-sm border border-luxe-charcoal/25"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-luxe-charcoal/70 hover:text-luxe-black transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Modal Content */}
                <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center">
                        <motion.div
                            className="w-16 h-16 bg-luxe-taupe/20 rounded-full flex items-center justify-center mx-auto mb-4"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <svg className="w-8 h-8 text-luxe-black" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </motion.div>
                        <h3 className="text-2xl font-bold text-luxe-black mb-2">
                            Formulaire envoyé avec succès !
                        </h3>
                        <p className="text-sm text-luxe-charcoal">
                            Merci ! Voici les informations de paiement pour finaliser votre inscription.
                        </p>
                    </div>

                    {/* Payment Information */}
                    <div className="bg-card-luxe rounded-xl p-5 border border-luxe-charcoal/25 shadow-md">
                        <h4 className="text-lg font-semibold text-luxe-black mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5 text-luxe-black" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                            </svg>
                            Coordonnées bancaires (RIB)
                        </h4>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="text-luxe-charcoal font-medium">Banque :</span>
                                <span className="text-luxe-black font-semibold">{PAYMENT_RIB.bankName}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-luxe-charcoal font-medium">Titulaire :</span>
                                <span className="text-luxe-black font-semibold">{PAYMENT_RIB.accountName}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-luxe-charcoal font-medium">Numéro de compte :</span>
                                <span className="text-luxe-black font-semibold font-mono">{PAYMENT_RIB.accountNumber}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-luxe-charcoal font-medium">IBAN :</span>
                                <span className="text-luxe-black font-semibold font-mono text-xs">{PAYMENT_RIB.iban}</span>
                            </div>
                            {PAYMENT_RIB.swift && (
                                <div className="flex justify-between items-center">
                                    <span className="text-luxe-charcoal font-medium">SWIFT :</span>
                                    <span className="text-luxe-black font-semibold font-mono">{PAYMENT_RIB.swift}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* WhatsApp Button */}
                    <motion.a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full font-semibold text-base hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all duration-150"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        <span>Contacter via WhatsApp</span>
                    </motion.a>

                    {/* Info Text */}
                    <p className="text-xs text-center text-luxe-charcoal/70">
                        Après le paiement, contactez-nous sur WhatsApp pour confirmer votre inscription.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default PaymentModal;
