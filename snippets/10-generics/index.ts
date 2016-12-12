import { GenericService } from './genericService';
import { Programmer } from '../03-interfaces/programmer';


let genericService = new GenericService();
genericService.getAsync<Programmer[]>('api/get/programmers').then((programmers: Programmer[]) => {
    programmers.forEach( (p, index) => {
        console.log(`Programmer number ${index} is ${p.name}`);
    });
});


