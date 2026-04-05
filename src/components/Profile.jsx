import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDarkMode } from '../contexts/DarkModeContext';

const Profile = () => {
    const { darkMode, setDarkMode } = useDarkMode();

    const profile = [
        { label: 'Doğum tarihi', value: '24.03.1996' },
        { label: 'İkamet Şehri', value: 'Ankara' },
        { label: 'Eğitim Durumu', value: 'Hacettepe Ünv. Biyoloji Lisans, 2016' },
        { label: 'Tercih Ettiği Rol', value: 'Frontend, UI' },
    ];
    return (
        <div className={`min-h-[70vh] relative text-center text-3xl text-[#000000] font-[Montserrat] ${darkMode ? 'bg-[#2A262B]' : 'bg-[#F4F4F4]'}`}>
            <div className={`absolute w-30.25 h-30.25 rounded-full border-18 border-[#EA2678] bg-transparent -right-10 -top-10 overflow-visible`}></div>
            <h1 className={`pt-10 ${darkMode ? 'text-white' : 'text-[#0A0A14]'}`}>Profile</h1>
            <div className='flex gap-16 justify-center mt-15 flex-wrap'>
                <div className="relative w-[320px]">
                    <div className={`absolute -bottom-2 -right-2 w-full h-full ${darkMode ? 'bg-[#52525280]' : 'bg-[#8F8F8F]'} rounded-2xl`}></div>
                    <Card sx={{ minWidth: 320, borderRadius: 4, boxShadow: 3, position: 'relative', backgroundColor: darkMode ? '#525252' : '#ffffff' }}>
                        <CardContent sx={{ p: 4 }}>
                            <Typography
                                variant="h6"
                                sx={{ color: '#E92577', fontFamily: 'Playfair Display', mb: 2, textAlign: 'left', fontWeight: 300 }}
                            >
                                Basic Information
                            </Typography>

                            {profile.map((item) => (
                                <div key={item.label} className="flex gap-6 mb-3 text-left">
                                    <Typography sx={{ fontWeight: 'bold', minWidth: 130, fontFamily: 'Inter', fontSize: 13, color: darkMode ? 'white' : '#0A0A14' }}>
                                        {item.label}
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'Inter', fontSize: 13, color: darkMode ? 'white' : '#0A0A14' }}>
                                        {item.value}
                                    </Typography>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
                <div className='relative w-[30%] text-left flex flex-col justify-center gap-4'>
                    <div
                        className="absolute top-20 -left-5 w-20 h-5 bg-[#82BBFF] rounded-lg"
                    ></div>
                    <p className={`relative font-[Playfair_Display] text-xl ${darkMode ? 'text-white' : '#0A0A14'}`}>About Me</p>
                    <p className={`font-[Inter] text-sm ${darkMode ? 'text-white' : '#0A0A14'}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
                    <p className={`font-[Inter] text-sm ${darkMode ? 'text-white' : '#0A0A14'}`}>Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;