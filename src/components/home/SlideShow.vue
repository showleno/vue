<template>
  <swiper class="slideShow" :options="swiperOption" >
		  <swiper-slide v-for="item in banner" :key="item.id">
				<router-link to="/list">
					<img :src="item.img" />
				</router-link>
		  </swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
	import Vue from 'vue'
	import axios from 'axios'
	import Swiper from 'swiper'
	import VueAwesomeSwiper from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css'
	Vue.use(VueAwesomeSwiper);

	export default {
		name: 'SlideShow',
		props: ['banner'],
		data() {
			return {
				swiperOption: {
					slidesPerView: 1,
					loop: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
				}
			}
		},
		mounted() {
		}
	}
</script>
<style>
	.slideShow {
		width: 100%;
		max-height: 320px;
	}
	.slideShow img {
		max-width: 100%;
		max-height: 100%;
	}
	.swiper-button-next:focus, .swiper-button-prev:focus {
		outline: none;
	}
	.dot_wrapper {
		width: 100%;
		position: absolute;
		bottom: .5rem;
		height: 1.25rem;
	}
	.swiper-container-horizontal > .swiper-pagination-bullets {
		max-width: 100%;
		width: auto;
		border-radius: 1rem;
		line-height: 1;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		padding: 0px 5px;
		background: rgba(0,0,0,.2);
	}
	.swiper-pagination span {
		margin: 0 6px;
		background: #fff;
		opacity: .5;
	}
	.swiper-pagination .swiper-pagination-bullet-active {
		opacity: 1;
	}
</style>

