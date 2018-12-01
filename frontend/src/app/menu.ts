import { MenuItem } from "./modules/ultimate-core/models/menu-item";
import { MenuOptions } from "./modules/ultimate-core/models/menu-options";

export const menu:MenuItem[] = [
    {label:'Home', path:['/']},
    {label:'Auth', children: [
        {label:'Login',path:['login']},
        {label:'Register',path:['register']},
        {label:'Invite',path:['invite']},
        {label:'Private',path:['private']},
        {label:'Public',path:['public']},
        {label:'-'},
    ]},
    {label:'Users', path:['users']},
    {label:'Product', children:[
        {label:'List',path:['products']},
        {label:'Detail',path:['product']},
        {label:'Edit',path:['product/add']},
    ]}
];

export const menuOptions:MenuOptions = {
    search: false
};