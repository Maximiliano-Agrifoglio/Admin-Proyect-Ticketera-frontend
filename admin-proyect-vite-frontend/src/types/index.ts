import { z } from 'zod'

/**Auth & users */
const authSchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
      password_confirmation: z.string(),
      token: z.string()
});

type Auth = z.infer<typeof authSchema>

export type UserLoginForm = Pick<Auth, 'email' | 'password' >
export type UserRegistrationForm = Pick<Auth, 'name' |'email' | 'password' | 'password_confirmation'>
export type ConfirmToken = Pick<Auth, 'token'>

/** Tasks */
const taksStatusSchema = z.enum(['pending','onHold','inProgress',
'underReview','completed']);
type TaskStatus = z.infer<typeof taksStatusSchema>

const taskSchema = z.object({
      _id: z.string(), 
      name: z.string(), 
      description: z.string(), 
      project: z.string(),
      status: taksStatusSchema,
      createdAt: z.string(),
      updatedAt: z.string()
});

type Task = z.infer<typeof taskSchema>
type TaskFormData = Pick<Task, 'name' | 'description'>
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

export {projectSchema, deasboardProjectSchema,taksStatusSchema,taskSchema};
export type { Project, ProjectFormData,Task,TaskFormData,TaskStatus };


