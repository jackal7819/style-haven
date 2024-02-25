<script setup>
	const { product } = defineProps(['product']);
</script>

<template>
	<div
		class="flex flex-col items-center max-w-sm gap-5 p-5 mx-auto duration-300 bg-white border rounded border-slate-400 hover:shadow-inner hover:shadow-sky-700 hover:-translate-y-2"
	>
		<img
			:src="product.image"
			alt="product image"
			class="object-contain rounded max-h-32"
		/>
		<h1 class="text-xl font-bold truncate max-w-[90%]">
			{{ product.title }}
		</h1>
		<NuxtLink
			:to="`/products/${product.id}`"
			class="w-full px-4 py-2 text-center duration-300 rounded bg-sky-700 text-slate-200 active:bg-sky-500 hover:bg-sky-600"
			>View Details</NuxtLink
		>
	</div>
</template>
