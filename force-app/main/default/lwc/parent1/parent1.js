import { LightningElement } from 'lwc';

export default class Parent1 extends LightningElement {
    value;
    handleMessage(ram){
        this.value=ram.detail;
    }
}