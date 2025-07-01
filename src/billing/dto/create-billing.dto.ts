import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBillingDto {
    @ApiProperty()
    @IsString()
    productCode!: string;

    @ApiProperty()
    @IsString()
    location!: string;

    @ApiProperty()
    @IsNumber()
    premiumPaid!: number;
}

