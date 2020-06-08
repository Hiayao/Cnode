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
       init(){
           alert(this.$route.params.id)
           debugger
       }
   },
   mounted() {
       init()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>