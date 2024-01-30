<script lang="ts">
	import type { DataHandler } from '@vincjo/datatables';

	export let handler: DataHandler;
	export let orderBy: string;

	const sorted = handler.getSort();
</script>

<th on:click={() => handler.sort(orderBy)} class="cursor-pointer select-none">
	<div class="flex h-full items-center justify-start gap-x-2">
		<slot />
		{#if $sorted.identifier === orderBy}
			{#if $sorted.direction === 'asc'}
				🡡
			{:else if $sorted.direction === 'desc'}
				🡣
			{/if}
		{:else}
			↕️
		{/if}
	</div>
</th>
