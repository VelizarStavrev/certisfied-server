import { TemplateSchemaData } from '../types/template-types';
const Template = require('../models/Template');

export async function createTemplate(newTemplateData: TemplateSchemaData): Promise<{ status: boolean, message: string }> {
    const newTemplate = new Template(newTemplateData);
    const saveTemplateResponse = await newTemplate.save();

    if (saveTemplateResponse) {
        return { status: true, message: 'Template was created successfully!' };
    }

    return { status: false, message: 'An error occurred!' };
}

export async function editTemplate(templateId: string, creator: string, newTemplateData: TemplateSchemaData): Promise<{ status: boolean, message: string }> {
    const editTemplate = await Template.findOne({ _id: templateId, creator });

    editTemplate.name = newTemplateData.name;
    editTemplate.notes = newTemplateData.notes;
    editTemplate.orientation = newTemplateData.orientation;
    editTemplate.fields = newTemplateData.fields;
    editTemplate.edited = newTemplateData.edited;

    const saveTemplateResponse = await editTemplate.save();

    if (saveTemplateResponse) {
        return { status: true, message: 'Template was edited successfully!' };
    }

    return { status: false, message: 'An error occurred!' };
}

export async function deleteTemplate(templateId: string, creator: string): Promise<{ status: boolean, message: string }> {
    const deleteTemplate = await Template.deleteOne({ _id: templateId, creator });

    if (deleteTemplate.deletedCount) {
        return { status: true, message: 'Template was deleted successfully!' };
    }

    return { status: false, message: 'An error occurred!' };
}

export async function getTemplate(templateId: string, creator: string): Promise<{ status: boolean, message: string, data?: TemplateSchemaData }> {
    const getTemplate = await Template.findOne({ _id: templateId, creator });

    if (getTemplate) {
        return { status: true, message: 'Template was retrieved successfully!', data: getTemplate };
    }

    return { status: false, message: 'An error occurred!' };
}

export async function getTemplates(creator: string): Promise<{ status: boolean, message: string, data?: TemplateSchemaData }> {
    const getTemplates = await Template.find({ creator });

    if (getTemplates) {
        return { status: true, message: 'Template data retrieved succesfully.', data: getTemplates };
    }

    return { status: false, message: 'An error occurred!' };
}
