chrome.runtime.sendMessage({todo: "showPageAction"});
chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse){
    if (request.todo == "sendConnect"){
        var connection = document
    .querySelectorAll(
    '.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view');

    let count = 0;
    
    for(var i = 0; i < connection.length; i = i + 1){

        var time = Math.floor(Math.random() * 10000); 

        await new Promise(r => setTimeout(r, time));
        var abc = connection[i].querySelectorAll("span")[0].innerHTML;
        abc = abc.replace(/\s+/g, '');
        if(abc.localeCompare("Connect") == 0){
            count++;
            chrome.runtime.sendMessage({todo: "updateCount", count: count });
            connection[i].click();
            await new Promise(r => setTimeout(r, 2000));
            var sendButton = document.querySelectorAll(".artdeco-button.artdeco-button--2.artdeco-button--primary.ember-view.ml1");
            sendButton[0].click();
        }

    }

    chrome.runtime.sendMessage({todo: "done"});
    
    }
});

