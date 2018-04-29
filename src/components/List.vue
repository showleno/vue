<template>
  <main class="main_content">
    <div class="list_wrapper">
        <div class="search_wrapper">
            <div class="search_input">
              <font-icon id="icon--fangdajing" class="icon search_icon"></font-icon>
              <input type="text" placeholder="搜索商品" class="search">
            </div>
        </div>
        <div class="content">
          <div class="nav_tab">
            <ul>
              <li v-for="list in tabList" :key="list.id" :class="{'active': list.text == tabActive }" @click="tabNav(list.text)" >
                <span>{{ list.text }}</span>
              </li>
            </ul>
          </div>
          <div class="list_wrapper">
            <div :class="[('species'),(items.text)]" v-for="items in species" :key="items.id" v-show="tabActive ==  items.text">
              <ul class="left">
                <li v-for="species in items.list" :key="species.id">
                  {{ species.species }}
                </li>
              </ul>
              <ul class="right" v-for="styles in items.list" :key="styles.id">
                <li v-for="text in styles.style" :key="text.id">
                  {{ text }}
                </li>
              </ul>
            </div>
          </div>
        </div>  
    </div>
  </main>
</template>
<script>
import axios from 'axios'
export default {
  name: 'List',
  components: {
  },
  data () {
    return {
      tabActive : null,
      tabList: [
        {
          "text": "Boys"
        },
        {
          "text": "Girls"
        },
        {
          "text": "Kids"
        },
        {
          "text": "Lifestyle"
        }
      ],
      species: []
    }
  },
  methods: {
    tabNav (text) {
      this.tabActive = text
    }
  },
  mounted () {
    // 判断tab
    let type = this.$store.state.type;
    let text = type.substring(0,1).toUpperCase() + type.substring(1);
    this.tabActive = text;

    // 请求数据
    axios.get('https://easy-mock.com/mock/5ac1e379cb45541720f42424/vue/list')
    .then( (res)=> {
      this.species = res.data.data
    },(error) => {
      console.log(error);
    })
  }
}
</script>
<style scoped>
  .search_wrapper {
    background: #f8f8f8;
    padding: 8px 10px;
  }
  .search_input {
    height: 38px;
    padding: 0 8px;
    border-radius: 38px;
    background: #fff;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
  }
  .search_icon {
    width: 10%;
    color: #999;
  }
  .search{
    width: 100%;
    color: #999;
    margin-left: 5px;
    border: 0;
  }
  .content .nav_tab {
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
  }
  .content .nav_tab ul {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
  }
  .nav_tab ul li {
    flex: 1;
    border-right: 1px solid #e6e6e6;
    text-align: center;
    color: #999;
    font-size: .875rem;
  }
  .nav_tab ul li:last-child {
    border: 0;
  }
  .nav_tab ul li.active {
    color: #333;
  }
</style>
