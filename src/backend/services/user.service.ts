import { Injectable } from "@nestjs/common";
import { Register } from "DTO/user.register.dto";
import { PrismaService } from "prisma/prisma.service";
import bcrypt from "bcrypt"
import { Login } from "DTO/user.login.dto";

@Injectable()
export class UsersService {
    constructor(private prisma : PrismaService) {};

    async register({email, password, name} : Register) {
        try {
            const hashedPassword = await bcrypt.hash(password,10);
            return this.prisma.users.create({
                data : {
                    email,
                    name,
                    password : hashedPassword
                }
            })
        } catch (error) {
            console.log(error)
            throw new Error("Error in register : " , error)
        }
    }

    async login({email,password} : Login) {
        try {
            const user = await this.prisma.users.findUnique({
                where : {
                    email
                }
            })
            if(!user) throw "There is no such user."

            const isValid = await bcrypt.compare(password,user.password);

            if(!isValid) throw "Uncorrect password."

            return user;
        } catch (error) {
            throw new Error("Error in Login : " , error)
        }
    }
}