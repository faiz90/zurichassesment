import { Injectable, NotFoundException } from '@nestjs/common';

export interface Billing {
    productCode: string;
    location: string;
    premiumPaid: number;
}

@Injectable()
export class BillingService {
    private billings: Billing[] = [];

    findAll(productCode?: string, location?: string): Billing[] {
        return this.billings.filter(
            (b) =>
                (!productCode || b.productCode === productCode) &&
                (!location || b.location === location),
        );
    }

    create(data: Billing): Billing {
        this.billings.push(data);
        return data;
    }

    update(productCode: string, data: Partial<Billing>): Billing {
        const billing = this.billings.find((b) => b.productCode === productCode);
        if (!billing) throw new NotFoundException('Billing record not found');
        Object.assign(billing, data);
        return billing;
    }

    delete(productCode: string): void {
        const index = this.billings.findIndex((b) => b.productCode === productCode);
        if (index === -1) throw new NotFoundException('Billing record not found');
        this.billings.splice(index, 1);
    }
}
