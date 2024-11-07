import { z } from 'zod'

/** Projects */

 const projectSchema = z.object({
       _id: z.string(),
       projectName: z.string(),
       clientName: z.string(),
       description: z.string()
});

type Project = z.infer<typeof projectSchema>
type ProjectFormData = Pick<Project, 'clientName' | 'projectName' | 'description'>;

export {projectSchema};
export type { Project, ProjectFormData };


