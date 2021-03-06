import { Controller, Get, Res,Post, Param, Req } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) { }
 

  @Get('/all-quizs')
  async getAllQuizs(@Res() res:any) {
  
    const allQuizs = await this.quizService.getAllQuizs()
    res.json({ status: 200, data: allQuizs });
   
  }
  @Post('/quiz-set')
  async quizSet(@Req() req:any, @Res() res:any){
    const {sliceVal,id}=req.body
    console.log(sliceVal,id)
    const quizSet=await this.quizService.getQuizSet(id,sliceVal)
    
    res.json({status:200,data:quizSet })
  }
  @Get('/get-quiz-info/:id')
  async getQuizTime(@Req() req:any, @Res() res:any){
    console.log(req.params.id,'req.params.id')
    const quizTime=await this.quizService.getQuizTime(req.params.id)
    res.status(200).send(quizTime)
  }
  
 
 }
 
  
 


