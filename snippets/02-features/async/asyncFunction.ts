export async function getData() : Promise<string> {
    return new Promise<string>( (res, rej) => {
        setTimeout( () => {
            res("Hola!");
        },500);
    });
}