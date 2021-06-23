export interface ITask {
    id?: string;
    key?: string;
    title: string;
    priority: string;
    isCompleted: boolean;
}

export interface IUser {
    userId: string;
    token: string;
    firstName: string;
    lastName: string;
    age: string;
    email: string;
    password?: string;
    tasks: ITask[];
}

export interface IUserReducer {
    isLogged: boolean;
    user: IUser;
}

export interface IRegisterFormData {
    firstName?: string;
    lastName?: string;
    age?: string;
    email?: string;
    password?: string;
}

export interface ILoginFormData {
    email?: string;
    password?: string;
}

// UI Interfaces:
export interface IButton {
    children?: any;
    action?: () => void;
    buttonStyles?: any;
}

export interface IInput {
    name: string;
    value?: string;
    action?: () => void;
    placeholder: string;
    inputStyles?: any;
}