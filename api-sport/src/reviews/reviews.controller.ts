import {
    Controller,
    Post,
    Body,
    Param,
  } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CreateReviewDto } from './dto/create-review-dto'
import { ReviewsService } from './reviews.service'
  
  @Controller('reviews')
  @ApiTags("Reviews")
  export class ReviewController {
    constructor(private readonly reviewsService: ReviewsService) {}
    
    
    @Post('/:userId/:eventId')
    @ApiOperation({ summary: "Create review" })
    public async create(
        @Body() review: CreateReviewDto,
        @Param('userId') userId: string,
        @Param('eventId') eventId: string
    ) {
      return this.reviewsService.createReview(review, userId, eventId)
    }

}