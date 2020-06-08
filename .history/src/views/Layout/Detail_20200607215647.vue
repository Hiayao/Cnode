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
           alert(id)
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