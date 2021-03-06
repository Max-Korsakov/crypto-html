# Crypto-HTML

`npm i crypto-html`

Simple library that envelop native HTML `<input>`, `<select>` and `<textarea>` elements to encrypt its value.
It can prevent js injection data theft ot HTTP 'man-in-the-middle' attack.

`document.getElementById('input').value` will return encrypted value

Library use [JSEncrypt](https://www.npmjs.com/package/jsencrypt) library for asymmetric encryption.
Read more about private and public keys on their page.


## Usage

Provide native tag with 'is' attribute.

- input    `<input is='encrypted-input'>`
- select   `<select is='encrypted-select'> </select>`
- textarea `<textarea is='encrypted-textarea'> </textarea>`


```javascript
// index.html
<head>
    <script type="text/javascript" src="./node_modules/crypto-html/index.js"></script>
</head>
<body>
    <script>
        const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
                                MY PUBLIC KEY 
                            -----END PUBLIC KEY-----`

        CryptoHTML(PUBLIC_KEY)
    </script>

    <input id="input" is='encrypted-input'>
</body>
```

```javascript
// index.html
<body>
    <script src="./init-crypto.js"></script>
    <input id="input" is='encrypted-input'>
</body>
```


```javascript
// JS  init-crypto.js
const crypto = require('crypto-html')

const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
                        MY PUBLIC KEY 
                    -----END PUBLIC KEY-----`
crypto.CryptoHTML(PUBLIC_KEY)
```

## Decrypting 

You can decrypt value of your input on the server side. Crypto-HTML use [JSEncrypt](https://www.npmjs.com/package/jsencrypt) library for asymmetric encryption.
You can study more about this library [here](http://travistidwell.com/jsencrypt/)

So to use it with NodeJS server you need install it.

`npm i jsencrypt`

then implement decryption as described on their page

```javascript
// JS 
const jsencrypt = require('jsencrypt')

const PRIVATE_KEY = `-----BEGIN RSA PRIVATE KEY-----
                        MY PRIVATE KEY 
                    -----END RSA PRIVATE KEY-----`
const decrypt = new jsencrypt.JSEncrypt();
decrypt.setPrivateKey(PRIVATE_KEY)

// implement getting of encrypted valye from client side

const uncrypted = decrypt.decrypt(encryptedValue)
```
