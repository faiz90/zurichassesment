import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBillingDto {
    @ApiProperty()
    @IsString()
    location!: string;

    @ApiProperty()
    @IsNumber()
    premiumPaid!: number;
}
