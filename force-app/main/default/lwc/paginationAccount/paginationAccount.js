import { LightningElement,wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountFetch.getAccount';

const column=[
    {label:"Name",fieldName:"Name"},
    {label:"Industry",fieldName:"Industry"},
    {label:"Id",fieldName:"Id"},

]

export default class PaginationAccount extends LightningElement {
    data=[];
    showData=[];
    column=column;

     start=0;
    pageSize=20;
    current =1;
    totalPage=0;

    connectedCallback(){
        getAccount()
            .then((data)=>{
                this.data = data;
                this.totalPage=Math.ceil(data.length/this.pageSize);
                this.handleData();
            })
            .catch((error)=>{console.log(error)})
    }
    
    
   
    
    handleData(){
        this.start =(this.current-1)*this.pageSize;
        this.end=this.start+this.pageSize;
        this.showData=this.data.slice(this.start,this.end);
    }
    
    handleNext(){
        if(this.current < this.totalPage){
            this.current++;
        this.handleData();
        }
        
    }

    handlePrevious(){
        if(this.current > 1){
            this.current--;
        this.handleData();
        }
        
    }


}