import {Box, Container, Stack, Typography, Button} from '@mui/material'

function HighLightSection() {
    return(
        <Box>
            <Container>
                <Stack
                    direction="row"
                >
                    <img src="assets/house-of-dragons-poster.jpg" />
                    <Stack
                        sx={{
                            justifyContent: 'center',
                            paddingLeft: '1rem',
                        }}>
                        <Typography
                            variant="h4"
                        >House of Dragons
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
                                16
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, sequi perspiciatis voluptatem fuga accusantium tempore blanditiis, officia, maxime nihil iure id quasi quisquam rem corrupti animi aliquam quibusdam labore itaque.
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