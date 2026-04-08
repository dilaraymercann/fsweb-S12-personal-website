import { useDarkMode } from '../contexts/DarkModeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
    const { darkMode } = useDarkMode();
    const { footerTranslations, language } = useLanguage();
    return (
        <footer >
            <div className={`relative flex flex-col md:flex-row gap-5 md:gap-15 items-center justify-center md:pt-10 min-h-[40vh] md:min-h-[40vh] font-[Inter] text-[#0A0A14] ${darkMode ? 'bg-[#484148]' : 'bg-white'}`}>
                <div
                    className="absolute top-17 md:top-35 mr-15 md:mr-35 w-33 md:w-50 h-3 md:h-4 bg-[#82BBFF] rounded-md"
                ></div>
                <div className={`relative text-center md:max-w-sm ${language === 'tr' ? 'w-80' : 'w-auto'}`}>
                    <p className={`text-xl md:text-4xl ${darkMode ? 'text-white' : 'text-[#0A0A14]'}`}>{footerTranslations.title}</p>
                </div>
                <div>
                    <ul>
                        <li><a href="https://github.com" target="_blank" className="text-[#1769FF]">{footerTranslations.github}</a></li>
                        <li><a href="https://myportfolio-six-kappa-39.vercel.app/" target="_blank" className={` ${darkMode ? 'text-white' : 'text-[#0A0A14]'}`}>{footerTranslations.blog}</a></li>
                        <li><a href="https://linkedin.com" target="_blank" className="text-[#0077B5]">{footerTranslations.linkedin}</a></li>
                        <li><a href="https://mail.google.com/" target="_blank" className="text-[#AF0C48]">{footerTranslations.email}</a></li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}

export default Footer;