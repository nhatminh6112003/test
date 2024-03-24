// supabase.module.ts
import { Module } from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import { SupabaseService } from '../services/supabase.service';
import { CustomersController } from '../controllers/customers.controller';
import { CustomersRepository } from '../repositories/customers.repository';

@Module({
  controllers: [CustomersController],
  providers: [CustomersRepository, CustomersService, SupabaseService],
})
export class CustomersModule {}
