## vue-dirtifier

Add Angular-ish class names to inputs in various states

<img src="https://cloud.githubusercontent.com/assets/4107518/16535704/8805ce7e-3fb7-11e6-964e-5f0261d53b55.png" width="300px" title="'Dirty' state" alt="'Dirty' state">
<img src="https://cloud.githubusercontent.com/assets/4107518/16535705/880dfe1e-3fb7-11e6-8012-6a28887fae72.png" width="300px" title="'Cleaned' state" alt="'Cleaned' state">

## Usage

```
var dirtifier = require('vue-dirtifier')
Vue.use(dirtifier)

// create a root instance
// and tell Vue to start watching inputs
new Vue({
  el: '#app',
  components: { App },
  ready: function () {
    Vue.startDirtyInputWatch()
  }
})
```

### Options

You can set and pass any of the options below as an object like this:

```
Vue.use(dirtifier, options)
```

**events**
Decides the event listeners to attach to each input object.

Default: `["input", "change", "keyup", "paste"]`

**dirtyClassName**
Decides the class name to add to any input after one of the event triggers.

Default: `"dirty"`

**cleanedClassName**
Decides the class name to add to any dirty text input that has been cleared.

Default: `"cleaned"`

**checkCleaned**
Decides whether or not to care about adding `options.cleanedClassName`.

Default: `true`
