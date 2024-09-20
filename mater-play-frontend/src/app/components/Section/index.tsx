import{Box, Container, Stack, Typography} from '@mui/material'
import MovieCard from '../MovieCard';

const movies = [
    {poster: 'house-of-dragons-poster.jpg'},
    {poster: 'mAbuZuS4CqlTI6lvWIxPRHppbVs.jpg'},
    {poster: 'house-of-dragons-poster.jpg'},
    {poster: 'xeeF1KWSz8EEUl8RBz64qRnxm7V.jpg'},
    {poster: 'house-of-dragons-poster.jpg'},
    {poster: 'house-of-dragons-poster.jpg'},
    {poster: 'xeeF1KWSz8EEUl8RBz64qRnxm7V.jpg'},
    {poster: 'mAbuZuS4CqlTI6lvWIxPRHppbVs.jpg'},
    {poster: 'xeeF1KWSz8EEUl8RBz64qRnxm7V.jpg'},
    {poster: 'xeeF1KWSz8EEUl8RBz64qRnxm7V.jpg'},
    {poster: 'mAbuZuS4CqlTI6lvWIxPRHppbVs.jpg'},
    {poster: 'xeeF1KWSz8EEUl8RBz64qRnxm7V.jpg'}
];

type SectionProps = {
    title: string;
}
function Section({title}: SectionProps) {
    return(
        <><Box>
            <Container>
                <Typography variant="h6"
                sx={{
                    fontWeight: 400,
                    paddingTop: '2rem'
                }}>

                    { title }

                </Typography>
                <Stack direction="row"
                gap={0.5}
                sx={{
                    overflowY: 'hidden',
                    whiteSpace: 'nowrap',
                    paddingY: '1rem',
                }}>

                    {movies.map((item) => (
                        <MovieCard poster={'assets/' + item.poster}/>
                    ))}

                </Stack>
             </Container>
        </Box></>
    )
}

export default Section;