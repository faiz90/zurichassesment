// File: src/billing/billing.module.ts
import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { RolesGuard } from '../common/guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
    controllers: [BillingController],
    providers: [
        BillingService,
        {
            provide: APP_GUARD,
            useClass: RolesGuard,
        },
    ],
})
export class BillingModule {}
