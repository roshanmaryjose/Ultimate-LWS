import { LightningElement,api,track } from 'lwc';

export default class CheckboxGroupBasic extends LightningElement {
   @track value = ['option1'];

 options=  [
            { label: 'Ross', value: 'option1' },
            { label: 'Rachel', value: 'option2' },
        ];



    @api selectCheckbox(searchval){
        
        console.log('searchval : ' + searchval)
       let chkbox= this.options.find(item=>item.value===searchval)
       console.log('chkbox : ' + chkbox)
       if (chkbox){

      this.value=[chkbox.value]
      console.log(this.value)
       }

    }

}
