//message for activating the extension icon
chrome.runtime.sendMessage({"message": "activate_icon"});

var script = document.createElement('script');
script.type = 'text/javascript';
//function injected in the page to handle NetSuite's HTML editor
script.text = `
    function appendImageTag(imgTag) {
        var leditor = getHtmlEditor('html-editor-outgoingmessage');
        leditor.setValue(leditor.value+imgTag,true,true);
    }
    
    function setEditorFocus() {
        var doc = document.getElementById('html-editor-container-outgoingmessage').getElementsByTagName('iframe')[0].contentDocument;
        var lbody = doc.getElementsByTagName('body')[0];
        var editableDiv = lbody.children[0];
        var range = doc.createRange();
        var sel = doc.getSelection();
        range.selectNodeContents(editableDiv);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
        lbody.focus();
    }`;

document.getElementsByTagName('head')[0].appendChild(script);