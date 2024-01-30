<script lang="ts">
	//Local components
	import DatatableServer from '$lib/components/server/Datatable.svelte';
	//Skeleton components
	import { CodeBlock, RadioGroup, RadioItem, TabGroup, Tab } from '@skeletonlabs/skeleton';
	//for radio buttons
	let value: number = 0;
	//for alert
	let visible: boolean = true;
	//for tabs
	let tabSet: number = 0;
</script>

<div class="space-y-4 mb-4">
	<h1 class="h1 text-secondary-500 font-bold">Server</h1>
	--
	<h2 class="h2 text-secondary-500 font-semibold">Example</h2>
	<DatatableServer />
	<h2 class="h2 text-secondary-500 font-semibold">Loading Data</h2>
	refer to
	<a class="underline text-secondary-500" href="https://vincjo.fr/datatables/home" target="_blank"
		>SSD Docs</a
	>
	&
	<a
		class="underline text-secondary-500"
		href="https://vincjo.fr/datatables/tutorial/html-table"
		target="_blank">example</a
	>

	<h2 class="h2 text-secondary-500 font-semibold">Responsive</h2>
	The table wrap style, overflow, invidual components, i.e. -<code class="text-secondary-500">
		paginate</code
	>
	<h2 class="h2 text-secondary-500 font-semibold">Components</h2>
	Skeleton provides Tailwind classes for native HTML elements. SSD provides handler functions to manipulate
	the data with Javascript. Skeleton and SSD are used together to create the components below..
	<img src="components.png" class="" alt="Post" />
</div>

<div class="space-y-8">
	<TabGroup>
		<Tab bind:group={tabSet} name="tab1" value={0}>Sort</Tab>
		<Tab bind:group={tabSet} name="tab2" value={1}>Filter</Tab>
		<Tab bind:group={tabSet} name="tab3" value={2}>Search</Tab>
		<Tab bind:group={tabSet} name="tab3" value={3}>Rows Per Page</Tab>
		<Tab bind:group={tabSet} name="tab3" value={4}>Row Count</Tab>
		<Tab bind:group={tabSet} name="tab3" value={5}>Pagination</Tab>
		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				<div class="card overflow-hidden py-4 px-2">
					<header class="ml-2 mt-2">
						<h3 class="h3 text-secondary-500 font-semibold">Search</h3>

						<RadioGroup active="variant-filled-secondary" hover="hover:variant-soft-secondary">
							<RadioItem bind:group={value} name="justify" value={0}>Preview</RadioItem>
							<RadioItem bind:group={value} name="justify" value={1}>Code</RadioItem>
						</RadioGroup>
					</header>
					<div
						class="p-4 m-4 space-y-4 rounded-lg border-secondary-500 border-2 flex justify-center"
					>
						{#if value === 0}
							<input class="input w-64" type="search" placeholder="Search..." />
						{:else if value === 1}
							<CodeBlock
								language="html"
								code={`
						<div class="card">
						`}
							/>
						{/if}
					</div>
				</div>
			{:else if tabSet === 1}
				<div class="card overflow-hidden py-4 px-2">
					<header class="mx-4 space-y-2">
						<h3 class="h3 text-secondary-500 font-semibold">Pagination</h3>

						<!-- Alert -->
						{#if visible}
							<aside class="alert variant-filled-secondary">
								<div>Note:</div>
								<div class="alert-message">
									<p>
										Skeleton has it's own pagination component, to keep SSD stuff with SSD we are
										creating a seperate pagination compjentn here
									</p>
								</div>
							</aside>
						{/if}

						<RadioGroup active="variant-filled-secondary" hover="hover:variant-soft-secondary">
							<RadioItem bind:group={value} name="justify" value={0}>Preview</RadioItem>
							<RadioItem bind:group={value} name="justify" value={1}>Code</RadioItem>
						</RadioGroup>
					</header>
					<div
						class="p-4 m-4 space-y-4 rounded-lg border-secondary-500 border-2 flex justify-center"
					>
						{#if value === 0}
							<aside class="text-sm leading-8 mr-6">
								<b>0</b>
								- <b>0</b>
								/ <b>0</b>
							</aside>
						{:else if value === 1}
							<CodeBlock
								language="html"
								code={`
									<div class="card">
									`}
							/>
						{/if}
					</div>
				</div>
			{:else if tabSet === 2}
				(tab panel 3 contents)
			{/if}
		</svelte:fragment>
	</TabGroup>
</div>
