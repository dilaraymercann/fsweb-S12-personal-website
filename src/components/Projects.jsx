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
    const { projectsTranslations } = useLanguage();

    const project1techs = projectsTranslations.project1techs;
    const project2techs = projectsTranslations.project2techs;
    return (
        <div className={`min-h-[70vh] text-center text-3xl text-[#000000] font-[Montserrat] pb-20 ${darkMode ? 'bg-[#484148]' : 'bg-white'}`}>
            <h1 className={`pt-10 ${darkMode ? 'text-white' : 'text-[#0A0A14]'}`}>{projectsTranslations.projects}</h1>
            <div className="flex gap-10 justify-center mt-20 flex-wrap h-[80vh]">
                <Card sx={{
                    backgroundColor: darkMode ? '#2D3235' : '#DDEEFE', width: 400, position: 'relative', overflow: 'visible'
                }}>
                    <CardContent sx={{ padding: '24px' }}>
                        <Typography variant="h5" component="div" sx={{ fontFamily: 'Playfair Display', color: darkMode ? 'white' : '#0A0A14' }}>
                            {projectsTranslations.project1.label}
                        </Typography>
                        <Typography variant="body2" sx={{ fontFamily: 'Inter', marginTop: '2rem', color: darkMode ? 'white' : '#0A0A14' }}>
                            {projectsTranslations.project1.value}
                        </Typography>
                        {project1techs.map((tech) => (
                            <Typography key={tech} variant="caption" sx={{ fontFamily: 'Fairplay Display', fontWeight: 'bold', marginTop: '1rem', display: 'inline-block', marginRight: '0.5rem', padding: '0.25rem 0.5rem', backgroundColor: darkMode ? '#525252' : '#fff', color: darkMode ? 'white' : '#000', borderRadius: '0.8rem', width: '20%' }}>
                                {tech}
                            </Typography>
                        ))}

                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-around' }}>
                        <Button size="small" href="https://github.com/dilaraymercann/fsweb-s4-bonus-challenge-html-pizza"
                            target="_blank" sx={{
                                color: darkMode ? 'white' : '#000', fontFamily: 'Inter', '&:hover': {
                                    transform: 'scale(1.1)',
                                    backgroundColor: 'transparent',
                                }
                            }} >{projectsTranslations.viewGithub}</Button>
                        <Button size="small" href="https://fsweb-s10g3-redux-watchlist-solutio-eight-mu.vercel.app/"
                            target="_blank" sx={{
                                color: darkMode ? 'white' : '#000', fontFamily: 'Inter', '&:hover': {
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

                            marginTop: '4.3rem',
                            position: 'absolute',
                        }}
                    />
                    <CardMedia
                        component="img"
                        image="../public/projects/desktopContent1.png"
                        sx={{
                            width: '18rem',
                            height: '11.1rem',
                            marginTop: '4.9rem',
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            borderRadius: '0.5rem',
                        }}
                    />
                </Card>
                <Card sx={{ backgroundColor: darkMode ? '#495351' : '#D9F6F1', width: 400, position: 'relative', overflow: 'visible' }}>
                    <CardContent sx={{ padding: '24px' }}>
                        <Typography variant="h5" component="div" sx={{ fontFamily: 'Playfair Display', color: darkMode ? 'white' : '#0A0A14' }}>
                            {projectsTranslations.project2.label}
                        </Typography>
                        <Typography variant="body2" sx={{ fontFamily: 'Inter', marginTop: '2rem', color: darkMode ? 'white' : '#0A0A14' }}>
                            {projectsTranslations.project2.value}
                        </Typography>
                        {project2techs.map((tech) => (
                            <Typography key={tech} variant="caption" sx={{ fontFamily: 'Fairplay Display', fontWeight: 'bold', marginTop: '1rem', display: 'inline-block', marginRight: '0.5rem', padding: '0.25rem 0.5rem', backgroundColor: darkMode ? '#525252' : '#fff', color: darkMode ? 'white' : '#000', borderRadius: '0.8rem', width: '20%' }}>
                                {tech}
                            </Typography>
                        ))}
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-around' }}>
                        <Button size="small" href="https://github.com/dilaraymercann/fsweb-s8-challenge-pizza" target="_blank" sx={{
                            color: darkMode ? 'white' : '#000', fontFamily: 'Inter', '&:hover': {
                                transform: 'scale(1.1)',
                                backgroundColor: 'transparent',
                            }
                        }} >{projectsTranslations.viewGithub}</Button>
                        <Button size="small" href="https://fsweb-s10g2-redux-filmler-solution-sepia.vercel.app/movies" target="_blank" sx={{
                            color: darkMode ? 'white' : '#000', fontFamily: 'Inter', '&:hover': {
                                transform: 'scale(1.1)',
                                backgroundColor: 'transparent',
                            }, '&:hover': {
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

                            marginTop: '0.3rem',
                            position: 'absolute',
                        }}
                    />
                    <CardMedia
                        component="img"
                        image="../public/projects/desktopContent2.png"
                        sx={{
                            width: '18rem',
                            height: '11.1rem',
                            marginTop: '0.9rem',
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            borderRadius: '0.5rem',
                        }}
                    />
                </Card>
            </div>
        </div>
    )
}

export default Projects;