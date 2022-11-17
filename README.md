# Simpleicons Replacer
**Replaces HTML i-Tags with SVG from [simple-icons](https://simpleicons.org/)**
___

Simply and easily replace all the uses of your simple-icons with one line of JavaScript.

After installing the package with
```
npm i @kollektiv-kpunkt/simpleicons-replacer --save
```

simply import the class in your JS File and call the .replace() method.
```
import siReplacer from "@kollektiv-kpunkt/simpleicons-replacer";

const replacer = new siReplacer();
replacer.replace();
```