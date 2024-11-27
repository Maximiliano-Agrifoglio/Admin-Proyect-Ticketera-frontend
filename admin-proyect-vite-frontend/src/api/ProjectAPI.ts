import { ProjectFormData } from "@/../types/index";
import api from "@/lib/axios";
import { Project, deasboardProjectSchema } from "@/types/index";
import { isAxiosError } from "axios";

const createProject  = async (FormData : ProjectFormData) => {
    try {
        const { data } = await api.post('/projects',FormData)
        return data;
    } catch (error) {
        console.log(`Excepción en createProject => ${error}`);
    }
};

const getProjects = async () => {
    try {
        const { data } = await api('/projects');
        const response = deasboardProjectSchema.safeParse(data);  
        if (response.success) {
            return response.data;
        }           
    } catch (error) {
        console.log(`Excepción en getProjects => ${error}`);
    }
};

const getProjectById = async (id : Project['_id']) => {
    try {
        const { data } = await api(`/projects/${id}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
};

export {createProject,getProjects,getProjectById};


