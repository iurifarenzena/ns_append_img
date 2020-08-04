//message for activating the extension icon
chrome.runtime.sendMessage({"message": "activate_icon"});

var script = document.createElement('script');
script.type = 'text/javascript';
//function injected in the page to handle NetSuite's HTML editor
script.text = "function appendImageTag(imgTag) { getHtmlEditor('html-editor-outgoingmessage').setValue(getHtmlEditor('html-editor-outgoingmessage').value+imgTag,true,true); }";
document.getElementsByTagName('head')[0].appendChild(script);