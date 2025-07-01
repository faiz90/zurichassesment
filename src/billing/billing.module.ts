import { Module } from '@nestjs/common';
import { BillingService } from './billing.service';
import { BillingController } from './billing.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Billing } from './entities/billing.entity';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../common/guards/roles.guard';

@Module({
    imports: [TypeOrmModule.forFeature([Billing])],
    controllers: [BillingController],
    providers: [
        BillingService,
        { provide: APP_GUARD, useClass: RolesGuard },
    ],
})
export class BillingModule {}

