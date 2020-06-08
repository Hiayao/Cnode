<template>
 <div>
     {{id}}
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
         id: this.$route.params.id
     }
   },
   methods: {
       initee(){
           alert(this.$route.params.id)
           debugger
       }
   },
   mounted() {
       alert()
       initee()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>