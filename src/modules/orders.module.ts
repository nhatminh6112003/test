// orders.module.ts
import { Module } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { SupabaseService } from '../services/supabase.service';
import { OrdersController } from '../controllers/orders.controller';
import { OrdersRepository } from '../repositories/orders.repository';
@Module({
  controllers: [OrdersController],
  providers: [OrdersRepository, OrdersService, SupabaseService],
})
export class OrdersModule {}
