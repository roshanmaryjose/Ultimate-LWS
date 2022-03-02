import { LightningElement,api,wire,track } from 'lwc';
import returnAddress from '@salesforce/apex/ReturnShippingAddress.returnAddress';
export default class LightningMapExample extends LightningElement {

@api recType
@track mapMarkers=[]

//Id,Name,ShippingAddress, , ShippingState, ShippingStreet, , 

    @wire(returnAddress, { recType: '$recType' })
    wiredData({ error, data }) {
      if (data) {

        data.forEach(element => {
            
            const addr={}
            const loc={}
            if (element.ShippingCity!=null)
            {loc.City=element.ShippingCity}
            else
            {loc.City=""}
            if (element.ShippingCountry!=null)
            {loc.Country=element.ShippingCountry}
            else
            {loc.Country=""}
            if (element.ShippingPostalCode!=null)
            {loc.PostalCode=element.ShippingPostalCode}
            else
            {loc.PostalCode=""}
            if (element.ShippingState!=null)
            {loc.State=element.ShippingState}
            else
            {loc.State=""}
            if (element.ShippingStreet!=null)
            {loc.Street=element.ShippingStreet}
            else
            {loc.Street=""}
            if(loc){addr.location=loc}
            if (element.Id!=null)
            {addr.value=element.Id}
            else
            {addr.value=""}
            if (element.Name!=null)
            {addr.title=element.Name}
            else
            {addr.title=""}
            this.mapMarkers.push(addr)
        });
        this.mapMarkers=JSON.parse(JSON.stringify(this.mapMarkers))
     console.log(JSON.parse(JSON.stringify(this.mapMarkers)))
      } else if (error) {
         console.error('Error:', error);
      }
    }
    
}

// import { LightningElement,api,track } from 'lwc';
// export default class LightningMapExample extends LightningElement {

// @api recType='RT1'
// @track mapMarkers=[{location: {City: 'Cedar Park', Country: 'TX', PostalCode: '78641', State: '', Street: '14420 Ronald Reagan Blvd'},
// title: "test1",
// value: "0011D000016YAGUQA4",
// type: 'Circle',
// radius: 200,
//             strokeColor: '#FFF000',
//             strokeOpacity: 0.8,
//             strokeWeight: 2,
//             fillColor: '#FFF000',
//             fillOpacity: 0.35}]

// }