<template>
    <section class="icons-list h14">
        <ul>
            <li v-for="list in icon_list" :key="list.id">
            <router-link to="/list">
                <img v-lazy="'static/img/'+list.img" alt="">
                <h3>{{ list.title }}</h3>
            </router-link>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name: "NavList",
    props: ['icon_list']
}
</script>
<style scoped>
    .icons-list {
        width: 100%;
        padding: 12px 0;
        background: #fff;
    }
    .icons-list ul {
        display: -webkit-flex;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .icons-list ul li {
        flex: 1;
        padding: 0 22px;
        text-align: center;
    }
    .icons-list ul li a {
        display: block;
    }
    .icons-list ul li img {
        max-width: 70%;
        display: inline-block;
    }
    .icons-list ul li h3 {
        font-size: .75rem;
        transform: scale(.85);
        -webkit-transform: scale(.85);
        color: #333;
        font-weight: normal;
    }
</style>

