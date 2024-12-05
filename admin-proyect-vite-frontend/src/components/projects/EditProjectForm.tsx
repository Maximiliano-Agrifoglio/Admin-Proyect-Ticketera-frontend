import { Link,useNavigate } from "react-router-dom";
import ProjectForm from "./ProjectForm";
import { useForm } from "react-hook-form";
import { ProjectFormData, Project} from "@/types/index";
import { useMutation, useQueryClient} from "@tanstack/react-query";
import { updateProject } from "@/api/ProjectAPI";
import { toast } from "react-toastify";

type EditProjectFormProps = {
    data: ProjectFormData,
    projectId: Project['_id']
}

const EditProjectForm = ( {data,projectId} : EditProjectFormProps ) => {

    const navigate = useNavigate();
    const initialValues : ProjectFormData = {
        projectName: data.projectName,
        clientName: data.clientName,
        description: data.description
  }
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues})
    
    const QueryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: updateProject,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            QueryClient.invalidateQueries({queryKey: ['projects']});
            QueryClient.invalidateQueries({queryKey: ['editProject']});
            toast.success(data);
            navigate('/');
        }
    });

    const handleForm = (formData: ProjectFormData) => {
        const data = {
            formData,
            projectId   
        }
        mutate(data);
    };
    return (
        
        <> 
            <div className="max-w-3xl mx-auto"> 
                <h1 className="text-5xl font-black">Editar Proyecto</h1>
                <p className="text-2xl font-light text-gray-500 mt-5">Llena el siguiente formulario
                    para editar un proyecto</p>


                <nav className="my-5">
                    <Link
                        className="bg-purple-400 hover:bg-purple-500 px-10 text-xl font-bold
                    text-white p-3 cursor-pointer transition-colors"
                        to='/'
                    >Volver a Proyectos</Link>
                </nav>

                <form
                    className="mt-10 bg-white shadow-lg p-10 rounded-lg"
                    onSubmit={handleSubmit(handleForm)}
                    noValidate
                >
                    <ProjectForm
                        register={register}
                        errors={errors}
                    />
                    <input
                        type="submit"
                        value='Guardar Cambios'
                        className=" bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white
                        uppercase font-bold cursor-pointer transition-colors"
                    >
                    </input>
                </form>
            </div>
        </>
    )
}

export default EditProjectForm;