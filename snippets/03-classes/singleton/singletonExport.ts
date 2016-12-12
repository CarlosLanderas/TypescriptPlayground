class Singleton {
    executions: number = 0;
    execute(): void {
        this.executions +=1;
    }

    getExecutions(): number {
        return this.executions;
    }
}

export default new Singleton();