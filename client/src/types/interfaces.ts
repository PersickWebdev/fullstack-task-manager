export interface ITask {
    id?: string;
    key?: string;
    title: string;
    priority: string;
    isCompleted: boolean;
}

export interface IUser {
    userId: string,
    firstName: string;
    lastName: string;
    age: string;
    email: string;
    password: string;
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

export interface IProfileFormData {
    firstName?: string;
    lastName?: string;
    age?: string;
}