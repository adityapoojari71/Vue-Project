<script>
    export default {
        data() {
            return {
                ImageList:[],
            };
        },
        props: {
            msg: String
        },
        mounted() {
            console.log(this.msg)
        },
    }
</script>
<template>
    <p class="pl-3">All images</p>
    <div class="cards-containers">
        <div v-for="(hero,index) in this.msg">
            <div class="row">
                <div class="col">
                    <div class="imgWidth" style="cursor: url(myBall.cur),auto;" v-if="hero !=null"> <img class="card-img-top w-100 h-100" :src="hero" alt="Card image cap"></div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss">
    .cards-containers {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.375rem;
    margin: 1vw;
    @media (max-width: 1100px) {
      grid-template-columns: repeat(3, 1fr);
      padding: 0 1.5rem;
    }

    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>