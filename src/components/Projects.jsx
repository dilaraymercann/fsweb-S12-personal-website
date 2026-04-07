import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
    const { darkMode } = useDarkMode();
    const { projectsTranslations, language } = useLanguage();

    const project1techs = projectsTranslations.project1techs;
    const project2techs = projectsTranslations.project2techs;
    return (
        <div className={`${language === 'tr' ? 'min-h-304' : 'min-h-[70vh]'} md:min-h-[70vh] text-center text-xl md:text-3xl text-[#000000] font-[Montserrat] pb-5 md:pb-10 ${darkMode ? 'bg-[#484148]' : 'bg-white'}`}>
            <h1 className={`pt-5 md:pt-10 ${darkMode ? 'text-white' : 'text-[#0A0A14]'}`}>{projectsTranslations.projects}</h1>
            <div className={`flex ${language === 'tr' ? 'gap-15' : 'gap-10'} md:gap-10 justify-center mt-10 md:mt-20 flex-wrap h-[150vh] md:h-[80vh]`}>
                <Card sx={{
                    backgroundColor: darkMode ? '#2D3235' : '#DDEEFE', width: { xs: 250, sm: 320, md: 400 }, position: 'relative', overflow: 'visible', height: { xs: language === 'tr' ? '49.5%' : '45.7%', md: language === 'tr' ? '100%' : '95%' }
                }}>
                    <CardContent sx={{ padding: '24px' }}>
                        <Typography variant="h5" component="div" sx={{
                            fontFamily: 'Playfair Display',
                            color: darkMode ? 'white' : '#0A0A14',
                            fontSize: { xs: '1.2rem', md: '1.5rem' }
                        }}>
                            {projectsTranslations.project1.label}
                        </Typography>
                        <Typography variant="body2" sx={{
                            fontFamily: 'Inter',
                            marginTop: '2rem',
                            color: darkMode ? 'white' : '#0A0A14',
                            fontSize: { xs: '0.8rem', md: '0.875rem' }
                        }}>
                            {projectsTranslations.project1.value}
                        </Typography>
                        {project1techs.map((tech) => (
                            <Typography key={tech} variant="caption" sx={{ fontFamily: 'Fairplay Display', fontWeight: 'bold', marginTop: '1rem', display: 'inline-block', marginRight: '0.5rem', padding: '0.25rem 0.5rem', backgroundColor: darkMode ? '#525252' : '#fff', color: darkMode ? 'white' : '#000', borderRadius: '0.8rem', width: { xs: '25%', sm: '20%', md: '20%' } }}>
                                {tech}
                            </Typography>
                        ))}

                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-around' }}>
                        <Button size="small" href="https://github.com/dilaraymercann/fsweb-s4-bonus-challenge-html-pizza"
                            target="_blank" sx={{
                                color: darkMode ? 'white' : '#000',
                                fontFamily: 'Inter',
                                fontSize: { xs: '0.65rem', md: '0.8rem' },
                                padding: { xs: '2px 6px', md: '4px 10px' },
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    backgroundColor: 'transparent',
                                }
                            }}>{projectsTranslations.viewGithub}
                        </Button>
                        <Button size="small" href="https://fsweb-s10g3-redux-watchlist-solutio-eight-mu.vercel.app/"
                            target="_blank" sx={{
                                color: darkMode ? 'white' : '#000',
                                fontFamily: 'Inter',
                                fontSize: { xs: '0.65rem', md: '0.8rem' },
                                padding: { xs: '2px 6px', md: '4px 10px' },
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    backgroundColor: 'transparent',
                                }
                            }}
                            endIcon={<ArrowForwardIcon sx={{
                                color: darkMode ? 'white' : '#000',
                                fontSize: { xs: '0.8rem', md: '1rem' }
                            }} />}
                        >
                            {projectsTranslations.goToApp}
                        </Button>
                    </CardActions>
                    <CardMedia
                        component="img"
                        image="../public/projects/desktop.png"
                        sx={{
                            width: '100%',
                            marginTop: { xs: `${language === 'tr' ? '1rem' : '1rem'}`, md: `${language === 'tr' ? '4.3rem' : '3.8rem'}` },
                            position: 'absolute',
                        }}
                    />
                    <CardMedia
                        component="img"
                        image="../public/projects/desktopContent1.png"
                        sx={{
                            width: { xs: '11rem', md: '18rem' },
                            height: { xs: '6.9rem', md: '11.1rem' },
                            marginTop: { xs: `${language === 'tr' ? '1.4rem' : '1.4rem'}`, md: `${language === 'tr' ? '4.9rem' : '4.4rem'}` },
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            borderRadius: '0.1rem',
                        }}
                    />
                </Card>
                <Card sx={{ backgroundColor: darkMode ? '#495351' : '#D9F6F1', width: { xs: 250, sm: 320, md: 400 }, position: 'relative', overflow: 'visible', height: { xs: language === 'tr' ? '52.3%' : '45.8%', md: language === 'tr' ? '100%' : '95%' } }}>
                    <CardContent sx={{ padding: '24px' }}>
                        <Typography variant="h5" component="div" sx={{ fontFamily: 'Playfair Display', color: darkMode ? 'white' : '#0A0A14', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                            {projectsTranslations.project2.label}
                        </Typography>
                        <Typography variant="body2" sx={{ fontFamily: 'Inter', marginTop: '2rem', color: darkMode ? 'white' : '#0A0A14', fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
                            {projectsTranslations.project2.value}
                        </Typography>
                        {project2techs.map((tech) => (
                            <Typography key={tech} variant="caption" sx={{ fontFamily: 'Fairplay Display', fontWeight: 'bold', marginTop: '1rem', display: 'inline-block', marginRight: '0.5rem', padding: '0.25rem 0.5rem', backgroundColor: darkMode ? '#525252' : '#fff', color: darkMode ? 'white' : '#000', borderRadius: '0.8rem', width: { xs: '25%', sm: '20%', md: '20%' } }}>
                                {tech}
                            </Typography>
                        ))}
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-around' }}>
                        <Button size="small" href="https://github.com/dilaraymercann/fsweb-s8-challenge-pizza" target="_blank" sx={{
                            color: darkMode ? 'white' : '#000', fontFamily: 'Inter',
                            fontSize: { xs: '0.65rem', md: '0.8rem' },
                            padding: { xs: '2px 6px', md: '4px 10px' },
                            '&:hover': {
                                transform: 'scale(1.1)',
                                backgroundColor: 'transparent',
                            }
                        }} >{projectsTranslations.viewGithub}</Button>
                        <Button size="small" href="https://fsweb-s10g2-redux-filmler-solution-sepia.vercel.app/movies" target="_blank" sx={{
                            color: darkMode ? 'white' : '#000', fontFamily: 'Inter',
                            fontSize: { xs: '0.65rem', md: '0.8rem' },
                            padding: { xs: '2px 6px', md: '4px 10px' },
                            '&:hover': {
                                transform: 'scale(1.1)',
                                backgroundColor: 'transparent',
                            }
                        }} endIcon={<ArrowForwardIcon sx={{ color: darkMode ? 'white' : '#000' }} />}> {projectsTranslations.goToApp}</Button>
                    </CardActions>
                    <CardMedia
                        component="img"
                        image="../public/projects/desktop.png"
                        sx={{
                            width: '100%',
                            marginTop: { xs: language === 'tr' ? '0.1rem' : '1rem', md: language === 'tr' ? '0.4rem' : '1.1rem' },
                            position: 'absolute',
                        }}
                    />
                    <CardMedia
                        component="img"
                        image="../public/projects/desktopContent2.png"
                        sx={{
                            width: { xs: '11rem', md: '18rem' },
                            height: { xs: '6.8rem', md: '11.1rem' },
                            marginTop: { xs: language === 'tr' ? '0.5rem' : '1.5rem', md: language === 'tr' ? '1rem' : '1.7rem' },
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            borderRadius: '0.1rem',
                        }}
                    />
                </Card>
            </div>
        </div >
    )
}

export default Projects;