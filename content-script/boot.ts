import * as _ from 'lodash';
import * as axios from 'axios';
import * as $ from 'jquery';

import { ConnectListener } from './connect-listener';
import { RuntimeListener } from './runtime-listener';

const test = 'asdf';
const xxx = _.includes(test, 'aaa');

console.log(test);
console.log(xxx);

$( 'h1' ).css( 'border', '9px solid red' );

axios.default.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

console.log('content script!');
const runtimeListener = new RuntimeListener();
