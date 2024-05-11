import site from './fetch';
import parseDom from './parsedom';

const app = () => {
    console.log('This is the Craigslist JS web scraper');
    console.log(parseDom(site));
}

app();