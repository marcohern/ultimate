import { MenuItem } from "src/app/models/menu-item";

export const topmenu:MenuItem[] = [
    {label:'Inicio'    , path:['/']    },
    {label:'Productos' , path:['/grid']},
    {label:'Como Comprar' , path:['/']},
    {label:'Nosotros'  , path:['/about'], children: [
        {label:'Acerca de...'   , path:['/about']},
        {label:'Mapa del Sitio' , path:['/sitemap']},
        {label:'Términos...'    , path:['/terms']},
        {label:'Privacidad...'  , path:['/privacy']},
        {label:'Preguntas Frec.', path:['/faq']},
    ]},
    {label:'Contactenos', path:['/contact']},
];

export const companymenu:MenuItem[] = topmenu[3].children; 