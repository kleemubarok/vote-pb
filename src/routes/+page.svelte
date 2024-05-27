<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	import { pb } from '$lib/pocketbase';
	import type { EmojiDocument } from './types';

	export let data: PageData;
	const { emojis, userID, userName } = data;

	$: if ($pb) {
		$pb.collection('emojis').subscribe<EmojiDocument>('*', (emojiUpdate) => {
			const emojiIndex = emojis.findIndex((emoji) => {
				return emoji.id === emojiUpdate.record.id;
			});

			emojis[emojiIndex] = emojiUpdate.record;
		});
	}

</script>

<div class="navbar bg-base-100 radius-3xl">
	<div class="navbar-start">
		<a class="btn btn-ghost text-xl" href="/">Vote PB</a>
	</div>
	<div class="navbar-end pr-1">
		<a href="/auth/logout" class="btn btn-primary">Logout</a>
	</div>
</div>
<section
	id="team"
	class="overflow-hidden px-1 pb-0 mb-20 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
>
	<div class="container mx-auto">
		<div class="-mx-4 flex flex-wrap">
			<div class="w-full px-4">
				<div class="mx-auto mb-[60px] max-w-[485px] text-center">
					<span class="mb-2 block text-lg font-semibold text-primary dark:text-white">
						Hi {userName}!
					</span>
					<h2
						class="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]"
					>
						Yuk ikut bersuara
					</h2>
					<p class="text-base text-body-color dark:text-dark-6">
						Pilih emotion manapun yang jadi favoritmu, semakin banyak yang suka semakin yakin kami
						untuk jadikan juaranya.
					</p>
				</div>
			</div>
		</div>

		<!-- <div class="text-center -mx-3 pl-2 flex flex-wrap justify-center">
			{#each emojis as emoji}
				<form method="post" use:enhance>
					<input type="hidden" name="emoji-id" value={emoji.id} />
					<div class="w-1/2 lg:w-full px-4 sm:w-1/2">
						<!-- <div
							class="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none"
						> --
						<div class="mx-auto mb-5">
							<span class="text-8xl text-primary">{emoji.emoji}</span>
						</div>
						<div class="size-full">
							<p class="text-center mb-1 p-0 font-bold text-dark text-sm md:text-lg dark:text-white">
								{emoji.votes.length} votes
							</p>
							<button class="btn btn-lg md:btn-md btn-primary mb-5 text-sm text-body-color dark:text-dark-6">
								{emoji.votes.includes(userID) ? 'Remove vote' : 'Vote for emoji'}
							</button>
						</div>
						<!-- </div> --
					</div>
				</form>
			{/each}
		</div> -->

		<div class="text-center mx-auto grid grid-cols-2 md:grid-cols-4 md:w-1/2 justify-center">
			{#each emojis as emoji}
				<form method="post" use:enhance>
					<input type="hidden" name="emoji-id" value={emoji.id} />
					<div class="px-4">
						<div class="mx-auto mb-5">
							<span class="text-8xl text-primary">{emoji.emoji}</span>
						</div>
						<div class="size-full">
							<p
								class="text-center mb-1 p-0 font-bold text-dark text-sm md:text-lg dark:text-white"
							>
								{emoji.votes.length} votes
							</p>
							<button 
								class="btn btn-md btn-primary mb-5 text-sm text-body-color dark:text-dark-6"
							>
								{emoji.votes.includes(userID) ? 'Remove vote' : 'Vote for emoji'}
							</button>
						</div>
					</div>
				</form>
			{/each}
		</div>
	</div>
</section>
