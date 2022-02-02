'use strict';

import * as DOM from "./dom.js";

let changeText = (str) => DOM.pageParagraph.innerHTML = `${str}`;

DOM.pageH1.innerHTML = `<h1> This is working!<h1>`;
DOM.pageButton.onclick = () => changeText(DOM.pageInput.value);