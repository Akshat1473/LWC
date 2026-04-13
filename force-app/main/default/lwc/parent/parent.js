import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    status1
    status2
    status3

    showStatusSelect1(event){
        this.status1 = event.detail;
    }

    showStatusDeselect1(event){
        this.status1 =event.detail;
    }

    showStatusSelect2(event){
        this.status2 = event.detail;
    }

    showStatusDeselect2(event){
        this.status2 =event.detail;
    }

    showStatusSelect3(event){
        this.status3 = event.detail;
    }

    showStatusDeselect3(event){
        this.status3 =event.detail;
    }
}