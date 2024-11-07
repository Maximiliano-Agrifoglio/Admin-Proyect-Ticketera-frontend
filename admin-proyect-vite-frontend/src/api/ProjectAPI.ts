import { ProjectFormData } from "@/../types/index";
import api from "@/lib/axios";
import colors from 'colors'

const createProject  = async (FormData : ProjectFormData) => {
    try {
        const { data } = await api.post('/projects',FormData)
    } catch (error) {
        console.log(`Excepción en createProject => ${colors.red(String(error))}`)
    }
};

export default createProject;