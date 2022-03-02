import { LightningElement,wire,track,api} from 'lwc';
import carlist from '@salesforce/apex/Carslist.carlist';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CarsSearchResult extends LightningElement {

    
@api selected;
@track cars=null
@wire(carlist, { cartypeid: '$selected' })
wiredData({ error, data }) {
    if (data) {
        this.cars=data;
  } else if (error) {
         this.dispatchEvent(new ShowToastEvent({
             title: 'Error',
             message: error.body.message,
             variant: 'error'
         }));
  }
}


}