const input = require('./input')
const select = require('./select')
const textarea = require('./textarea')

const CryptoHTML = (publicKey) =>{
    const inp = input(publicKey)
    const sel = select(publicKey)
    const text = textarea(publicKey)
    customElements.define('encrypted-input', inp, { extends: 'input' });
    customElements.define('encrypted-select', sel, { extends: 'select' });
    customElements.define('encrypted-textarea', text, { extends: 'textarea' });
}

module.exports = CryptoHTML;
