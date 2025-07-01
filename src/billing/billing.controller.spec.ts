import { Test, TestingModule } from '@nestjs/testing';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';

describe('BillingController', () => {
    let controller: BillingController;
    let service: BillingService;

    const mockBillingService = {
        findAll: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BillingController],
            providers: [
                { provide: BillingService, useValue: mockBillingService },
            ],
        }).compile();

        controller = module.get<BillingController>(BillingController);
        service = module.get<BillingService>(BillingService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should get all billing records', () => {
        const result = [
            { productCode: 'P1', location: 'KL', premiumPaid: 100 },
        ];
        mockBillingService.findAll.mockReturnValue(result);

        expect(controller.getAll()).toEqual(result);
        expect(service.findAll).toHaveBeenCalledWith(undefined, undefined);
    });

    it('should create a billing record', () => {
        const dto: CreateBillingDto = {
            productCode: 'P1',
            location: 'KL',
            premiumPaid: 100,
        };

        mockBillingService.create.mockReturnValue(dto);

        expect(controller.create(dto)).toEqual(dto);
        expect(service.create).toHaveBeenCalledWith(dto);
    });

    it('should update a billing record', () => {
        const dto: UpdateBillingDto = {
            location: 'Penang',
            premiumPaid: 120,
        };

        const updated = {
            productCode: 'P1',
            ...dto,
        };

        mockBillingService.update.mockReturnValue(updated);

        expect(controller.update('P1', dto)).toEqual(updated);
        expect(service.update).toHaveBeenCalledWith('P1', dto);
    });

    it('should delete a billing record', () => {
        mockBillingService.delete.mockReturnValue(undefined);

        expect(controller.delete('P1')).toBeUndefined();
        expect(service.delete).toHaveBeenCalledWith('P1');
    });
});
