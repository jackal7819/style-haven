<script setup>
	const { id } = useRoute().params;
	const URL_PRODUCT = 'https://fakestoreapi.com/products/' + id;
	const { data: product } = await useFetch(URL_PRODUCT, {
		key: id,
	});
</script>

<template>
	<main class="flex flex-col justify-center gap-10 py-10 mx-auto md:flex-row">
		<div class="max-w-sm mx-auto md:mx-0">
			<img
				:src="product.image"
				alt="product image"
				class="object-contain h-full rounded"
			/>
		</div>
		<div
			class="flex flex-col justify-center max-w-sm gap-10 p-5 mx-auto border rounded border-slate-400 md:mx-0"
		>
			<h1 class="text-xl font-bold">{{ product.title }}</h1>
			<p class="flex justify-between gap-10">
				Price: <span>$ {{ product.price }}</span>
			</p>
			<p class="flex justify-between gap-10 capitalize">
				Category: <span>{{ product.category }}</span>
			</p>
			<p>{{ product.description }}</p>
		</div>
	</main>
</template>
