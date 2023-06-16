export interface Login {
    username: string,
    password: string
}

export interface Register {
    email: string,
    username: string,
    password: string
}

export interface RegisterData {
    email: string,
    username: string,
    password: string,
    created: number,
    role: number
}
