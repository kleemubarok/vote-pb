<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>git remote add origin git@github.com:kleemubarok/vote-pb.git

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">Create Account</h1>
			<p class="py-6">Supaya bisa login, akun kamu harus tersedia dulu. Ditunggu ya!</p>
		</div>
		<div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<div class="card-body">
				<form method="post">
					<div class="form-control">
						<span class="label-text">Name</span>
						<input
							type="text"
							class="input input-bordered"
							required
							name="name"
							placeholder="Enter your name"
						/>
					</div>
					<div class="form-control">
						<span class="label-text">Email</span>
						<input
							type="email"
							class="input input-bordered"
							required
							name="email"
							placeholder="Enter your e-mail"
						/>
					</div>
					<div class="form-control">
						<span class="label-text">Password</span>
						<input
							type="password"
							minlength="8"
							class="input input-bordered"
							name="password"
							placeholder="Enter your password"
						/>
					</div>
					<div class="form-control mt-6">
						<button class="btn btn-primary">I'm in!</button>
					</div>
				</form>

				{#if form?.message}
					<p class="error label-text">{form.message}</p>
				{/if}

				<div class="form-control center">
					<label for="login" class="label-text"
						>Already have an account?
						<a id="login" class="label-text link link-hover font-bold text-primary" href="login"
							>Log in!</a
						>
					</label>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.error {
		color: red;
	}
</style>
