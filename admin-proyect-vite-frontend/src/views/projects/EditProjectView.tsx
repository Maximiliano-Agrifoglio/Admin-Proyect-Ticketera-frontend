import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "@/api/ProjectAPI";

const EditProjectView = () => {
    const params = useParams<{projectId: string}>();
    const projectId = params.projectId!;

    const { data, error } = useQuery({
        queryKey: ['editProject', projectId],
        queryFn: () => getProjectById(projectId),
        retry: false,           
    });
    
    console.log(data);
    console.log(error);

    return (
        <div>EditProjectView</div>
    );
};

export default EditProjectView;
