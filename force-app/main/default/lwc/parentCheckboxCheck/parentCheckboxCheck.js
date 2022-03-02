import { LightningElement,track } from 'lwc';
export default class ParentCheckboxCheck extends LightningElement {

@track searchVal=""

handlerAssignSearchValue(ev)
{
console.log('searchval before assigning in parent ' + this.searchVal )
console.log('ev.target.value before assigning in parent ' + ev.target.value )
this.searchVal=ev.target.value
console.log('searchval after assigning in parent ' + this.searchVal )
}

handlerSearchValue(ev){
const childComponent = this.template.querySelector('c-child-checkboxgroup');
childComponent.selectCheckbox(this.searchVal);
console.log(childComponent.selectCheckbox(this.searchVal));
}

}