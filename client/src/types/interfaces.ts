export interface INotification {
    message: string;
}

export interface ITask {
    id?: string;
    key?: string;
    removeTaskHandler?: (id: string | undefined) => void;
    userEmail?: string;
    description: string;
    priority: string;
    isCompleted: boolean;
}

export interface ITaskRemoveData {
    email: string;
    taskId: string | undefined;
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

export interface IAddTaskFormData {
    taskId: string;
    description: string;
    priority: string;
    isCompleted: boolean;
}

// UI Interfaces:
export interface IButton {
    children?: any;
    action?: any;
    buttonStyles?: any;
}

export interface IInput {
    name: string;
    value?: string;
    action?: (name: string, value: any) => void;
    placeholder: string;
    inputStyles?: any;
}

export interface ISelect {
    selectStyles?: any;
    value?: string;
    action?: (name: string, value: any) => void;
}