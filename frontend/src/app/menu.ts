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
        {label:'Users',path:['users']},
        {label:'Product List',path:['products']},
        {label:'Product Detail',path:['product']},
    ]},
    {label:'Services',path:['services']}
];

export const menuOptions:MenuOptions = {
    search: false
};