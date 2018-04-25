<template>
    <header class="header">
        <div class="left">
            <font-icon id="icon--xinxi" class="icon"></font-icon>
        </div>
        <div class="center">
            <router-link :to="'/'+$store.state.type" class="logo">
                <img src="../assets/logo.png" alt="">
            </router-link>
        </div>
        <div class="right">
            <font-icon id="icon--fangdajing" class="icon"></font-icon>
        </div>
    </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
    .header {
        background-image: linear-gradient(#323232,#414141);
        display: flex;
        display: -webkiy-flex;
        justify-content: space-between;
        align-items: center;
        height: 3.125rem;
    }
    .left, .right {
        width: 15%;
        height: 100%;
        display: flex;
        display: -webkiy-flex;
        justify-content: center;
        align-items: center;
    }
    .center {
        width: 100%;
        height: 100%;
        display: flex;
        display: -webkiy-flex;
        justify-content: center;
        align-items: center;
    }
    .center .logo {
        display: -webkit-flex;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .center .logo img {
        max-width: 8rem;
    }
    .icon {
        font-size: 1.4rem;
        color: #fff;
    }
</style>


