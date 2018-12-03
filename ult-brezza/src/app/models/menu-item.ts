export class MenuItem {
    label:string;
    path:{[k:string]: any};
    children?:MenuItem[];
    type?:string;
}
