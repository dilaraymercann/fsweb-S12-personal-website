import { useDarkMode } from '../contexts/DarkModeContext';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../data/data.json';

const Skills = () => {
    const { darkMode } = useDarkMode();
    const { skillTranslations } = useLanguage();

    const skills = translations.skills.common.list;

    return (
        <>
            <div className={`relative min-h-[60vh] text-center text-4xl text-[#0A0A14] font-[Inter] ${darkMode ? 'bg-[#484148]' : 'bg-white'}`}>
                <div className={`absolute w-25 h-25 ml-250 rounded-full border-18 ${darkMode ? 'border-[#525252]' : 'border-[#D9D9D9]'} bg-transparent -top-12 overflow-visible`}></div>
                <div
                    className="absolute bottom-12 -left-16 w-48 h-12 bg-[#525252] rounded-full"
                ></div>
                <h1 className={`pt-10 ${darkMode ? 'text-white' : 'text-[#0A0A14]'}`}>{skillTranslations.title}</h1>
                <div className="flex justify-center gap-8 flex-wrap mt-15">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center gap-2">
                            <div className="w-20 h-20 overflow-hidden flex items-center justify-center">
                                <img src={skill.icon} className="w-20 h-20 object-cover" />
                            </div>
                            <p className={`font-[Inter] text-xs ${darkMode ? 'text-[#D9D9D9]' : 'text-[#777777]'}`}>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Skills;