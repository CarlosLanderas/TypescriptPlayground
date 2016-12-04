interface SoftwareProgrammer {
    name:string;
    surname: string
    doWork : (work: string) => void;
    getDailyHours : () => number;
    getSkills : () => string[];
}


class FrontEndProgrammer implements SoftwareProgrammer{
    
    name: string;
    surname: string;
    doWork(activity: string) {
        console.log(`Working on ${activity}`);
    }
    getDailyHours(): number {
        return 8;
    }
    getSkills(){
        return ['Javascript', 'css', 'html'];
    }
}