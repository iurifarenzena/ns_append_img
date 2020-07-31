'use strict';

function embedImage(e) {
  var urlFieldInput = document.getElementById('nsimg-url').value;
  if (urlFieldInput) {
    urlFieldInput.split(/,|;/).forEach(imgUrl => {
      var imgTag = '<br><img src=\\\"' + imgUrl.trim() + '\\\" alt=\\\"' + imgUrl.trim() + '\\\"/>';
      chrome.tabs.executeScript(null, {
        code: "location.href=\"javascript:appendImageTag('" + imgTag + "'); void 0\";"
      });
    });
  }
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('nsimg-btnAdd');
  btn.addEventListener('click', embedImage);
  document.getElementById('nsimg-url').focus();
});
