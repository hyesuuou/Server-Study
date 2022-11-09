import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';


// userservice와 usercontroller를 감싼것
@Module({
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
