import { MenuItem } from "./modules/ultimate-core/models/menu-item";
import { MenuOptions } from "./modules/ultimate-core/models/menu-options";

export const menu:MenuItem[] = [
    {label:'Home', path:['/']},
    {label:'Auth', children: [
        {label:'Login',path:['login']},
        {label:'Register',path:['register']},
        {label:'Invite',path:['invite']},
        {label:'-'},
        {label:'Users',path:['users']},
    ]},
    {label:'Services',path:['services']}
];

export const menuOptions:MenuOptions = {
    search: false
};