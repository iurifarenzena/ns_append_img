'use strict';

function embedImage(e) {
  var urlFieldInput = document.getElementById('nsimg-url').value;
  if (urlFieldInput) {
    urlFieldInput.split(/,|;/).forEach(imgUrl => {
      chrome.tabs.executeScript(null, {
        code: getappendImageScriptCode(getImgTag(imgUrl.trim()))
      });
    });

    chrome.tabs.executeScript(null, {
      code: getsetFocusScriptCode()
    });
  }
  window.close();

  function getappendImageScriptCode(imgTag) {
    return "location.href=\"javascript:appendImageTag('" + imgTag + "'); void 0\";";
  }

  function getsetFocusScriptCode() {
    return "location.href=\"javascript:setEditorFocus(); void 0\";";
  }

  function getImgTag(imgUrl) {
    return '<br><img src=' + escapeUrl(imgUrl) + '/><br><font size=\\\"1\\\">[se a imagem acima n&atilde;o carregar, clique no link:&nbsp;<a href=' + escapeUrl(imgUrl) + '>' + imgUrl + '</a>]</font>';
  }

  function escapeUrl(imgUrl) {
    return '\\\"' + imgUrl.trim() + '\\\"';
  }
}

//setup the popup form for user interaction
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('nsimg-btnAdd');
  btn.addEventListener('click', embedImage);
  document.getElementById('nsimg-url').focus();
});
