import { LightningElement } from 'lwc';

export default class Child1 extends LightningElement {
    handleSelect(){
        this.dispatchEvent(new CustomEvent('select1',{
            detail:'Select 1',
            bubbles:true,
            composed:true
        }))
    }



    handleDeSelect(){
        this.dispatchEvent(new CustomEvent('deselect1',{
            detail:'DeSelect 1',
            bubbles:true,
            composed:true
        }))
    }
}