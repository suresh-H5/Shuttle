export interface Organization{
    id?: string;
    name:string;
    sourceCode:string;
    sourceCodeUrl:string
    projects? : Project[]
}

export interface Project{
    id:string;
    name:string;
    description:string;
}