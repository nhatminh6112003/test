import { Module } from '@nestjs/common';
import { SupabaseService } from '../services/supabase.service';
import { OrderItemService } from '../services/order-item.service';
import { OrderItemsRepository } from '../repositories/order_item.repository';
import { OrdersItemController } from '../controllers/orders-item.controller';
@Module({
  controllers: [OrdersItemController],
  providers: [OrderItemsRepository, OrderItemService, SupabaseService],
})
export class OrdersItemModule {}
