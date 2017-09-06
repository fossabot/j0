# N

Think outside the HTML.
What you need is a DOM tree, not a HTML markup.
HTML is just one of many solutions.

## Example

```html
<button class="Button" id="button">
  <span class="Icon Icon-Check"></span>
  Submit
</button>
<script>
  document.getElementyId('button')
  .addEventListener('click', function () {
    console.log('clicked!');
  });
</script>
```

↓↓↓↓

```javascript
const button = new N({
  t: 'button',
  a: [
    ['class', 'Button']
  ],
  c: [
    {
      t: 'span',
      a: [
        ['class', 'Icon', 'Icon-Check']
      ]
    },
    'Submit'
  ],
  e: [
    ['click', function () {
      console.log('clicked!');
    }]
  ]
});
```
or
```javascript
const button = new N({
  t: 'button',
  a: [
    ['class', 'Button']
  ],
  e: [
    ['click', function () {
      console.log('clicked!');
    }]
  ]
})
.append(
  {
    t: 'span',
    a: [
      ['class', 'Icon', 'Icon-Check']
    ]
  },
  'Submit'
);
```
