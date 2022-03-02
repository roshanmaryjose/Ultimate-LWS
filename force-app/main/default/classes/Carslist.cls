public with sharing class Carslist {

    @AuraEnabled(cacheable=true)
    public static list<Car__c> carlist(String cartypeid){
        try {
// testing
            if(string.isEmpty(cartypeid))
                {return([SELECT
                Id,
                Picture__c
            FROM
                Car__c ]);
                }
            else {

                {return([SELECT
                    Id,
                    Picture__c
                FROM
                    Car__c where Car_Type__c =: cartypeid]);
                    }
                
            }

        
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
