// types/github.d.ts
export interface GithubUser {
followers:number;
following:number;
bio:string;
avatar_url:string;
location:string;
name:string;
login:string;
public_repos:number

}


export interface GithubRepo {
id: number;
name: string;
full_name: string;
html_url: string;
description?: string | null;
stargazers_count: number;
forks_count: number;
language?: string | null;
}