import { ProjectFormData } from "@/../types/index";
import api from "@/lib/axios";

const createProject  = async (FormData : ProjectFormData) => {
    try {
        const { data } = await api.post('/projects',FormData)
        return data;
    } catch (error) {
        console.log(`Excepción en createProject => ${error}`);
    }
};

export default createProject;


