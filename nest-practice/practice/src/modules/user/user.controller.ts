import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';

// User
//@Controller('v1/user') //버전컨트롤
@Controller('/user')
export class UserController {

    // Service 주입
    constructor(private readonly userService: UserService) {}

    //* 유저 생성
    // [POST] localhost:3000/user
    @Post('/') 
    async createUser(@Body() body) {
        // this.userService: 이 클래스(this) 내부의 userService를 이용하겠다
        const data = await this.userService.createUser(body);
        return data
    }

    //* 유저 조회
    // [GET] localhost:3000/user
    @Get('/')
    async getUser() {
        const data = await this.userService.getUsers();
        return data
    }

    //* 유저 업데이트
    // [PATCH] ~ user/:userId
    @Patch('/:userId') 
    async updateUser(@Param() userId: number, @Body() body) {
        const data = await this.userService.updateUser(userId, body);
        return data
    }

    //* 유저 삭제
    // [DELETE] ~ user/:userId
    @Delete('/:userId')
    async deleteUser(@Param() userId: number) {
        await this.userService.deleteUser(userId);
    }

}
