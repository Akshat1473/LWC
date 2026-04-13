import { LightningElement } from 'lwc';

export default class Child2 extends LightningElement {
    handleSelect(){
        this.dispatchEvent(new CustomEvent('select2',{
            detail:'Select 2',
            bubbles:true,
            composed:true
        }))
    }



    handleDeSelect(){
        this.dispatchEvent(new CustomEvent('deselect2',{
            detail:'DeSelect 2',
            bubbles:true,
            composed:true
        }))
    }
}