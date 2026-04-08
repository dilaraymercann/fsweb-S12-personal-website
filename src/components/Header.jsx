import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useMessage } from '../contexts/MessageContext';
import Message from './Message';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';

const PinkSwitch = styled(Switch)(({ theme }) => ({
    width: 42,
    height: 24,
    padding: 0,

    //Switch ana yapısı
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(18px)',
            color: '#fff',

            '& + .MuiSwitch-track': {
                backgroundColor: '#E92577',
                opacity: 1,
            },
        },
    },
    //Switch yuvarlak butonu
    '& .MuiSwitch-thumb': {
        width: 20,
        height: 20,
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
    },

    //Switch arka zemin
    '& .MuiSwitch-track': {
        borderRadius: 24,
        backgroundColor: '#ccc',
        opacity: 1,
    },
}));

const Header = () => {
    const { darkMode, setDarkMode } = useDarkMode();
    const { headerTranslations, toggleLanguage } = useLanguage();
    const { open, setOpen } = useMessage();

    return (
        <div className={`relative min-h-[80vh] ${darkMode ? 'bg-[#2A262B]' : 'bg-[#F4F4F4]'} overflow-hidden`}>
            <div className={`absolute top-0 left-[20%] md:left-[35%] -translate-x-[60%] w-30 h-15 ${darkMode ? 'bg-[#525252]' : 'bg-[#D9D9D9]'} rounded-b-full`}></div>
            <div
                className="absolute top-120 md:top-96 -right-28 md:-right-16 w-48 h-8 md:h-12 bg-[#EA2678] rounded-full"
            ></div>
            <div className="flex flex-wrap justify-end items-center gap-2 md:gap-4 px-4 md:px-10 pt-4">
                <IconButton onClick={() => setOpen(true)} sx={{ color: '#E92577' }}>
                    <EmailIcon />
                </IconButton>
                <span className="text-[#777777] mx-2">|</span>
                <FormControlLabel
                    control={
                        <PinkSwitch
                            checked={darkMode}
                            onChange={(e) => setDarkMode(e.target.checked)}
                            checkedIcon={
                                <span style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: '50%',
                                    backgroundColor: '#FFE86E',
                                    display: 'block',
                                    boxShadow: 'inset -8px -1px 0 0 #2A262B',
                                }} />
                            }
                            icon={
                                <span style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: '50%',
                                    backgroundColor: '#FFE86E',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 13,
                                }}>☀️</span>
                            }
                            sx={{ transform: "scale(0.8)", transformOrigin: "left" }}
                        />
                    }
                    label={`${darkMode ? headerTranslations.lightMode : headerTranslations.darkMode}`}
                    sx={{
                        marginRight: 0,
                        '& .MuiFormControlLabel-label': {
                            fontSize: '12px',
                            fontFamily: 'Inter, sans-serif',
                            color: `${darkMode ? 'white' : '#777777'}`,
                        },
                    }}
                />
                <span className="text-[#777777] mx-2">|</span>
                <span className="text-xs text-[#777777] font-[Inter]"><span onClick={toggleLanguage} className='text-[#E92577] cursor-pointer'>{headerTranslations.language}</span>'YE GEÇ</span>
                <Message />
            </div>
            <section className="w-full px-6 md:px-20 py-16">
                <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-40'>

                    <div className='max-w-xl flex flex-col gap-10'>
                        <div className='flex flex-col gap-2'>
                            <p className={`font-[Inter] text-lg md:text-xl ${darkMode ? 'text-white' : 'text-[#0A0A14]'}`}>{headerTranslations.greeting}</p>
                            <p className={`relative ${darkMode ? 'text-white' : 'text-[#0A0A14]'} font-[Inter] text-xl md:text-3xl leading-snug`}>
                                <span className="relative z-10">
                                    {headerTranslations.description}
                                </span>
                                <span className="absolute -left-2 top-4 md:top-6 w-23 md:w-32 h-3 md:h-6 bg-[#E92577] rounded-sm"></span>
                            </p>
                        </div>
                        <div className="w-full flex justify-center md:hidden">
                            <img src="/personal.png" className="w-40" />
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div className={`flex gap-2 text-2xl ${darkMode ? 'text-white' : 'text-[#0A0A14]'}`}>
                                <button>
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </button>
                                <button>
                                    <i className="fa-brands fa-github"></i>
                                </button>
                            </div>
                            <div>
                                <p className={`font-[Inter] text-sm ${darkMode ? 'text-white' : 'text-[#0A0A14]'}`}>{headerTranslations.current} <span className='text-[#E92577]'>{headerTranslations.freelance}</span> {headerTranslations.for} <span className='text-[#E92577]'>{headerTranslations.design}</span> {headerTranslations.project}.
                                    {headerTranslations.invite} -{'>'} <span className='text-[#E92577]'>pratamaiosi@gmail.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-center">
                        <img src="/personal.png" className="w-70" />
                    </div>

                </div>
            </section>
        </div >

    );
};

export default Header;