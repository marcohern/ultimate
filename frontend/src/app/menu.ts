import { MenuItem } from "./modules/ultimate-core/models/menu-item";
import { MenuOptions } from "./modules/ultimate-core/models/menu-options";

export const menu:MenuItem[] = [
    {label:'Home', path:['/']},
    {label:'Users', path:['users']},
    {label:'Product', children:[
        {label:'List',path:['products']},
        {label:'New',path:['product/add']},
        {label:'Detail',path:['product']},
    ]},
    {label:'Auth', children: [
        {label:'Login',path:['login']},
        {label:'Register',path:['register']},
        {label:'Invite',path:['invite']},
        {label:'Private',path:['private']},
        {label:'Public',path:['public']},
        {label:'-'},
    ]},
];

export const menuOptions:MenuOptions = {
    search: false
};