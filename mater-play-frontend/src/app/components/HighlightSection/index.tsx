import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesService } from '../../services/movie-service';
import { IMovie } from '../../@libs/types';

function HighLightSection() {

    const params= useParams();

    const [movie, setMovies] = useState<IMovie>({} as IMovie);

    useEffect(()=>{

        const movieId = (params.id) ? params.id: "4b873811-6c0a-4b2e-a196-9b0b68ac631d"

        if(params.id){
            MoviesService.getMoviesById(movieId)
            .then(result => {
                if(result) setMovies(result);
            })
            .catch(error => {
                console.log('PAU:', error)
            })
        }
    },[params]);

    return(
        <Box>
            <Container>
                <Stack
                    direction="row"
                >
                    <img src={`assets/${movie.poster}`} />
                    <Stack
                        sx={{
                            justifyContent: 'center',
                            paddingLeft: '1rem',
                        }}>
                        <Typography
                            variant="h4"
                        >{movie.title}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                        >
                            <span 
                                style={{
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    padding: '0.2rem',
                                    marginRight: '0.5rem',
                                    marginLeft: '0.2rem',
                                }}>
                                {movie.ageRating}
                            </span>
                            Aventura, Fantasia, Ação</Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    paddingTop: '1rem',
                                    marginBottom: '0.5rem',
                                }}
                                >
                                Sinopse
                            </Typography>
                            <Typography
                                variant="body2"
                            >
                                {movie.description}
                            </Typography>
                            <Stack
                                direction="row"
                                gap={1}
                                sx={{
                                    paddingY: '1rem',
                                }}
                            >
                                <Button 
                                    variant='outlined'
                                >
                                    Assistir
                                </Button>
                                <Button
                                    variant='contained'
                                >
                                    Detalhes
                                </Button>
                            </Stack>
                            
                    </Stack>
                    
                </Stack>
            </Container>
        </Box>
    )
}

export default HighLightSection;