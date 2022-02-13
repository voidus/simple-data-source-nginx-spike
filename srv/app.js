const h1 = document.createElement('h1');
h1.innerText = 'App is w0rking';

const pre = document.createElement('pre');
pre.innerText = JSON.stringify(window.seawatch_status_data, null, 4);

document.querySelector('body').replaceChildren(h1, pre)
