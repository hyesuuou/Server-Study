import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    //* 유저 생성
    async createUser(body) {
        return body;
    }

    // * 유저 조회
    async getUsers() {
        return ['zzz', 'ggg', 'zzzzz'];
    }

    async updateUser(userId: number, body) {
        return 'updated'
    }

    async deleteUser(userId: number) {
        return 'deleted!'
    }

}
