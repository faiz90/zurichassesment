import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Billing } from './entities/billing.entity';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';

@Injectable()
export class BillingService {
    constructor(
        @InjectRepository(Billing)
        private billingRepo: Repository<Billing>,
    ) {}

    async findAll(productCode?: string, location?: string): Promise<Billing[]> {
        const where = {};
        if (productCode) Object.assign(where, { productCode: ILike(productCode) });
        if (location) Object.assign(where, { location: ILike(location) });
        return this.billingRepo.find({ where });
    }

    async create(dto: CreateBillingDto): Promise<Billing> {
        const billing = this.billingRepo.create(dto);
        return this.billingRepo.save(billing);
    }

    async update(productCode: string, dto: UpdateBillingDto): Promise<Billing> {
        const billing = await this.billingRepo.findOneBy({ productCode });
        if (!billing) throw new NotFoundException();
        Object.assign(billing, dto);
        return this.billingRepo.save(billing);
    }

    async delete(productCode: string): Promise<void> {
        const result = await this.billingRepo.delete({ productCode });
        if (result.affected === 0) throw new NotFoundException();
    }
}
