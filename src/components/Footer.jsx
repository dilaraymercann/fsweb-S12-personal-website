import { useDarkMode } from '../contexts/DarkModeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
    const { darkMode } = useDarkMode();
    const { footerTranslations } = useLanguage();
    return (
        <footer >
            <div className={`relative flex gap-15 justify-center pt-10 min-h-[30vh] font-[Inter] text-[#0A0A14] ${darkMode ? 'bg-[#484148]' : 'bg-white'}`}>
                <div
                    className="absolute top-17 mr-35 w-50 h-4 bg-[#82BBFF] rounded-md"
                ></div>
                <div className="relative max-w-sm">
                    <p className={`text-4xl ${darkMode ? 'text-white' : 'text-[#0A0A14]'}`}>{footerTranslations.title}</p>
                </div>
                <div>
                    <ul>
                        <li><a href="https://github.com" className="text-[#1769FF]">{footerTranslations.github}</a></li>
                        <li><a href="https://linkedin.com" className={` ${darkMode ? 'text-white' : 'text-[#0A0A14]'}`}>{footerTranslations.blog}</a></li>
                        <li><a href="https://twitter.com" className="text-[#0077B5]">{footerTranslations.linkedin}</a></li>
                        <li><a href="https://twitter.com" className="text-[#AF0C48]">{footerTranslations.email}</a></li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}

export default Footer;