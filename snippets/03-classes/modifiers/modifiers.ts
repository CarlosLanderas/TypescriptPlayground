export class Worker {
    
    public readonly name: string;
    protected readonly department: string;

    constructor(name: string) {
        this.name = name;
    }

    public printWorkerInfo() {
       console.log(this.userInfo());
    }

    protected getDepartment(){
        return this.department;
    }

    private userInfo(): string {
        return `Worker name is ${this.name} and he works at ${this.department}`;
    }
}


let worker = new Worker('Tomas');

// can not assign readonly field
// worker.name = "pepe"

worker.printWorkerInfo();

// This method is not accesible.
// workers.userInfo();

