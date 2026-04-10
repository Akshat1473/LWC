public with sharing class AccountFetch {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){
        try {
            return [SELECT Id,Name,Industry FROM Account];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}