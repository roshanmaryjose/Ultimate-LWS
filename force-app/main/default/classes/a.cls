public with sharing class a {
   

@AuraEnabled(cacheable=true)
public static List<Case> caseget(){
    try {

        List<Case> caselist=new List<Case>();
        caselist=[SELECT Id, CaseNumber, Subject, Status FROM Case LIMIT 50];
        return caselist;
        
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
}
}