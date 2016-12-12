
export class GenericService {

    getAsync<T>(url: string): Promise<T> {
       // Simulate get data from server
       let data;
       return new Promise<T>((res, rej) => {         
          res(data.json());
       });
    }
}