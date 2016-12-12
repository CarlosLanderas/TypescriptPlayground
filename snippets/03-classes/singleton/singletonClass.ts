class SingletonClass {

    private static instance: SingletonClass = null;

    private executions: number = 0;

    private constructor() {}

    static getInstance(): SingletonClass {
         if(!SingletonClass.instance) {
            console.log("Creating instance of singletonClass");
            SingletonClass.instance = new SingletonClass();
        }
        return SingletonClass.instance;
    }
    execute(): void {
        this.executions +=1;
    }

    getExecutions(): number {
        return this.executions;
    }

}

export default SingletonClass;