vue-sortable-mixin
==================

Keep in sync a list(array) of data in a Vue.js view model with jQueryUI sortable

## Usage
```bash
 npm install --save vue-sortable-mixin
```

## Example

```js
var sortableMixin = require('vue-sortable-mixin');

var MyComponent = Vue.extend({
    mixins: [ sortableMixin ],

    template: '<div v-repeat="positions"> {{$value}} </div>',

    data: function() {
        return {
            positions: [ 'striker', 'defender', 'midfielder' ],
            $sortable: {
                key: 'positions' // Default is 'elements'
            }
        }
    }
})
```

Now the ```positions``` indexes will stay intact with any changes made by $.sortable.

You can pass any of the regular $.fn.sortable options to ```$sortable``` in your data, including a
special ```$el``` selector if your sortable DOM element is not the default viewModel.$el