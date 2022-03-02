public with sharing class Returnfiles {

    @AuraEnabled(cacheable=true)
    public static List<SObject> getFiles(string recordId,list<string> arfields){
        try {                                    
                    
                  
                    list<contentdocument> allDocs=new list<contentdocument>();
                      for(ContentDocumentLink contdoclink :[SELECT ContentDocumentId FROM ContentDocumentLink WHERE LinkedEntityId =:recordId])
                    { 
                      string strfields = string.join(arfields,',');                                         
                      system.debug(strfields);
                      string strQuery= 'SELECT id,' + strfields +', (SELECT ContentVersion.Id FROM contentdocument.ContentVersions) FROM contentdocument WHERE Id = \''+contdoclink.ContentDocumentId+'\' WITH SECURITY_ENFORCED' ;
                     system.debug(strQuery);
                      contentdocument doc =Database.Query(strQuery);
                        
                     alldocs.add(doc);
                            
                    }
                    
                    return alldocs;
            
                    
                
            


        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}

