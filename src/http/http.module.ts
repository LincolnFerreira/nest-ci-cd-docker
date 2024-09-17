import { Module } from '@nestjs/common';
import { HttpService } from './http.service';
import { HttpModule as AxiosHttpModule } from '@nestjs/axios';

@Module({
  imports: [AxiosHttpModule],
  providers: [
    {
      provide: 'IHttpService',
      useClass: HttpService,
    },
  ],
  exports: ['IHttpService'],
})
export class HttpModule {}
