<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login Account</h1>
      <p class="py-6">Mari masuk, selamat datang kembali!</p>
    </div>
    <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <form method="post">
          <div class="form-control">
            <span class="label-text">Email</span>
            <input type="email" class="input input-bordered" required name="email" placeholder="Enter your e-mail" />
          </div>
          <div class="form-control">
            <span class="label-text">Password</span>
            <input minlength="8" type="password" class="input input-bordered" name="password" placeholder="Enter your password" />
            <label for="forget-pass" class="label">
              <a id="forget-pass" class="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Jump in!</button>
          </div>
        </form>

        <div class="form-control center">
          <label for="signup" class="label-text"
            >Don't have an account?
            <a id="signup" class="label-text link link-hover text-primary" href="/auth/create-account">Sign Up!</a>
          </label>
        </div>
      </div>
    </div>
  </div>
</div>
