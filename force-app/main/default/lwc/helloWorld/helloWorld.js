// recordViewCustomLayout.js
import { LightningElement, api,wire } from 'lwc';
import caseget from '@salesforce/apex/a.caseget';
export default class MyComponent extends LightningElement{
    // Expose a recordId property.
    @api recordId;
    @api objectApiName;
    fields = ['AccountId', 'Name', 'Title', 'Phone', 'Email'];

    @wire(caseget)
    wiredData({ error, data }) {
      if (data) {
        console.log('Data', data);
      } else if (error) {
        console.error('Error:', error);
      }
    }
}