# React MultiSelect

React component that allow you to slect multiple options from set of category. It has list of options [See Options List Section] that can be selected based on requirement. Multielect can also handle dynamic data very well.

## Demo

Live Demo URL : http://demo.techhysahil.com/react-MultiSelect/

## Getting Started

The easiest way to use React-MultiSelect is to install it using NPM.

```javascript
npm install react-itra-multi-select --save
```
Now import React MultiSelect into your project.

```js
import ReactMultiSelect from 'react-multi-select';

// Be sure to include styles at some point
import 'react-multi-select/dist/font/icons.css';
import 'react-multi-select/dist/react-MultiSelect.css.css';
```

### Usage

After adding react-multi-selct into your project, just add below tag into your templete.


Say what the step will be

```
let categoryList = [
  {
    id: 0, displayName : "Jaypee Infra", value : "jaypee infra", checked : true, disabled : false
  },
  {
    id: 1, displayName : "CDSL", value : "cdsl", checked : false, disabled : false
  },
  {
    id: 2, displayName : "Cipla", value : "cipla", checked : false, disabled : true
  },
  {
    id: 3, displayName : "Unitech", value : "unitech", checked : true, disabled : false
  }
];

let categoryName = "Customer";

<ReactMultiSelect 
  categoryList = {categoryList}
  categoryName = {categoryName}
  onClose = {this.closeMultiselect.bind(this)}
/>
```
## Options List

| OPtion | Required/Optional | Description |
| --- | --- | --- |
| `id` | Required & Unique | Unique id for each category|
| `categoryName` | Required | Placeholder or Name of the Category |
| `categoryList` | Required | List of categories to be selected |
| `limitNoOfSelection` | Optional | Limit maximum number of category that an be selected |
| `disabled` | Optional | disable Multiselect control, default  value is `false` |
| `leftIcon` | Optional | Show Multiselect leftIcon, default  value is `false` |
| `showSearch` | Optional | Weather search needs to be shown or hidden, default  value is `false` i.e Search is hidden |

### categoryList Object options

| OPtion | Required/Optional | Description |
| --- | --- | --- |
| `checked` | Require | Category is already checked|
| `disabled` | Required | Category is disabled |

## Authors

***Sahil Gupta** [Github](https://github.com/techhysahil)

## License

This project is licensed under the Custom License - see the [LICENSE.md](LICENSE.md) file for details
