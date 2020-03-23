## Jest Axe package
This is a jest axe package

## Installation
```
npm i -D @rakoon-badshah/my-axe
```

## usage 

```
const {
  toHaveNoViolations,
  axe
} = require('./../axe');

expect.extend(toHaveNoViolations);
it('should demonstrate this matcher`s usage with a default config', async () => {
  const render = () => `
    <div>
      <img src="#"/>
    </div>
  `
  // pass anything that outputs html to axe
  const html = render()

  expect(await axe(html)).toHaveNoViolations()
});
```

## config file - axe.config.json

```
{
  "runOnly": {
    "type": "tags",
    "values": ["wcag2a", "wcag2aa"]
  },
  "rules": {
    "image-alt": { "enabled": false },
    "region":{ "enabled": false }
  }
}
```