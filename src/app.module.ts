import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillingModule } from './billing/billing.module';
import { Billing } from './billing/entities/billing.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'billing_user',
            password: 'billing_pass',
            database: 'CUSTOMER_BILLING_PORTAL',
            entities: [Billing],
            synchronize: true, // ❗for dev only; disable in production
        }),
        BillingModule,
    ],
})
export class AppModule {}

