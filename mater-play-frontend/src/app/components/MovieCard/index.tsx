import { Paper } from '@mui/material'

type MovieCardProps = {
   poster:String;

}

function  MovieCard( { poster}  : MovieCardProps) {
    
    return (
       <Paper
        component="a"
        elevation={0}
        href="/1"
        sx={{

            minWidth:'10rem'
        }}
       > 
        <img src={ poster }
             style={{
                width:'100%'
             }}
        >
        
        
        
        </img>
       </Paper>
    )   
}
export default MovieCard