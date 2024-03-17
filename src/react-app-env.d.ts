
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        REACT_APP_API_REGISTRATION: string;
        REACT_APP_API_USERS: string;
        REACT_APP_API_LOGIN: string;
        REACT_APP_API_MESSAGE: string;

    }

}
declare module "*.png";
