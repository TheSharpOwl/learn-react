# learn-react
Just learning React I guess...

# my cheat sheet:

## CSS
* `div p` means p inside div (space means inside works for classes too as `.first .second`
* `.first.second` means has classes `first` and `second` at the same time
* `.first,.second` means has class `first` or `second` (works for html attribute types too `div, p`)
* we can mix different types of selectors at the same time: `div .first` (div and has a class first) [this works with id too]

### Flex model in CSS:
* Default is `0 1 auto` which are flex-grow, flex-shrink, flex-basis respectively.
* `flex-direction` is `row` by default (horizontal) and it can be made `column` (vertical).
* `justify-content` is on the **main axis** while `align-items` is on the **cross axis**

#### Flex-box cheat-sheet:
![cheat sheet](/css-flexbox-poster.png)

## Javascript

* **Only single quotes** work for embedded expressions in the output:

```js
alert( `the result is ${1 + 2}` ); // the result is 3
alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} DOESN`T WORK
```

## React snippets extension

* `rafc` reactArrowFunctionComponent (will create one with the name of the file) but without export
* `rafce` with export (use this for new files for now I guess?)
* `impt` imports propTypes
