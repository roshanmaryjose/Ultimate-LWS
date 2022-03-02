import { LightningElement, track,api,wire } from 'lwc';
import getFiles from '@salesforce/apex/Returnfiles.getFiles';
export default class ImageDisplay extends LightningElement {
      
    @api fields
    @api recordId
    @track fld
    @track docs=[]
    @track temp=[]
    @track datapresent=false

    connectedCallback() {
       this.fld=this.fields.split(',')
    }

    @wire(getFiles, { recordId:'$recordId' ,arfields:'$fld'})
    wiredData({ error, data }) {
      var ins=''
      var modobj={}
      
      if (data) {

        if(data.length >0)
        {
          this.datapresent= true
        }
          this.temp=data
          for (let obj of this.temp) {
            
           
            for(const objchild of obj.ContentVersions)
            {
              
              ins = '/sfc/servlet.shepherd/version/download/' +objchild.Id;
              
            }  
            
            modobj={...obj,imgsource:ins}
            this.docs.push(modobj)
              
          }
         

         console.log('Docs', this.docs);
      } else if (error) {
         console.error('Error:', error);
      }
    }

    
  
}