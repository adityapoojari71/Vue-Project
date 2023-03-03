<script>
    export default {
        data() {
            return {
            email: '',
            password:'',
            forgotPasswordShow:false,
            }
        },
        methods:{
            addUser(){
                if(this.email !="" && this.password !=""){
                    sessionStorage.setItem("userName",this.email);
                    console.log(sessionStorage.getItem("userName"))
                    this.$router.push({
                        path: `/home`,
                    });
                }
                else{
                    alert("Fill the all fields");
                    return;
                }
            },
        }
    }
</script>

<template>
    <section class="vh-100">
    <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100" >
        <div class="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid" alt="Sample image">
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1"> 
            <form>
            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-linkedin-in"></i>
                </button>
            </div>

            <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4">
                <input type="email" v-model="email" required id="email" class="form-control form-control-lg"
                placeholder="Enter a valid email address" />
                <label class="form-label" for="email">Email address</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
                <input type="password" v-model="password" id="password" class="form-control form-control-lg"
                placeholder="Enter password" />
                <label class="form-label" for="password">Password</label>
            </div>

            <div class="d-flex justify-content-between align-items-center">
                <!-- Checkbox -->
                <div class="form-check mb-0">
                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label class="form-check-label" for="form2Example3">
                    Remember me
                </label>
                </div>
                <a href="#!" class="text-body" @click="forgotPasswordShow = !forgotPasswordShow">Forgot password?</a>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
                <button type="button" id="loginButton" class="btn btn-primary btn-lg" @click="addUser();"
                style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
                <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="" @click="this.$router.push({ path: `/signup`,})"
                    class="link-danger">Register</a></p>
            </div>

            </form>
        </div>
        </div>
    </div>
    <div
        class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <!-- Copyright -->
        <div class="text-white mb-3 mb-md-0">
        Copyright © 2020. All rights reserved.
        </div>
        <!-- Copyright -->

        <!-- Right -->
        <div>
        <a href="#!" class="text-white me-4">
            <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#!" class="text-white me-4">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="#!" class="text-white me-4">
            <i class="fab fa-google"></i>
        </a>
        <a href="#!" class="text-white">
            <i class="fab fa-linkedin-in"></i>
        </a>
        </div>
        <!-- Right -->
    </div>
    
    <div>
        <div class="dialog" v-if="forgotPasswordShow">
            <div class="dialog-contents">    
                <div class="card text-center" style="width: 300px;">
                    <div class="card-header h5 text-white bg-primary">Password Reset <i class="fa-sharp fa-regular fa-circle-xmark" @click="forgotPasswordShow = !forgotPasswordShow"></i></div>
                    <div class="card-body px-5">
                        <p class="card-text py-2">
                            Enter your email address and we'll send you an email with instructions to reset your password.
                        </p>
                        <div class="form-outline">
                            <input type="email" id="typeEmail" class="form-control my-3" />
                            <label class="form-label" for="typeEmail">Email input</label>
                        </div>
                        <a href="#" class="btn btn-primary w-100">Reset password</a>
                        <div class="d-flex justify-content-between mt-4">
                            <a class="" href="" @click="this.$router.push({ path: `/login`,})">Login</a>
                            <a class="" href="" @click="this.$router.push({ path: `/signup`,})">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>

</template>

<style>
    .divider:after,
    .divider:before {
    content: "";
    flex: 1;
    height: 1px;
    background: #eee;
    }
    .h-custom {
    height: calc(100% - 73px);
    }
    @media (max-width: 450px) {
    .h-custom {
    height: 100%;
    }
    }

    .dialog-contents {
        background-color: none;
        position: fixed;
        top: 0px;    
        right: 45%;
        margin: 0 auto;       

    }
</style>