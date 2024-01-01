chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
 if(Array.isArray(request.data)){

    let listofurls = request.data;

    listofurls.forEach(URL => {

        chrome.tabs.create({url:URL})             

    })

 }else{


    let oneurl = request.data;
    chrome.tabs.create({url:oneurl})
    

 }

  // To enable sendResponse asynchronously, return true from the listener
  return true;
});


