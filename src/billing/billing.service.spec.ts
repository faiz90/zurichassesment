import { BillingService } from './billing.service';

describe('BillingService', () => {
    let service: BillingService;

    beforeEach(() => {
        service = new BillingService();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should create a billing record', () => {
        const billing = service.create({
            productCode: 'P123',
            location: 'KL',
            premiumPaid: 100,
        });

        expect(billing).toEqual({
            productCode: 'P123',
            location: 'KL',
            premiumPaid: 100,
        });

        expect(service.findAll()).toHaveLength(1);
    });

    it('should update a billing record', () => {
        service.create({ productCode: 'P001', location: 'Penang', premiumPaid: 150 });

        const updated = service.update('P001', { location: 'Johor', premiumPaid: 180 });

        expect(updated.location).toBe('Johor');
        expect(updated.premiumPaid).toBe(180);
    });

    it('should delete a billing record', () => {
        service.create({ productCode: 'P002', location: 'Melaka', premiumPaid: 200 });

        service.delete('P002');

        expect(service.findAll()).toHaveLength(0);
    });

    it('should filter billing records by productCode and location', () => {
        service.create({ productCode: 'P1', location: 'A', premiumPaid: 100 });
        service.create({ productCode: 'P1', location: 'B', premiumPaid: 150 });
        service.create({ productCode: 'P2', location: 'A', premiumPaid: 200 });

        const filtered = service.findAll('P1', 'A');

        expect(filtered).toHaveLength(1);
        expect(filtered[0].location).toBe('A');
    });
});
