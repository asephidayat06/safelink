var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input .length="" chr1="input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1" />&gt;2;enc2=((chr1&amp;3)&lt;<4 chr2="">&gt;4);enc3=((chr2&amp;15)&lt;<2 chr3="">&gt;6);enc4=chr3&amp;63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;} 
 output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);} 
 return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input .length="" enc1="this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1&lt;&lt;2)|(enc2" />&gt;4);chr2=((enc2&amp;15)&lt;<4 enc3="">&gt;2);chr3=((enc3&amp;3)&lt;<6 c="" chr1="" chr2="" chr3="" else="" enc3="" enc4="" for="" if="" n="0;n&lt;string.length;n++){var" output="" string.fromcharcode="" string="string.replace(/\r\n/g," utf8_encode:function="" utftext="" var="">127)&amp;&amp;(c<2048 c="" tring.fromcharcode="" utftext="">&gt;6)|192);utftext+=String.fromCharCode((c&amp;63)|128);} 
 else{utftext+=String.fromCharCode((c&gt;&gt;12)|224);utftext+=String.fromCharCode(((c&gt;&gt;6)&amp;63)|128);utftext+=String.fromCharCode((c&amp;63)|128);}} 
 return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext .length="" c="" else="" if="">191)&amp;&amp;(c<224 1="" 2="" a="" a_to_fa="" a_to_va="" a_to_vb="" a_to_vc="" a_to_vd="" a_to_ve="" a_to_vf="" a_to_vg="0;a_to_ve=document.getElementsByTagName(" a_to_vh="=false)" a_to_vi="a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match(" a_to_vj.innerhtml="" a_to_vj="" a_to_vk.innerhtml="" a_to_vk="" anonyminized="" array="" auto_safeconvert="" auto_safelink="" c2="" c3="" c="" code="" decode="" else="" encode="" encryptedurl="Base64.encode(a_to_vi);a_to_ve[i].href=" for="" found_links="" function="" href="" http="" i="" if="" input="" j="" n="" nofollow="" output="" protected_links.match="" protected_links="protected_links.replace(" return="" string="" tring.fromcharcode="" url="+ encryptedUrl;a_to_ve[i].rel=" user_id="" var="">
