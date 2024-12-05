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

type ProjectAPIType = {
    formData: ProjectFormData,
    projectId: Project['_id']
}

const updateProject = async ({formData, projectId} : ProjectAPIType) => {
    try {
        const { data } = await api.put<string>(`/projects/${projectId}`, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
};

const deleteProject = async ( id : Project['_id']) => {
    try {
        const url = `/projects/${id}`
        const { data } = await api.delete<string>(url)
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
};

export {createProject,getProjects,getProjectById, updateProject,deleteProject};


