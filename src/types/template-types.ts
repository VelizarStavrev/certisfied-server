import { Request } from 'express';

export interface Template {
    name: string, 
    notes: string,
    fields: object,
    orientation: string
}

export interface TemplateSchemaData extends Template {
    created: number, 
    edited: number
}

export interface TemplateRequestData extends Template {
    userId: string, 
}

export interface TemplateRequest extends Request<{ id: string }, {}, TemplateRequestData> {}
