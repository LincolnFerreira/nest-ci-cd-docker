export interface IHttpService {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, data: any): Promise<T>;
  // Outros métodos como PUT, DELETE, etc., podem ser adicionados aqui
}
