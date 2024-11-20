import { z } from 'zod'

/** Projects */

 const projectSchema = z.object({
       _id: z.string(),
       projectName: z.string(),
       clientName: z.string(),
       description: z.string()
});

const deasboardProjectSchema = z.array(
      projectSchema.pick({
            _id: true,
            projectName: true,
            clientName: true,
            description: true,
      })
);

type Project = z.infer<typeof projectSchema>
type ProjectFormData = Pick<Project, 'clientName' | 'projectName' | 'description'>;

export {projectSchema, deasboardProjectSchema};
export type { Project, ProjectFormData };


