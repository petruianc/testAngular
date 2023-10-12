import { Component , OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
import { FormControl, NgForm } from '@angular/forms';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})

export class PostComponent implements OnInit{
  
  title:string = "List of posts!";
  messageFromPostParent:string = "Message from post component(parent)";
  
  childMessage:string="From child component Post";

  outputChildMessage:string="Message from child via Output decorator";

  @Output() messageEvent=new EventEmitter<string>();

  @Input()
  fromParent!: string;


  posts:Array<any>;
  constructor(private postService: PostService){
     this.posts= postService.postList;
  }

  ngOnInit(): void {
    console.log('post component ngOnInit() not implemented!');
  }

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
  }

  addNewData(){
    let newPost: Post = {
      id: 7, postTitle: 'Post 7'
    };

    this.postService.addPost(newPost);
  }

  onSubmit(f: NgForm){
    console.log(f);
  }

  getValue(f:any){
    console.log(f);
  }

}
