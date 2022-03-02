import { LightningElement,wire,track,api } from 'lwc';
import birthdayToday from '@salesforce/apex/ReturnBirthdays.birthdayToday';
import birthdayComingup from '@salesforce/apex/ReturnBirthdays.birthdayComingup';
export default class UpcomingContactBirthdate extends LightningElement {
@api objectName
@api fieldName
@track birthToday
@track birthThisweek



@wire(birthdayToday,{ objectName: '$objectName',fieldName:'$fieldName'})
birthdayToday({ error, data }) {
  if (data) {
    this.birthToday=data
      } else if (error) {
    console.log('Error:', error.body.message);
  }
}


@wire(birthdayComingup,{ objectName: '$objectName',fieldName:'$fieldName'})
birthdayComingup({ error, data }) {
  if (data) {
    this.birthThisweek=data
  } else if (error) {
    console.log('Error:', error.body.message);
  }
}


 columns = [
    { label: 'Name', fieldName: 'Name' }

];

columnsthisweek=[
    { label: 'Name', fieldName: 'Name' },
    { label: 'Birthdate', fieldName: 'Birthdate' ,type : 'Date'}
]





}
