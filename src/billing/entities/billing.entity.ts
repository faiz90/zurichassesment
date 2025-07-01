import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'BILLING_RECORDS' })
export class Billing {
    @PrimaryGeneratedColumn()
    id!: number;  // ✅ Use ! to indicate it will be auto-set by DB

    @Column()
    productCode!: string;

    @Column()
    location!: string;

    @Column('decimal', { precision: 10, scale: 2 })
    premiumPaid!: number;
}

