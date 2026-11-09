export interface IStudent {
    id: number,
    profileUrl: string,
    name: string,
    grade: string,
    shift: string,
    hasPei: boolean,
    status: string,
    registration?: Date,
    disorderInfo?: IDisorder
}

export interface IDisorder {
    hasDisorder: boolean,
    disorders: string[]
}