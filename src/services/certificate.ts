import { CertificateSchemaData } from '../types/certificate-types';
import { TemplateSchemaData } from '../types/template-types';

const Certificate = require('../models/Certificate');
const Template = require('../models/Template');

export async function createCertificate(newCertificateData: CertificateSchemaData): Promise<{ status: boolean, message: string }> {
    const newCertificate = new Certificate(newCertificateData);
    const saveCertificateResponse = await newCertificate.save();

    if (saveCertificateResponse) {
        return { status: true, message: 'Certificate was created successfully!' };
    }

    return { status: false, message: 'An error occurred!' };
}

export async function editCertificate(certificateId: string, creator: string, newCertificateData: CertificateSchemaData): Promise<{ status: boolean, message: string }> {
    const editCertificate = await Certificate.findOne({ _id: certificateId, creator });

    editCertificate.template_id = newCertificateData.template_id;
    editCertificate.name = newCertificateData.name;
    editCertificate.notes = newCertificateData.notes;
    editCertificate.fields = newCertificateData.fields;
    editCertificate.edited = newCertificateData.edited;

    const saveCertificateResponse = await editCertificate.save();

    if (saveCertificateResponse) {
        return { status: true, message: 'Certificate was edited successfully!' };
    }

    return { status: false, message: 'An error occurred!' };
}

export async function deleteCertificate(certificateId: string, creator: string): Promise<{ status: boolean, message: string }> {
    const deleteCertificate = await Certificate.deleteOne({ _id: certificateId, creator });

    if (deleteCertificate.deletedCount) {
        return { status: true, message: 'Certificate was deleted successfully!' };
    }

    return { status: false, message: 'An error occurred!' };
}

export async function getCertificate(certificateId: string): Promise<{ status: boolean, message: string, data?: CertificateSchemaData, template_data?: TemplateSchemaData }> {
    const getCertificate = await Certificate.findOne({ _id: certificateId });
    const getTemplate = await Template.findOne({ _id: getCertificate.template_id });

    if (getCertificate) {
        return { status: true, message: 'Certificate was retrieved successfully!', data: getCertificate, template_data: getTemplate };
    }

    return { status: false, message: 'An error occurred!' };
}
