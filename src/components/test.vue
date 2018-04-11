<template>
    <section class="test">
        <button @click="toshow">点击让子组件显示</button>  
        <component v-bind:is="which_to_show" keep-alive></component>  
    </section>
</template>
<script>
import List from './List'
import YouLike from './You-like'
import HotBrand from './Hot-brand'
import HotRecommended from './Hot-recommended'
export default {
    name: 'Test',
  data () {
      return {
          which_to_show: "first"  
      }
  },
        methods: {  
            toshow () {   //切换组件显示  
                var arr = ["first", "second", "third", ""];  
                var index = arr.indexOf(this.which_to_show);  
                if (index < 3) {  
                    this.which_to_show = arr[index + 1];  
                } else {  
                    this.which_to_show = arr[0];  
                }  
                console.log(this.$children);  
            }  
        },  
        components: {  
            'first':  YouLike,
            'second': List,
            'third': HotRecommended
        }  
}
</script>
