import { Injectable } from '@nestjs/common';
import { HttpService as AxiosHttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { IHttpService } from './http-service.interface';

@Injectable()
export class HttpService implements IHttpService {
  constructor(private readonly http: AxiosHttpService) {}

  async get<T>(url: string): Promise<T> {
    const response = await firstValueFrom(this.http.get<T>(url));
    return response.data;
  }

  async post<T>(url: string, data: any): Promise<T> {
    const response = await firstValueFrom(this.http.post<T>(url, data));
    return response.data;
  }
}
