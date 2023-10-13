import { Component , OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
import {  NgForm, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
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

  }

  // onSubmit(f: NgForm){
  //   console.log(f);
  // }

  getValue(f:any){
    console.log(f);
  }

  form : any;
 
  emailRegex: string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
  contactRegex: string = "[0040][0-9]{9}"

  onSubmit(){
    const value = this.form.value;
    console.log(value);
  }
  

  constructor(){
     
    this.form = new FormGroup({
      
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]),
      
      email: new FormControl('', [
        Validators.required,
        //Validators.pattern(this.emailRegex)
        Validators.email
      ]),
      
      contactDetails: new FormGroup({
        address: new FormControl('', Validators.required),
        shippingAddress: new FormControl('', Validators.required),
        contactNumber: new FormControl('', [
          Validators.required,
          Validators.pattern(this.contactRegex)
        ])
      })
     
    });
     
    }

    get contactDetails() {
      return this.form.get('contactDetails');
   }

   get Address(){
    return this.form.get('contactDetails.address');
   }
   

}
