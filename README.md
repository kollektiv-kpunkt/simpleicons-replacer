# Simpleicons Replacer
**Replaces HTML i-Tags with SVG from [simple-icons](https://simpleicons.org/)**
<br>
<br>

Simply and easily replace all the uses of your simple-icons (over **2'400 available brand icons**) with one line of JavaScript.

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

This method will replace all i-Tags with the data-si attributes in your html.

<br>
<br>

## Examples

```
<i data-si="facebook"></i>
```
Returns:
<div style="width: 100px; background: white; padding: 1rem">
    <img src="https://simpleicons.org/icons/facebook.svg">
</div>

<br>
<br>

```
<i data-si="signal"></i>
```
Returns:
<div style="width: 100px; background: white; padding: 1rem">
    <img src="https://simpleicons.org/icons/signal.svg">
</div>

<br>
<br>

```
<i data-si="threema"></i>
```
Returns:
<div style="width: 100px; background: white; padding: 1rem">
    <img src="https://simpleicons.org/icons/threema.svg">
</div>

<br>

Find the entire iconset at [simpleicons.org](https://simpleicons.org/)
<br>
<br>

## Styles

The following styles applied to the i-Tag will be copied to the SVG:
- Display (default: "inline-block")
- Color (will be applied as fill; default "currentcolor")
- Width (default: 1rem)
- Height (default: 1rem)

