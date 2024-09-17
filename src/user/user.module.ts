import { Module } from '@nestjs/common';
import { HttpModule } from '../http/http.module'; // Importa o HttpModule
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [HttpModule], // Importa o módulo HTTP
  providers: [UserService, UserResolver], // Provedor do serviço de usuário
  controllers: [UserController], // Controlador do módulo
})
export class UserModule {}
