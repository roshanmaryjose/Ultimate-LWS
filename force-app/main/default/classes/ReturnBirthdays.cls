public with sharing class ReturnBirthdays {

  @AuraEnabled(cacheable=true)
  public static List<sobject> birthdayToday(string objectName,string fieldName){
      try {

        string strQuery= 'SELECT name,Id,' + fieldName + ' FROM '+ objectName + ' WHERE Birthdate = today';
        strQuery=string.escapeSingleQuotes(strQuery);
        return Database.Query(strQuery);
     

      } catch (Exception e) {
        system.debug(e.getMessage());
          return null;
         
      }
  }
  @AuraEnabled(cacheable=true)
  public static List<Contact> birthdayComingup(string objectName,string fieldName){
      try {

        string strQuery= 'SELECT name,Id,' + fieldName + ' FROM '+ objectName + ' WHERE Birthdate = this_week AND Birthdate != today AND Birthdate > today';
        strQuery=string.escapeSingleQuotes(strQuery);
        return Database.Query(strQuery);


        // return [SELECT Birthdate, Id, Name
        // FROM Contact
        // WHERE Birthdate = this_week AND Birthdate != today AND Birthdate > today]  ;

      } catch (Exception e) {
        system.debug(e.getMessage());
          return null;
         
      }
  }
}


