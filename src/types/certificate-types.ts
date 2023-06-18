import { Request } from 'express';

export interface Certificate {
    name: string,
    notes: string,
    template_id: string,
    fields: object
}

export interface CertificateSchemaData extends Certificate {
    created: number, 
    edited: number
}

export interface CertificateRequestData extends Certificate {
    userId: string, 
}

export interface CertificateRequest extends Request<{ id: string }, {}, CertificateRequestData> {}
