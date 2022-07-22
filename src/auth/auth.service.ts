import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/schemas/user.schema';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
                private jwtService: JwtService
      ) {}

      async hashPassword (password: string): Promise<string> {
        return bcrypt.hash(password, 12)
      }  

      async register(user: Readonly<CreateUserDto>): Promise<User | any> {
        const { first_name, last_name, phone, email, password } = user;
        const existingUser = await this.usersService.findByEmail(email);
            if (existingUser)
                throw new HttpException(
                'An account with that email already exists!',
                HttpStatus.CONFLICT,
      );

        const hashedPassword = await this.hashPassword(password);
        const newUser = await this.usersService.create(first_name, last_name, phone, email, hashedPassword);
        return newUser;
      }

      async comparePassword( password: string, hashedPassword: string ): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
      }
      
      async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        if (this.comparePassword) {
          // const { password, ...result } = user;
          return user;
        }
        return null;
      }
    
      async login(user: any) {
       
        const payload = { username: user.email, sub: user._id };
        return {
          token: this.jwtService.sign(payload),
        };
      }
      async getUser(payload: any) {
        const user = await this.usersService.findByEmail(payload.username);
        return {user};
      }
}