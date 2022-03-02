public with sharing class ReturnShippingAddress {
    public ReturnShippingAddress() {

    }
    @AuraEnabled(cacheable=true)
    public static list<sobject> returnAddress(string recType){
        try {

            if( recType=='None')
            {
                return [ SELECT Id,Name,ShippingAddress, ShippingPostalCode, ShippingState, ShippingStreet, ShippingCountry, ShippingCity  FROM Account where recordtype.name=null];
            } 
            else
             {
                return [ SELECT Id,Name,ShippingAddress, ShippingPostalCode, ShippingState, ShippingStreet, ShippingCountry, ShippingCity  FROM Account where recordtype.name=:recType];
          
            }

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
