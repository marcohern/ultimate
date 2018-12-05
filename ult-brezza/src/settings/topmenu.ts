import { MenuItem } from "src/app/models/menu-item";

export const topmenu:MenuItem[] = [
    {label:'Home'    , path:['/']    },
    {label:'Category 1', path:['/grid']},
    {label:'Category 2', path:['/grid']},
    {label:'Company', path:['/about'], children: [
        {label:'About'   , path:['/about']},
        {label:'Terms'   , path:['/terms']},
        {label:'Privacy' , path:['/privacy']},
        {label:'FAQ'     , path:['/faq']},
    ]},
    {label:'Contact Us', path:['/contact']},
    
]; 