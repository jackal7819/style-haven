<template>
	<header>
		<nav class="flex items-end justify-between pb-2 border-b border-slate-400">
			<h1 class="hidden text-3xl font-bold text-pink-500 sm:block">Style Haven</h1>
			<ul class="flex justify-between gap-10 mx-auto text-xl">
				<li class="duration-300 hover:text-sky-600 active:text-sky-700">
					<NuxtLink to="/">Home</NuxtLink>
				</li>
				<li class="duration-300 hover:text-sky-600 active:text-sky-700">
					<NuxtLink to="/about">About</NuxtLink>
				</li>
				<li class="duration-300 hover:text-sky-600 active:text-sky-700">
					<NuxtLink to="/products">Products</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style scoped>
	.router-link-exact-active {
		color: #0ea5e9;
		transition: all 0.3s ease-in-out;
	}
</style>
