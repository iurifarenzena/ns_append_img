'use strict';

function embedImage(e) {
  var urlFieldInput = document.getElementById('nsimg-url').value;
  if (urlFieldInput) {
    urlFieldInput.split(/,|;/).forEach(imgUrl => {
      chrome.tabs.executeScript(null, {
        code: getScriptCode(getImgTag(imgUrl))
      });
    });
  }
  window.close();

  function getScriptCode(imgTag) {
    return "location.href=\"javascript:appendImageTag('" + imgTag + "'); void 0\";";
  }

  function getImgTag(imgUrl) {
    return '<br><img src=\\\"' + imgUrl.trim() + '\\\" alt=\\\"' + imgUrl.trim() + '\\\"/>';
  }
}

//setup the popup form for user interaction
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('nsimg-btnAdd');
  btn.addEventListener('click', embedImage);
  document.getElementById('nsimg-url').focus();
});
