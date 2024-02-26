<script setup>
	const { id } = useRoute().params;
	const URL_PRODUCT = 'https://fakestoreapi.com/products/' + id;
	const { data: product } = await useFetch(URL_PRODUCT, {
		key: id,
	});

	if (!product.value) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Product Not Found',
			fatal: true,
		});
	}
</script>

<template>
	<main class="grid grid-cols-1 lg:gap-10 lg:grid-cols-2">
		<div class="py-5 my-auto lg:p-10">
			<img
				:src="product.image"
				alt="product image"
				class="object-cover w-full max-w-md mx-auto rounded"
			/>
		</div>
		<div class="flex flex-col gap-8 py-5 my-auto lg:p-10">
			<h1 class="text-2xl font-bold lg:text-4xl">{{ product.title }}</h1>
			<p class="flex flex-col gap-2 text-xl capitalize">
				<span class="text-base font-bold">Price: </span>$
				{{ product.price }}
			</p>
			<p class="flex flex-col gap-2 text-xl capitalize">
				<span class="text-base font-bold">Category: </span
				>{{ product.category }}
			</p>
			<p class="flex flex-col gap-2">
				<span class="pb-2 font-bold border-b border-slate-400"
					>Description: </span
				>{{ product.description }}
			</p>
			<button
				class="flex items-center justify-center gap-5 py-2 duration-300 rounded w-52 bg-sky-700 text-slate-200 active:bg-sky-500 hover:bg-sky-600"
			>
				<i class="text-xl fa-solid fa-cart-plus"></i
				><span>Add to Cart</span>
			</button>
		</div>
	</main>
</template>
