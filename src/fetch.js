const location = 'worcester'
const url = '.craigslist.org/search/sss#search=1~list~0~0'
let site;

(async () => {
    site = await fetch('https://' + location + url)
          .then(res => res.text())
          .then(text => text)
          .catch(err => console.log('Failed page fetch: ' + err));
})();

export default site;