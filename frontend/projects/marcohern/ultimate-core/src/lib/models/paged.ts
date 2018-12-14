export class Paged<T> {
    current_page:number = 1;
    last_page:number = 1;
    per_page:number = 50;
    total:number = 0;
    data:T[] = [];
    from:number = 1;
    to:number = 1;
    path:string = '';
    first_page_url:string = '';
    last_page_url:string = '';
    next_page_url:string = '';
    prev_page_url:string = '';
}