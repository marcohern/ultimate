import { MenuItem } from "./modules/ultimate-core/models/menu-item";

export const menu:MenuItem[] = [
    {label:'Home',  path:['/']},
    {label:'Login', path:['/login']},
    {label:'Dropdown', children: [
        {label:'Who we are',path:['who']},
        {label:'What we do',path:['what']},
        {label:'-'},
        {label:'Where we are',path:['where']},
    ]},
    {label:'Services',path:['services']}
    
];