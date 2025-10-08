import { IsNumber } from "class-validator";

export class AddGoodToCart {
    @IsNumber()
    good_id : number

    @IsNumber()
    user_id : number

    @IsNumber()
    quantity : number

    @IsNumber()
    total_price : number
}