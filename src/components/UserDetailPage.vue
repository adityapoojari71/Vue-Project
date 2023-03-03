
<script>
import ImageListPage from "../components/ViewAllImage.vue"
export default {
    components: {
        ImageListPage,
    },
  data() {
    return {
        users: [],
        dialog: false,
        userImages:[],
    };
  },
  methods:{
    toggleDialog(){
        this.dialog = !this.dialog;
    }
  },
  mounted() {
    axios.get("https://akabab.github.io/superhero-api/api/id/"+this.$route.params.id+".json").then(res => {
        this.users = res.data;
        this.userImages = this.users.images;
        console.log(this.users)
        console.log(this.userImages)
    });
  },
  
};
</script>

<template>
    <div class="container mt-5">
        <div class="row card">
            <div class="col">
                <div class="row">
                    <div class="col  mt-2">
                        <strong>{{ this.users.name}}</strong>
                    </div>
                    <div class="col mt-2">
                        <div class="imgWidth" id="allImages" @click="this.dialog = !this.dialog" v-if="this.users.images !=null"> <img class="card-img-top w-100 h-100" :src="this.users.images.lg" alt="Card image cap"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div>
        <div class="dialog" v-if="dialog">
            <div class="dialog-content">    
                <button @click="toggleDialog()" id="close" class="close-icon" >x</button>
                <ImageListPage :msg="this.userImages" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">

  
/* mouse hover transition border color  */
 .card:hover {
    transition: border-color 1s, box-shadow 0.5s;
    border-color: rgba(13, 110, 253, 0.7);
    box-shadow: 0px 0px 10px 2px rgba(13, 110, 253, 0.6);
} 

.imgWidth{
    height: 220px;
    width:100%;
    padding: 2px;
}

 .imgWidth img{
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
    min-height: 100%;
} 

.dialog {
    position: fixed;
    top: 0px;    
    left: 0px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    background: rgba(0,0,0,0.5);
    border: 1px solid #999;
  }
  .dialog-content {
    width: 50vw;
    height: 75vh;
    margin: 0 auto;       
    padding: 10px;
    margin-top: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: aliceblue;
  }
  .dialog-content img {
    width: 100%;
    height: auto;
  }
  .close-icon {
    float: right;
  }

</style>
