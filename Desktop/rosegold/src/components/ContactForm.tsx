import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GOOGLE_SCRIPT_URL } from '../constants';

interface ContactFormProps {
    onSuccess: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        packChoice: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (successMessage || errorMessage) {
            setSuccessMessage(null);
            setErrorMessage(null);
        }
    };

    const isValidEmail = (email: string): boolean => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        setSuccessMessage(null);
        setErrorMessage(null);

        if (!formData.fullName.trim()) {
            setErrorMessage('Veuillez remplir tous les champs requis.');
            return;
        }
        if (!formData.phone.trim()) {
            setErrorMessage('Veuillez remplir tous les champs requis.');
            return;
        }
        if (!formData.email.trim() || !isValidEmail(formData.email)) {
            setErrorMessage('Veuillez entrer une adresse email valide.');
            return;
        }
        if (!formData.packChoice) {
            setErrorMessage('Veuillez sélectionner un plan.');
            return;
        }

        setIsSubmitting(true);

        try {
            const payload = {
                fullName: formData.fullName.trim(),
                phone: formData.phone.trim(),
                email: formData.email.trim(),
                address: formData.address.trim() || '',
                packChoice: formData.packChoice
            };

            console.log('Sending payload to Google Apps Script:', payload);

            const iframeName = 'hidden-submit-' + Date.now();
            const iframe = document.createElement('iframe');
            iframe.name = iframeName;
            iframe.style.display = 'none';
            iframe.style.width = '0';
            iframe.style.height = '0';
            iframe.style.border = 'none';
            document.body.appendChild(iframe);

            const hiddenForm = document.createElement('form');
            hiddenForm.method = 'POST';
            hiddenForm.action = GOOGLE_SCRIPT_URL;
            hiddenForm.target = iframeName;
            hiddenForm.style.display = 'none';

            Object.entries(payload).forEach(([key, value]) => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = value as string;
                hiddenForm.appendChild(input);
            });

            document.body.appendChild(hiddenForm);
            hiddenForm.submit();

            console.log('Form submitted via hidden iframe to Google Apps Script');

            setTimeout(() => {
                try {
                    document.body.removeChild(hiddenForm);
                    document.body.removeChild(iframe);
                } catch (e) {
                    console.log('Cleanup error (expected):', e);
                }
            }, 3000);

            await new Promise(resolve => setTimeout(resolve, 2000));

            setErrorMessage(null);

            setFormData({
                fullName: '',
                phone: '',
                email: '',
                address: '',
                packChoice: ''
            });

            if (form) {
                form.reset();
            }

            onSuccess();
        } catch (error) {
            console.error('Network or fetch error:', error);
            const errorDetails = error instanceof Error ? error.message : 'Unknown error';
            console.error('Error details:', errorDetails);
            setErrorMessage(`Une erreur est survenue lors de l'envoi. Merci de réessayer dans quelques instants. (${errorDetails})`);
            setSuccessMessage(null);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.section
            id="contact-form"
            className="w-full py-8 sm:py-10 md:py-12 px-4 sm:px-5 bg-section-gradient overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-xl mx-auto space-y-4">
                <motion.div
                    className="text-center space-y-3"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-luxe-black">
                        📝 Rejoindre ELAN BUSINESS COMMUNITY (ELAN BC)
                    </h2>
                    <p className="text-sm sm:text-base text-luxe-charcoal mb-0">
                        📝 Laisse tes informations et notre équipe te contacte pour t'orienter vers le meilleur parcours et plan.
                    </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <label htmlFor="fullName" className="block text-sm font-medium text-luxe-black">
                            Nom complet
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 rounded-lg bg-luxe-cream border border-luxe-charcoal/25 px-3 py-2 text-sm text-luxe-black placeholder-luxe-charcoal/70 focus:outline-none focus:ring-2 focus:ring-luxe-black focus:border-luxe-black transition-all"
                            placeholder="Nom complet"
                        />
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <label htmlFor="phone" className="block text-sm font-medium text-luxe-black">
                            Numéro de téléphone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 rounded-lg bg-luxe-cream border border-luxe-charcoal/25 px-3 py-2 text-sm text-luxe-black placeholder-luxe-charcoal/70 focus:outline-none focus:ring-2 focus:ring-luxe-black focus:border-luxe-black transition-all"
                            placeholder="0660112233"
                        />
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <label htmlFor="email" className="block text-sm font-medium text-luxe-black">
                            Adresse email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 rounded-lg bg-luxe-cream border border-luxe-charcoal/25 px-3 py-2 text-sm text-luxe-black placeholder-luxe-charcoal/70 focus:outline-none focus:ring-2 focus:ring-luxe-black focus:border-luxe-black transition-all"
                            placeholder="email@email.com"
                        />
                    </motion.div>

                    {/* Address */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <label htmlFor="address" className="block text-sm font-medium text-luxe-black">
                            Adresse (Ville, Pays)
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full mt-1 rounded-lg bg-luxe-cream border border-luxe-charcoal/25 px-3 py-2 text-sm text-luxe-black placeholder-luxe-charcoal/70 focus:outline-none focus:ring-2 focus:ring-luxe-black focus:border-luxe-black transition-all"
                            placeholder="Casablanca, Maroc"
                        />
                    </motion.div>

                    {/* Plan Selection */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <label htmlFor="packChoice" className="block text-sm font-medium text-luxe-black">
                            Plan choisi
                        </label>
                        <select
                            id="packChoice"
                            name="packChoice"
                            value={formData.packChoice}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 rounded-lg bg-luxe-cream border border-luxe-charcoal/25 px-3 py-2 text-sm text-luxe-black focus:outline-none focus:ring-2 focus:ring-luxe-black focus:border-luxe-black transition-all"
                        >
                            <option value="">Sélectionne un plan</option>
                            <option value="Mensuel – 390 DH / mois">Mensuel – 390 DH / mois</option>
                            <option value="Trimestre – 885 DH">Trimestre – 885 DH</option>
                            <option value="Semestre – 1650 DH">Semestre – 1650 DH</option>
                            <option value="Année – 3000 DH">Année – 3000 DH</option>
                        </select>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-4 rounded-full bg-button-cta py-3 text-sm font-semibold text-luxe-cream shadow-md hover:opacity-90 hover:shadow-lg hover:shadow-luxe-black/40 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-luxe-black focus:ring-offset-2 focus:ring-offset-luxe-cream"
                        whileHover={isSubmitting ? {} : { scale: 1.02 }}
                        whileTap={isSubmitting ? {} : { scale: 0.98 }}
                    >
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                    </motion.button>

                    {/* Success Message */}
                    {successMessage && (
                        <motion.p
                            className="mt-3 text-sm text-luxe-black font-semibold text-center"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {successMessage}
                        </motion.p>
                    )}

                    {/* Error Message */}
                    {errorMessage && (
                        <motion.p
                            className="mt-3 text-sm text-luxe-black/80 text-center"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {errorMessage}
                        </motion.p>
                    )}
                </form>
            </div>
        </motion.section>
    );
};

export default ContactForm;
