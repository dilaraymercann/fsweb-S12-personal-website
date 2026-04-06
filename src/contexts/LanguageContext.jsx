import { createContext, useContext, useState } from 'react';
import translations from '../data/data.json';


const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(
        localStorage.getItem('language') || 'en'
    );

    const headerTranslations = translations.header[language];
    const skillTranslations = translations.skills[language];
    const profileTranslations = translations.profile[language];
    const projectsTranslations = translations.projects[language];
    const footerTranslations = translations.footer[language];


    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'tr' : 'en';
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, headerTranslations, skillTranslations, profileTranslations, projectsTranslations, footerTranslations }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);