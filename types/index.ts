export interface NavLinks {
    id: number;
    name: string;
    path: string;
}

export interface RegisterFormSchema {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface LoginFormSchema {

    email: string;
    password: string;

}

// /^[^\s@]+@[^\s@]+\.[^\s@]+$/
