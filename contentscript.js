chrome.runtime.sendMessage({"message": "activate_icon"});
var script = document.createElement('script');
script.type = 'text/javascript';
script.text = "function appendImageTag(imgTag) { getHtmlEditor('html-editor-outgoingmessage').setValue(getHtmlEditor('html-editor-outgoingmessage').value+imgTag,true,true); }";
document.getElementsByTagName('head')[0].appendChild(script);