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
  ul,h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
  }
  input:focus, input {
    outline: none;
  }
  .h14 {
    box-shadow: 0 0 1px rgba(0,0,0,.1);
    margin-bottom: 14px;
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
    background: #f8f8f8;
  }
</style>
