<template>
  <div class="mt-5 p-5 w-25 mx-auto">
    <div class="container mt-3">
      <div class="mb-3">
        <input
          type="email"
          class="form-control"
          placeholder="email"
          id="email"
          value="test@gmail.com"
          @change="inputEmail = $event.target.value"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          placeholder="pw"
          id="pw"
          value="password"
          @change="inputPassword = $event.target.value"
        />
      </div>
      <div class="p-3">
        <button
          type="submit"
          class="btn btn-primary m-3"
          id="login"
          @click="Login"
        >
          log In
        </button>
        <button
          type="submit"
          class="btn btn-danger m-3"
          id="logout"
          @click="Logout"
        >
          log Out
        </button>
      </div>

      <div type="text" class="flex-grow-1">
        <p class="error-message text-danger" id="error-message">
          {{ errorMessage }}
        </p>
        <p class="text-primary" id="success-message">{{ successMessage }}</p>
        <p><router-link to="/register">be our friend</router-link></p>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: "LoginView",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
