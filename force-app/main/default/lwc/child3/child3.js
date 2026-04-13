import { LightningElement } from 'lwc';

export default class Child3 extends LightningElement {
     handleSelect3(){
        this.dispatchEvent(new CustomEvent('select3',{
            detail:'Select 3',
            bubbles:true,
            composed:true
        }))
    }



    handleDeSelect3(){
        this.dispatchEvent(new CustomEvent('deselect3',{
            detail:'DeSelect 3',
            bubbles:true,
            composed:true
        }))
    }
}