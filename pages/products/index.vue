<script setup>
	const URL_PRODUCTS = 'https://fakestoreapi.com/products';
	const { data: products } = await useFetch(URL_PRODUCTS);
</script>

<template>
	<main class="py-10">
		<h1 class="mb-8 text-3xl font-bold">Products</h1>
		<div
			class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			<div v-for="product in products" :key="product.id">
				<ProductCard :product="product" />
			</div>
		</div>
	</main>
</template>
