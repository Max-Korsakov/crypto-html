const jse = require('jsencrypt');

function getInput(key) {
    class EncriptedHTMLInputElement extends HTMLInputElement {
        encrypt
        set value(inpVal) {
            super.value = inpVal;
        }

        get value() {
            return this.encrypt.encrypt(super.value)
        }
        constructor() {
            super();
            if (!key) {
                throw new Error(`PUBLIC_KEY was not provided.Please provide PUBLIC_KEY with calling CryptoHTML(PUBLIC_KEY)`)
            }
            this.encrypt = new jse.JSEncrypt();
            this.encrypt.setPublicKey(key)
        }
    }

    return EncriptedHTMLInputElement
}



module.exports = getInput



