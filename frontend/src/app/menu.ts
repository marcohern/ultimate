import { MenuItem } from "@marcohern/ultimate-core/lib/models/menu-item";
import { MenuOptions } from "@marcohern/ultimate-core/lib/models/menu-options";

export const menu:MenuItem[] = [
    {label:'Home' , path:['/']},
    {label:'Users', children:[
        {label:'List'  , path:['/users'       ], query:{page:1} },
        {label:'New'   , path:['/users/create'] },
    ]},
    {label:'Product', children:[
        {label:'List'  , path:['/products']},
        {label:'New'   , path:['/product/add']},
    ]},
    
    {label:'Parameters' , path:['/params']},
    /*
    {label:'Auth', children: [
        {label:'Login'   , path:['/login']},
        {label:'Register', path:['/register']},
        {label:'Invite'  , path:['/invite']},
        {label:'Private' , path:['/private']},
        {label:'Public'  , path:['public']},
        {label:'-'},
    ]},*/
];

export const menuOptions:MenuOptions = {
    search: false
};