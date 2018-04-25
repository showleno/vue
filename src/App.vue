<template>
  <keep-alive>
  <div id="app">
    <Header/>
    <router-view />
    <Footer />
  </div>
  </keep-alive>
</template>
<script>
import StartPage from './components/StartPage'
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  props: ['pathName'],
  components : {
    'StartPage': StartPage,
    'Footer': Footer,
    'Header': Header,
  },
  mounted () {
    // 每次页面刷新，检查session里的type值
    let localType = window.sessionStorage.getItem('type');
    if(localType && localType ==  this.$store.state.type ) {
        this.$store.commit('getType',localType)
    }else {
        this.$store.commit('getType',localType)// 同步操作
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
li {
  list-style: none;
}
ul {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
img {
  width: 100%;
  display: block;
}
.main_content {
  padding-bottom: 10rem;
}
</style>
