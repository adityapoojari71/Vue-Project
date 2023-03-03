
<script>
import MyPagination from  '../components/pagination.vue';
  export default {
    components: {
       MyPagination,
    },
    data() {
      return {
        searchQuery:'',
        users: [],
        currentPage: 1,
        logedUserName:sessionStorage.getItem("userName"),
      };
    },
    methods:{
      filteredUSer(event){
        axios.get("https://akabab.github.io/superhero-api/api/all.json").then(res => {
            if(this.searchQuery){
              this.users = res.data.filter((item)=>{return item.biography.fullName.toLowerCase().includes(this.searchQuery.toLowerCase());})
            }
            else{
              this.users = res.data;
            }
        });
      },
      logout(){
        this.$router.push({ path: `/login`,});
      },
      userDetailPage(event){
        console.log(event)
        this.$router.push({ path: `/user/`+event,});
      },
      onPageChanged(page) {
      this.currentPage = page;
    },
    },
    mounted() {
        const request = {
          params: {
            _limit: 10
          }
        }
      axios.get("https://akabab.github.io/superhero-api/api/all.json",request).then(res => {
        this.users = res.data;
        this.users.sort((a,b) => a.biography.fullName - b.biography.fullName);
        console.log(this.users)
        console.log(sessionStorage.getItem("userName"))
      });
    },
    
};
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top" style="background-color: #e3f2fd;">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="@/assets/logo.svg" alt="..." height="36">
        </a>
        
        <form class="form-inline my-2 my-lg-0">
          <div class="row">
           <div class="col-10">
            <input class="form-control mr-sm-2" id="search" v-on:keyup.enter="filteredUSer()"  v-model="searchQuery" type="search" placeholder="Search" aria-label="Search">
           </div>
           <div class="col-2">
            <button class="btn btn-outline-success my-2 my-sm-0" id="searchUserButton" type="button" @click="filteredUSer();">Search</button>
           </div>
          </div>
        </form>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-circle-user"></i> {{logedUserName}}
              </a>
              <ul class="dropdown-menu"  aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li><hr>
                <li><a class="dropdown-item" href="#">Another action</a></li><hr>
                <li><a class="dropdown-item" href="#" @click="logout()">Log Out</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="row m-2">
          <div class="col">
            <strong>Total Number of User : {{ users.length }}</strong>
          </div>
      </div>
    <div class="cards-container" >
      <div v-for="(hero,index) in users">
          <div class="card" id="userCard" data-toggle="tooltip" data-placement="right" :title="hero.biography.fullName" @click="userDetailPage(hero.id)">
              <h4 class="text-left font-weight-bold pt-3  ml-5" data-toggle="tooltip" data-placement="right" :title="hero.biography.fullName"  v-if="hero.biography.fullName !== ''">{{hero.biography.fullName.slice(0,15)}}<small v-if="hero.biography.fullName.length>15">....</small></h4><h4 class="text-left font-weight-bold pt-3"  v-if="hero.biography.fullName == ''">&nbsp;</h4>
              <div class="imgWidth" v-if="hero.images !=null"> <img class="card-img-top w-100 h-100" :src="hero.images.lg" alt="Card image cap"> </div>
              <P class="text-left ml-2" >{{hero.biography.placeOfBirth}}</P>
          </div>
      </div>
    </div>
    <div>
    <!-- <my-pagination
      :items="users"
      :per-page="10"
      :current-page="currentPage"
      @page-changed="onPageChanged"
    /> -->
  </div>
</template>

<style lang="scss">

.cards-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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

/* css for setting card height */
.card{
    height: 100%;
    min-height: 250px;
    cursor: pointer;
} 
  
/* mouse hover transition border color  */
 .card:hover {
    transition: border-color 1s, box-shadow 0.5s;
    border-color: rgba(13, 110, 253, 0.7);
    box-shadow: 0px 0px 10px 2px rgba(13, 110, 253, 0.6);
} 

.imgWidth{
    height: 220px;
    width:100%;
}

.card .imgWidth img{
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
    min-height: 100%;
} 

.dropdown-item{
  // padding: 0.1px;
  // margin-left: 1vw;
}

</style>
