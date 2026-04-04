import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

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
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        color: '#FFE86E'
    },

    //Switch arka zemin
    '& .MuiSwitch-track': {
        borderRadius: 24,
        backgroundColor: '#ccc',
        opacity: 1,
    },
}));

const Header = () => {
    return (
        <div className="relative min-h-[80vh] bg-[#F4F4F4] overflow-hidden">
            <div className="absolute top-0 left-[35%] -translate-x-[60%] w-30 h-15 bg-[#D9D9D9] rounded-b-full"></div>
            <div
                className="absolute top-96 -right-16 w-48 h-12 bg-[#EA2678] rounded-full"
            ></div>
            <div className="flex justify-end items-center gap-4 pr-10 pt-4">
                <FormControlLabel
                    control={
                        <PinkSwitch
                            defaultChecked
                            sx={{ transform: "scale(0.8)", transformOrigin: "left" }}
                        />
                    }
                    label="DARK MODE"
                    sx={{
                        marginRight: 0,
                        '& .MuiFormControlLabel-label': {
                            fontSize: '12px',
                            color: '#777777',
                        },
                    }}
                />
                <span className="text-[#777777] mx-2">|</span>
                <span className="text-xs text-[#777777]"><span className='text-[#E92577]'>TÜRKÇE</span>'YE GEÇ</span>

            </div>
            <section className="w-full px-20 py-16">
                <div className='max-w-6xl mx-auto flex items-center gap-40'>
                    <div className='max-w-xl flex flex-col gap-10'>
                        <div className='flex flex-col gap-2'>
                            <p className='font-[Montserrat] text-xl'>Hi! 👋</p>
                            <p className="relative text-[#0A0A14] font-[Montserrat] text-3xl leading-snug">

                                <span className="relative z-10">
                                    I’m Dilaray. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!
                                </span>

                                <span className="absolute -left-2 top-6 w-32 h-6 bg-[#E92577] rounded-sm"></span>

                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-2 text-2xl'>
                                <button>
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </button>
                                <button>
                                    <i className="fa-brands fa-github"></i>
                                </button>
                            </div>
                            <div>
                                <p className='font-[Montserrat] text-sm'>Currently <span className='text-[#E92577]'>Freelancing</span> for <span className='text-[#E92577]'>UX, UI, & Web Design</span> Project .
                                    Invite me to join your team -{'>'} <span className='text-[#E92577]'>pratamaiosi@gmail.com</span></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="./public/personal.png" className="w-70"></img>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Header;