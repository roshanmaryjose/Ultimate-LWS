import { LightningElement, wire,track } from 'lwc';
import getcartypes from '@salesforce/apex/getCarTypes.getTypes';
import { NavigationMixin } from 'lightning/navigation';
export default class CarsViewParent extends NavigationMixin(LightningElement) {

@track options;
@track selected;

@wire(getcartypes)
wiredData({ error, data }) {
  if (data) {
      this.options=[{value:'',label:'All types'}]
   data.forEach(ele => {

    const tempob={};
    tempob.label=ele.Name;
    tempob.value=ele.Id;
     this.options.push(tempob);
   });


  } else if (error) {
    console.error('Error:', error);
  }
}



handleChange(eve)
{
this.selected=eve.detail.value
const event = new CustomEvent('selectionOftype', {
    detail:this.selected});
this.dispatchEvent(event);
}

handleClick(){

this[NavigationMixin.Navigate]({
    type: 'standard__objectPage',
    attributes: {
        actionName: 'new',
        objectApiName: 'Car_Type__c'
    }
});
}

}