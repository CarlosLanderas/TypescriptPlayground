declare module 'request' {
    export interface HttpRequest {
        method:string,
        headers: string[],
        url: string
    }
}
