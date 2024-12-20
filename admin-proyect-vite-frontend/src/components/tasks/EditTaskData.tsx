import { getTaskById } from '@/api/TaskAPI';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
const EditTaskData = () => {

   const params = useParams();
   const projectId = params.projectId!
   
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get('updateTask')!;

  const {data} = useQuery({
    queryKey: ['task', taskId],
    queryFn: () => getTaskById({projectId,taskId})
  });
  console.log( data);
  
  return (
    <div>EditTaskData</div>
  )
}

export default EditTaskData;