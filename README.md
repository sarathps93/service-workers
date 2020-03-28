# service-workers
A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction.
It supports offline access and today they already support features like `push notifications` and `background sync`.

## Things to note
1. It is a javaScript worker, so it cannot access DOM directly. It can interact with the pages it controls by using postMessage interface.
2. It is also a programmable network proxy allowing you to control how your network requests are handled

## Important
Because of it's ability to tamper with network requests, for Service Workers to work it is essential that your site needs to be served over https inorder to control any man in the middle attacks.

For more information regarding service workers, please take a read at `https://developers.google.com/web/fundamentals/primers/service-workers`