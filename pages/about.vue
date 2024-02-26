<script setup>
	const { data } = await useFetch('/api/super');
</script>

<template>
	<main class="flex flex-col gap-5 py-10 text-indigo-400">
		<h1 class="mb-8 text-3xl font-bold">About</h1>
		<p>
			Welcome to Style Haven! We are a team of fashion enthusiasts who
			strive to make your shopping journey pleasant and enjoyable. Our
			mission is to provide you with the best selection of stylish
			clothing and accessories at affordable prices.
		</p>
		<p>
			Our collections are inspired by the latest trends and created to
			emphasize your individuality and express your uniqueness. From
			luxurious fabrics to bold prints, from classic shapes to bold
			decisions - we have everything you need to make your style bright
			and memorable.
		</p>
		<p>
			We take pride in offering customers not only high-quality products
			but also attentive service. Our team is always ready to help you
			with your selection, answer your questions, and provide you with the
			best shopping experience.
		</p>
		<p>
			Additionally, we are constantly working to improve our store to make
			your online shopping journey even more pleasant and convenient. We
			invite you to join our community and enjoy shopping with Style
			Haven!
		</p>
		<p>
			{{ data.message }}
		</p>
	</main>
</template>
