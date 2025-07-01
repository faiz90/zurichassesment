import { Test, TestingModule } from '@nestjs/testing';
import { BillingService } from './billing.service';
import { Billing } from './entities/billing.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('BillingService', () => {
    let service: BillingService;
    let repo: Repository<Billing>;

    const mockBillingRepo = {
        find: jest.fn(),
        findOneBy: jest.fn(),
        create: jest.fn(),
        save: jest.fn(),
        delete: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                BillingService,
                {
                    provide: getRepositoryToken(Billing),
                    useValue: mockBillingRepo,
                },
            ],
        }).compile();

        service = module.get<BillingService>(BillingService);
        repo = module.get<Repository<Billing>>(getRepositoryToken(Billing));
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should create a billing record', async () => {
        const dto = { productCode: 'P1', location: 'KL', premiumPaid: 100 };

        mockBillingRepo.create.mockReturnValue(dto);
        mockBillingRepo.save.mockResolvedValue(dto);

        const result = await service.create(dto);

        expect(result).toEqual(dto);
        expect(mockBillingRepo.create).toHaveBeenCalledWith(dto);
        expect(mockBillingRepo.save).toHaveBeenCalledWith(dto);
    });

    // Add more tests as needed...
});
