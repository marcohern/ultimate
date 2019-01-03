import { MenuItem } from "@marcohern/ultimate-core/lib/models/menu-item";
import { MenuOptions } from "@marcohern/ultimate-core/lib/models/menu-options";

export const menu:MenuItem[] = [
    {label:'Inicio'    , path:['/']},
    {label:'Usuarios'  , children:[
        {label:'Lista' , path:['/users'       ], query:{page:1} },
        {label:'Nuevos', path:['/users/create'] },
    ]},
    {label:'Productos' , children:[
        {label:'Lista' , path:['/products']},
        {label:'Nuevos', path:['/product/add']},
    ]},
    {label:'Parametros' , path:['/params']},
    {label:'Contenido' , path:['/pages']},
];

export const menuOptions:MenuOptions = {
    search: false
};