import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{
  title = 'AngIntro';
  parentMessage:string = "Message comming from AppComponent(parent)";
  messageFromChildComponent:string | undefined;

  bool:boolean=false;

  userName: string = 'This is two way data binding!';
  
  imageUrl:string='https://upload.wikimedia.org/wikipedia/commons/7/77/Blausen_0817_SmallIntestine_Anatomy.png';

  imageSource!:string;
  
  @ViewChild(PostComponent) childComp: any;

  constructor(){
    for(let i = 0; i<this.postArray.length; i++){
        console.log(this.postArray[i]);
    }
  }
  
  ngAfterViewInit(): void {
    
  }

  receiveMessage($event: any){
    console.log($event);
    this.messageFromChildComponent = $event;
  }

  buttonClick(){

  }

  onKeyUp(username:string){
    console.log(username);
  }
  
  onEvent(userName:string){
    this.userName = userName;
    console.log(this.userName);
  }

  onImage(imageSource:string){
    this.imageSource = imageSource;
  }

  id:number | undefined;
  postTitle:string | undefined;

  postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4'];
  objArray: Array<any> = [];

  addNewPost(){
    this.objArray.push({id:this.id, postTitle: this.postTitle});
    this.id = undefined;
    this.postTitle = undefined;
  }

  onDelete(i:number){
    this.objArray.splice(i, 1);
  }

  stepForm: string | undefined;
  isActive: boolean = true;;

  onClick(_status: any){
    this.stepForm = _status;
  }
  
}


