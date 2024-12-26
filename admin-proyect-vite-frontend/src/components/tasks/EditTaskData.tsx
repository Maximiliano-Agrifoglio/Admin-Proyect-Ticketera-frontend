import { getTaskById } from '@/api/TaskAPI';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
import EditTaskModal from './EditTaskmodal';
const EditTaskData = () => {

   const params = useParams();
   const projectId = params.projectId!
   
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get('updateTask')!;

  const {data} = useQuery({
    queryKey: ['task', taskId],
    queryFn: () => getTaskById({projectId,taskId}),
    enabled: !!taskId
  });
  
   if(data) return <EditTaskModal />      
}

export default EditTaskData;