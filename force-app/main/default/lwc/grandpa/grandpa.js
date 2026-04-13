import { LightningElement } from 'lwc';

export default class Grandpa extends LightningElement {
    countSelect=0;
    countDeSelect=0;
    handleinc(){
        this.countSelect++;
    }

    handleDec(){
        this.countDeSelect++;
    }

    handleReset(){
        this.countSelect=0;
        this.countDeSelect=0;
    }
}