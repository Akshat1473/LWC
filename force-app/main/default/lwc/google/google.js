import { LightningElement, track } from 'lwc';
import getFiles from '@salesforce/apex/GoogleDriveService.getFiles';

export default class google extends LightningElement {
    @track files;

    loadFiles() {
        getFiles()
            .then(result => {
                const data = JSON.parse(result);
                this.files = data.files;
            })
            .catch(error => {
                console.error(error);
            });
    }
}