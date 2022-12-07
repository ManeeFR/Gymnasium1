import { InjectionToken } from "@angular/core";

export interface AppConfig {
    apiUrl: string;
    claseCacheSize: number;
}

export const APP_CONFIG: AppConfig = {
    apiUrl: 'http://localhost:9000',
    claseCacheSize: 10
}

export const CONFIG_TOKEN = 
    new InjectionToken<AppConfig>('CONFIG_TOKEN', 
    { 
        providedIn: 'root', 
        factory: () => APP_CONFIG
    });
