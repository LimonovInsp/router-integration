export interface Action {
    type: string;
    payload: any;
}

export type Payload = {
    [key: string]: string | number | string[];
}
