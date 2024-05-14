<script>
	import { data, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';

	import { base } from '$app/paths';
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
		<embed src="/RyanRychlak.pdf" width="1179" height="1125" 
		type="application/pdf">
		{:else}
			<Chip>Oops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>
