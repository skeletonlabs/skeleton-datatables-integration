<script lang="ts">
</script>

<h1 class="text-center h1 p-2 my-8">
	<a class="anchor" href="https://vincjo.fr/datatables/home" target="_blank"
		>Svelte Simple Datatable</a
	>
	components styled with
	<a class="text-tertiary-500 underline" href="https://www.skeleton.dev/" target="_blank"
		>Skeleton</a
	>
</h1>

<p class="text-center text-xl my-8">
	A guide to create these components can be found in the <a
		class="text-tertiary-500 underline"
		href="https://www.skeleton.dev/docs/ssd"
		target="_blank">Skeleton Docs.</a
	>
</p>

<p class="text-center text-xl my-8">
	Your components will need to be configured slightly differently depending on whether the data is
	coming from the server or the client. Examples for each are provided below.
</p>

<div class="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
	<!-- CLIENT -->
	<a class="card card-hover overflow-hidden" href="/client">
		<header>
			<img
				src="https://vincjo.fr/datatables/logo.svg"
				class="bg-black/50 w-full aspect-[21/9]"
				alt="Post"
			/>
		</header>
		<div class="p-4 space-y-4">
			<h3 class="h3" data-toc-ignore>Client</h3>
			<article>
				<p>An example with fake contact data from a local Typescript file.</p>
			</article>
		</div>
	</a>

	<!-- SERVER -->
	<a class="card card-hover overflow-hidden" href="/server">
		<header>
			<img
				src="https://vincjo.fr/datatables/logo-remote.svg"
				class="bg-black/50 w-full aspect-[21/9]"
				alt="Post"
			/>
		</header>
		<div class="p-4 space-y-4">
			<h3 class="h3" data-toc-ignore>Server</h3>
			<article>
				<p>
					An example with fake to-do data from the <a
						href="https://jsonplaceholder.typicode.com/"
						class=" text-secondary-500 underline hover:text-secondary-400"
						target="_blank">JSON Placeholder API.</a
					>
				</p>
			</article>
		</div>
	</a>
</div>
