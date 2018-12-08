export class MenuItem {
    label:string = '';
    enabled?:boolean = true;
    path?:any[] = [];
    query?:any = {};
    children?:MenuItem[] = [];
}
