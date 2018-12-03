export class MenuItem {
    id?:string;
    label:string;
    path:{[k:string]: any};
    children?:MenuItem[];
}
