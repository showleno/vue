<template>
    <div class="start_page">
        <header class="header">
            <div class="left">
                <router-link to="/" class="logo">
                    <img src="static/img/yohologo.png" alt="">
                </router-link>
            </div>
            <div class="right">
                <label>
                    <input type="text" class="search" placeholder="搜索">
                    <button>
                        <font-icon id="icon--fangdajing" class="icon"></font-icon>
                    </button>
                </label>
            </div>
        </header>
        <main class="start_content" :style="{
        backgroundImage:  'url(static/img/'+start_img+')' }">
            <section class="selectNav">
                <ul>
                    <li @click="getType('boys')" >
                        <router-link to="/boys">男生 Boys</router-link>
                    </li>
                    <li @click="getType('girls')">
                        <router-link to="/girls">女生 GIrl</router-link>
                    </li>
                    <li @click="getType('boys')">
                        <router-link to="/kids">潮童 Kids</router-link>
                    </li>
                    <li @click="getType('boys')">
                        <router-link to="/lifestyle">创意生活 LifeStyle</router-link>
                    </li>
                </ul>
            </section>
        </main>
    </div>
    
    
</template>
<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
    name: 'StartPage',
    data() {
        return {
            data: [],
            start_img: ''
        }
    },
    methods: {
        // 利用时间改变session的type值
        getType (type) {
            this.$store.commit('getType',type)
            if ( type == 'boys' ) {
                this.$router.push({path:'/boys'});
            }else if ( type == 'girls' ) {
                this.$router.push({path:'/girls'});
            }
        }
    },
    mounted() {
        axios.get('static/data.json')
        .then( (res)=> {
            res.data.data.start_page.forEach((val,idx) => {
                this.start_img = val.img
            })
        },(error)=>{

        })
    }
}
</script>
<style>
    .start_page {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #fff;
        z-index: 999;
        padding: 6px;
        overflow-y: scroll;
    }
    .start_page .header {
        display: flex;
        display: -webkit-flex;
        align-items: center;
        margin-bottom: 10px;
        padding: 5px 10px 0;
    }
    .start_page .left {
        width: 45%;
    }
    .start_page .left img {
        max-width: 100%;
    }
    .start_page .right {
        width: 55%;
        margin-left: 5px;
    }
    .start_page .right label {
        padding: 5px 0px 5px 5px;
        border: 1px solid #ccc;
        display: flex;
        display: -webkit-flex;
    }
    .start_page .right label .search {
        border: 0;
        width: 80%
    }
    .start_page .right label button {
        width: 20%;
        background: none;
        box-shadow: none;
        border: 0;
    }
    .start_page .right label button .icon {
        color: #ccc;
    }
    .start_page .start_content {
        height: 100%;
        background-size: 100% 100%;
    }
    .start_page .start_content .selectNav {
        margin: 0 auto;
        height: 100%;
        padding-top: 50%;
    }
    .start_page .start_content .selectNav li {
        width: 16rem;
        margin: 0 auto 2rem;
    }
    .start_page .start_content .selectNav li a {
        background: #000;
        border: 3px solid #fff;
        text-align: center;
        width: 16rem;
        padding: 10px 0;
        display: block;
        color: #fff;
        font-weight: bold;
        font-size: 1rem;
    }
    .display {
        display: none;
    }
</style>

