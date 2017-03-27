import polyfillSymbol from '../Symbol/polyfill';
import polyfillArray from '../Array/polyfill';
import polyfillObject from '../Object/polyfill';
import polyfillString from '../String/polyfill';
import polyfillPromise from '../Promise/polyfill';
import window from '../window';

window.global = window;
polyfillSymbol();
polyfillObject();
polyfillArray();
polyfillString();
polyfillPromise();
