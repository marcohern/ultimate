import { MenuItem } from "src/app/models/menu-item";

export const topmenu:MenuItem[] = [
    {label:'Inicio'    , path:['/']    },
    {label:'Categoria 1', path:['/grid']},
    {label:'Categoria 2', path:['/grid']},
    {label:'Compañia', path:['/about'], children: [
        {label:'Acerca de...'           , path:['/about']},
        {label:'Mapa del Sitio'         , path:['/sitemap']},
        {label:'Términos y Condiciones' , path:['/terms']},
        {label:'Politicas de Privacidad', path:['/privacy']},
        {label:'Preguntas Frecuentes'   , path:['/faq']},
    ]},
    {label:'Contactenos', path:['/contact']},
    
]; 