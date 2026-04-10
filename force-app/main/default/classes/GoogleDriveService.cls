public with sharing class GoogleDriveService {

    @AuraEnabled(cacheable=true)
    public static String getFiles() {
        Http http = new Http();
        HttpRequest req = new HttpRequest();

        req.setEndpoint('callout:GoogleDriverapi/drive/v3/files');
        req.setMethod('GET');

        HttpResponse res = http.send(req);

        if (res.getStatusCode() == 200) {
            System.debug(req.getBody());
            return res.getBody();
        } else {
            throw new AuraHandledException('Error: ' + res.getBody());
        }
    }
}