<template>
    <div id="home">
            <section class="login-page">
      <section id="login-container">
        <div>
          <h1>Welcome to postIt!</h1>
        </div>
        <div>
          <h4>
            <a href="#">Create an Account</a>
          </h4>
        </div>
        <div>
          <h4>Or</h4>
        </div>
        <div>
          <h3>Please Log In</h3>
          <form>
            <div>
              <input type="text" name="email" placeholder="Email">
            </div>
            <div>
              <input type="password" name="password" placeholder="Password">
            </div>
            <div>
              <button @click="logIn" class="button" type="submit" name="login">Log In</button>
            </div>
            <div>
              <small>
                <a href="#">Forgot password?</a>
              </small>
            </div>
          </form>
        </div>
      </section>
    </section>
    </div>
</template>

<script>
export default {
    name: 'Login',
    methods: {
        logIn: function() {
            this.$router.push("home")
        }
    }
}
</script>

<style scoped>
#home {
    margin-top: 6%;
}
</style>