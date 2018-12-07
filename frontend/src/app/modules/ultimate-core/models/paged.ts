export class Paged<T> {
    current_page:number;
    last_page:number;
    data:T[];
    from:number;
    to:number;
    path:string;
    first_page_url:string;
    last_page_url:string;
    next_page_url:string;
    prev_page_url:string;
}
