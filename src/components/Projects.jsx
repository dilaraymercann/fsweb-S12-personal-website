import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Projects = () => {
    const project1techs = ["react", "vercel", "axios", "router"];
    const project2techs = ["react", "redux", "axios", "router", "vercel"];
    return (
        <div className="min-h-[70vh] text-center text-3xl mt-10 text-[#000000] font-[Montserrat] mb-20 ">
            <h1>Projects</h1>
            <div className="flex gap-4 justify-center mt-20 flex-wrap h-[80vh]">
                <Card sx={{
                    backgroundColor: '#DDEEFE', width: 400, position: 'relative', overflow: 'visible'
                }}>
                    <CardContent sx={{ padding: '24px' }}>
                        <Typography variant="h5" component="div" sx={{ fontFamily: 'Playfair Display' }}>
                            Random Jokes
                        </Typography>
                        <Typography variant="body2" sx={{ fontFamily: 'Inter', marginTop: '2rem' }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
                        </Typography>
                        {project1techs.map((tech) => (
                            <Typography key={tech} variant="caption" sx={{ fontFamily: 'Fairplay Display', fontWeight: 'bold', marginTop: '1rem', display: 'inline-block', marginRight: '0.5rem', padding: '0.25rem 0.5rem', backgroundColor: '#fff', color: '#000', borderRadius: '0.8rem', width: '20%' }}>
                                {tech}
                            </Typography>
                        ))}

                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-around' }}>
                        <Button size="small" sx={{
                            color: '#000', fontFamily: 'Inter', '&:hover': {
                                transform: 'scale(1.1)',
                                backgroundColor: 'transparent',
                            }
                        }} >View on Github</Button>
                        <Button size="small" sx={{
                            color: '#000', fontFamily: 'Inter', '&:hover': {
                                transform: 'scale(1.1)',
                                backgroundColor: 'transparent',
                            }
                        }} endIcon={<ArrowForwardIcon sx={{ color: '#000' }} />}>Go to App</Button>
                    </CardActions>
                    <CardMedia
                        component="img"
                        image="../public/projects/desktop.png"
                        sx={{
                            width: '100%',

                            marginTop: '5.5rem',
                            position: 'absolute',
                        }}
                    />
                    <CardMedia
                        component="img"
                        image="../public/projects/desktopContent1.png"
                        sx={{
                            width: '18rem',
                            height: '11.1rem',
                            marginTop: '6.1rem',
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            borderRadius: '0.5rem',
                        }}
                    />
                </Card>
                <Card sx={{ backgroundColor: '#D9F6F1', width: 400, position: 'relative', overflow: 'visible' }}>
                    <CardContent sx={{ padding: '24px' }}>
                        <Typography variant="h5" component="div" sx={{ fontFamily: 'Playfair Display' }}>
                            Are you bored?
                        </Typography>
                        <Typography variant="body2" sx={{ fontFamily: 'Inter', marginTop: '2rem' }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!
                        </Typography>
                        {project2techs.map((tech) => (
                            <Typography key={tech} variant="caption" sx={{ fontFamily: 'Fairplay Display', fontWeight: 'bold', marginTop: '1rem', display: 'inline-block', marginRight: '0.5rem', padding: '0.25rem 0.5rem', backgroundColor: '#fff', color: '#000', borderRadius: '0.8rem', width: '20%' }}>
                                {tech}
                            </Typography>
                        ))}
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-around' }}>
                        <Button size="small" sx={{
                            color: '#000', fontFamily: 'Inter', '&:hover': {
                                transform: 'scale(1.1)',
                                backgroundColor: 'transparent',
                            }
                        }} >View on Github</Button>
                        <Button size="small" sx={{
                            color: '#000', fontFamily: 'Inter', '&:hover': {
                                transform: 'scale(1.1)',
                                backgroundColor: 'transparent',
                            }, '&:hover': {
                                transform: 'scale(1.1)',
                                backgroundColor: 'transparent',
                            }
                        }} endIcon={<ArrowForwardIcon sx={{ color: '#000' }} />}>Go to App</Button>
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