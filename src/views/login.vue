<style>
	.login {
		border: 1px solid #333;
	}
</style>
<template>
	<my-comp></my-comp>
	<h1 class="ui header">Login</h1>
	<form class="ui form">
	  <div class="field">
	    <label>First Name</label>
	    <input type="text" name="first-name" placeholder="First Name" v-model="username">
	  </div>
	  <div class="field">
	    <label>Last Name</label>
	    <input type="text" name="last-name" placeholder="Last Name" v-model="password">
	  </div>
	  <div class="field">
	    <div class="ui checkbox">
	      <input type="checkbox" tabindex="0" class="hidden" v-model="checked" >
	      <label>I agree to the Terms and Conditions ({{checked}})</label>
	    </div>
	  </div>
	  <button class="ui button" type="button" @click="login()">Submit</button>
	</form>
</template>
<script>
	import '../../semantic/semantic.css';
	import Semantic from 'semantic';
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
                username: '',
                password: '',
                checked: true
            }
        },
        ready () {
        	$('.ui .checkbox').checkbox({
        		onChange () {
        			console.log(this.checked);
        		}
        	});
        },
        beforeDestroy () {

        },
        methods: {
            login () {
            	console.log('click login');
            },
            check () {
            	console.log(this.username);
            	this.checked = !this.checked;
            }
        }
    }
</script>