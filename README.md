## Usage

```
var dirtifier = require('vue-dirtifier')
Vue.use(dirt)

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

Pass your options as an object like this:

```
Vue.use(dirt, options)
```
