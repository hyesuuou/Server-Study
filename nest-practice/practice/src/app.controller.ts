import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/user/:userId')
  getHello(): string {
    return this.appService.getHello();
  }
  
  // // * 특정 유저 정보 조회
  // @Get('/user/:userId') // api/user/:userId
  // getHello(@Param() userId: number): string {
  //   return this.appService.getHello();
  // }

  //  // * 특정 유저 정보 조회
  //  @Get('/user/:userId') // api/user/:userId?age={}
  //  getHello(@Param() userId: number, @Query() age: number): string {
  //    return this.appService.getHello();
  //  }

  //  // * 특정 유저 정보 조회
  //  @Get('/user/:userId') // api/user/:userId
  //  getHello(@Param() userId: number, @Body() Body): string {
  //    return this.appService.getHello();
  //  }
}