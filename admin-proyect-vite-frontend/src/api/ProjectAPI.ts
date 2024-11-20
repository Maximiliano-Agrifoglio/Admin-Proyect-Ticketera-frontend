import { ProjectFormData } from "@/../types/index";
import api from "@/lib/axios";
import { deasboardProjectSchema } from "@/types/index";

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

export {createProject,getProjects};


