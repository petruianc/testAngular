import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable(
    { providedIn: 'root'}
)
export class PostService{


    constructor() { }
    
    postList: Array<Post> = [
        {id: 1, postTitle: 'Post 1'},
        {id: 2, postTitle: 'Post 2'},
        {id: 3, postTitle: 'Post 3'},
        {id: 4, postTitle: 'Post 4'},
        {id: 5, postTitle: 'Post 5'},
        {id: 6, postTitle: 'Post 6'},
    ]

    addPost(data:Post){
        this.postList.push(data);
    }
}