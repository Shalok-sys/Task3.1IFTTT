function doPost(e) {
    var data = JSON.parse(e.postData.contents);
    var lsval = JSON.stringify(data.values[0].value);

    var message = "";
    if(lsval <= 10){
      message = "Your Terrarium is not getting sunlight";
      MailApp.sendEmail("gmsss.shalok30@gmail.com","Terrarium Update!", message);
    }
    if(lsval>10){
      message = "Your Terrarium is now getting sunlight";
      MailApp.sendEmail("gmsss.shalok30@gmail.com","Terrarium Update!", message);
    }
}

function doGet(){
  return ContentService.createTextOutput('I just successfully handled your GET request. So what next.');
}

function testDoPost() {
    var testData = "{\"event_id\": \"24391b55-ab71-5346-b09e-9816719036c3\", \"webhook_id\": \"t:8ec44812-11b6-42f8-b3e1-c01f125ba598\", \"device_id\": \"73077de6-a19e-4596-b262-cfe450106bce\", \"thing_id\": \"8ec44812-11b6-42f8-b3e1-c01f125ba598\", \"values\": [{\"id\": \"bd09e899-6cc9-4db6-ae95-ceff764ef27b\", \"name\": \"light_intensity\", \"value\": 11.666666984558105, \"persist\": true, \"updated_at\": \"2024-08-27T16:49:39.577Z\", \"created_by\": \"73077de6-a19e-4596-b262-cfe450106bce\"}]}";
    var testDataObj = JSON.parse(testData); 
    var lsval = testDataObj.values[0].value; 
    MailApp.sendEmail("shalok4813.be23@chitkara.edu.in","Good to see you", lsval);
    console.log(lsval); 
}
