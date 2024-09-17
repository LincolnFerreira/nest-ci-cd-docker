import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule], // Importa o módulo de usuário
})
export class AppModule {}
