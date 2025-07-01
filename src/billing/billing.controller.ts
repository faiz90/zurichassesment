import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Query,
    Body,
    HttpCode,
} from '@nestjs/common';
import { BillingService } from './billing.service';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';
import { Roles } from '../common/decorators/roles.decorator';
import {
    ApiTags,
    ApiQuery,
    ApiOperation,
    ApiBody,
    ApiResponse,
} from '@nestjs/swagger';

@ApiTags('Billing')
@Controller('billing')
export class BillingController {
    constructor(private readonly billingService: BillingService) {}

    @Get()
    @ApiOperation({ summary: 'Get all billing records (with optional filters)' })
    @ApiQuery({ name: 'productCode', required: false })
    @ApiQuery({ name: 'location', required: false })
    @ApiResponse({ status: 200, description: 'Billing records fetched successfully.' })
    getAll(
        @Query('productCode') productCode?: string,
        @Query('location') location?: string,
    ) {
        return this.billingService.findAll(productCode, location);
    }

    @Post()
    @Roles('admin')
    @ApiOperation({ summary: 'Create a new billing record (Admin only)' })
    @ApiBody({ type: CreateBillingDto })
    @ApiResponse({ status: 201, description: 'Billing record created.' })
    create(@Body() dto: CreateBillingDto) {
        return this.billingService.create(dto);
    }

    @Put()
    @Roles('admin')
    @ApiOperation({ summary: 'Update an existing billing record (Admin only)' })
    @ApiQuery({ name: 'productCode', required: true })
    @ApiBody({ type: UpdateBillingDto })
    @ApiResponse({ status: 200, description: 'Billing record updated.' })
    update(
        @Query('productCode') productCode: string,
        @Body() dto: UpdateBillingDto,
    ) {
        return this.billingService.update(productCode, dto);
    }

    @Delete()
    @Roles('admin')
    @ApiOperation({ summary: 'Delete a billing record (Admin only)' })
    @ApiQuery({ name: 'productCode', required: true })
    @ApiResponse({ status: 204, description: 'Billing record deleted.' })
    @HttpCode(204)
    delete(@Query('productCode') productCode: string) {
        this.billingService.delete(productCode);
    }
}
