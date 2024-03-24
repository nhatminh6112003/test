// supabase.module.ts
import { Module } from '@nestjs/common';
import { BooksController } from '../controllers/books.controller';
import { BooksService } from '../services/books.service';
import { SupabaseService } from '../services/supabase.service';
import { BooksRepository } from '../repositories/books.repository';
import { SupabaseClient } from '@supabase/supabase-js';
@Module({
  controllers: [BooksController],
  providers: [BooksRepository, BooksService, SupabaseService],
})
export class BooksModule {}
