import { Controller, Get, HttpException, HttpStatus, Param } from "@nestjs/common";
import { Movie } from "src/entities/movie-entity";
import { MovieService } from "src/services/movie-service";

@Controller('Movies')
export class MovieController {

    constructor(
        private service: MovieService
    ){}

    @Get()
    findAll(): Promise <Movie[]> {
        return this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Movie> {
        const found = await this.service.findById(id);

        if(!found){
            throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
        }

        return found
    }
}