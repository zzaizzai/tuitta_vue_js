<template>
  <div class="mt-5 p-5 w-25 mx-auto">
    <div class="container mt-3">
      <div class="mb-3">
        <div class="mb-3">
          <input
            type="name"
            class="form-control"
            placeholder="name"
            id="name"
            @change="inputName = $event.target.value"
          />
        </div>
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
          @click="Register"
        >
          SignUp
        </button>
        <button type="submit" class="btn btn-danger m-3" id="logout">
          log Out
        </button>
      </div>

      <div type="text" class="flex-grow-1">
        <p class="error-message text-danger" id="error-message">
          {{ errorMessage }}
        </p>
        <p class="text-primary" id="success-message">{{ successMessage }}</p>
      </div>
      <p><router-link to="/login">i have a account</router-link></p>
    </div>
  </div>
</template>

<script >
export default {
  name: "RegisterView",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
