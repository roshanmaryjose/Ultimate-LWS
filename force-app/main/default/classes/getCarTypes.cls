public with sharing class getCarTypes {

@AuraEnabled(cacheable =true)
public static list<Car_Type__c> getTypes(){

    list<Car_Type__c> types= new list<Car_Type__c>();
    try {
        
        types=[SELECT
        Name,
        Id
    FROM
        Car_Type__c];
        return types;

    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
}
}
