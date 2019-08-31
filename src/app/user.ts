export class User {
    constructor(public login:string,
        public name:string,
        public avatar_url:string,
        public public_repos:number,
        public html_url: string,
        public created_at:Date)
        {}
}
