<style>
	.login {
		border: 1px solid #333;
	}
</style>
<template>
    <my-comp></my-comp>
	<div class="">
		Router1
	</div>
</template>
<script>
    import MyComp from '../components/myComponent.vue';

	export default {
        filters: {
            
        },
        directives: {
            
        },
        components: {
            'myComp': MyComp
        },
        data () {
            return {
                a: '123'
            }
        },
        ready () {

        },
        beforeDestroy () {

        },
        methods: {
            
        }
    }
</script>