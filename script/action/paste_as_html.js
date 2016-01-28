/*
 * paste_as_html.js
 * 
 * 改行をbrタグに変換し、pタグでwrapして返す
 */

var text = clipText.replace(/[\n\r]/g, '<br />\n');
text = '<p>\n' + text + '\n</p>';

return text;
