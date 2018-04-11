<template>
  <div id="app">
    <Header/>
    <router-view />
  </div>
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
