const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const parseDom = text => {
    const dom = new JSDOM(text);
    const doc = dom.window.document;
    return doc;
}

export default parseDom;