import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CustomersModule } from './customers.module';
import { SupabaseModule } from './supabase.module';
import { BooksModule } from './books.module';
import { OrdersModule } from './orders.module';
import { OrdersItemModule } from './order_item.module';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
@Module({
  imports: [
    ConfigModule.forRoot(),
    CustomersModule,
    SupabaseModule,
    BooksModule,
    OrdersModule,
    OrdersItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
