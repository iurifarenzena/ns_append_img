# Append Image For NetSuite Case

## The URL

For the extension to work your NetSuite case URL in edit mode must match the following pattern: `"*://*.app.netsuite.com/app/crm/support/supportcase*T"`

For example, a valid URL would be: `https://1234567.app.netsuite.com/app/crm/support/supportcase.nl?id=123456&e=T`

## Usage

Let's say you have to replay your customer on a NetSuite support case and you want to include an image to make your point clear.

By using **Append Image For NetSuite Case** extension you can easily do that. You'll just need an URL for the image an the extension will do the rest.

1. Click the extension button on your browser bar
2. Paste the URL for the image you want to attach
3. Click Add
![box with a image URL](https://i.imgur.com/Qxei3Mr.png)
4. you will see that the image has been included in you case's Reply field
![result](https://i.imgur.com/HB80JFS.png)

## What it does

If you inspect the HTML code generated you will notice the following tags  added for each image link:

`<br><img src="[imgURL]" alt="[imgURL]">`

![html source](https://i.imgur.com/wPBeayj.png)

## Extension contents

### ***contentscript.js***

Contains a message for activating the extension icon and the function injected in the page to handle NetSuite's HTML editor.

### ***background.js***

Handles the message sent by the page for activating the extension icon.

### ***popup.js***

Sets up the popup form for user interaction and handle its input to generate the correct image tag and call the injected function to change the HTML editor's value.