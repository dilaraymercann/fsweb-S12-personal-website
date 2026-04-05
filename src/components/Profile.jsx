import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Profile = () => {
    const profile = [
        { label: 'Doğum tarihi', value: '24.03.1996' },
        { label: 'İkamet Şehri', value: 'Ankara' },
        { label: 'Eğitim Durumu', value: 'Hacettepe Ünv. Biyoloji Lisans, 2016' },
        { label: 'Tercih Ettiği Rol', value: 'Frontend, UI' },
    ];
    return (
        <div className="min-h-[70vh] relative text-center text-3xl mt-10 text-[#000000] font-[Montserrat] overflow-hidden bg-[#F4F4F4]">
            <div class="absolute w-30.25 h-30.25 rounded-full border-18 border-[#EA2678] bg-transparent -right-10 top-0"></div>
            <h1 className='mt-10'>Profile</h1>
            <div className='flex gap-16 justify-center mt-15 flex-wrap'>
                <div className="relative w-[320px]">
                    <div className="absolute -bottom-2 -right-2 w-full h-full bg-[#8F8F8F] rounded-2xl"></div>
                    <Card sx={{ minWidth: 320, borderRadius: 4, boxShadow: 3, position: 'relative' }}>
                        <CardContent sx={{ p: 4 }}>
                            <Typography
                                variant="h6"
                                sx={{ color: '#E92577', fontFamily: 'Playfair Display', mb: 2, textAlign: 'left', fontWeight: 300 }}
                            >
                                Basic Information
                            </Typography>

                            {profile.map((item) => (
                                <div key={item.label} className="flex gap-6 mb-3 text-left">
                                    <Typography sx={{ fontWeight: 'bold', minWidth: 130, fontFamily: 'Inter', fontSize: 13 }}>
                                        {item.label}
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'Inter', fontSize: 13, color: '#000000' }}>
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
                    <p className='relative font-[Playfair_Display] text-xl '>About Me</p>
                    <p className='font-[Inter] text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
                    <p className='font-[Inter] text-sm'>Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;