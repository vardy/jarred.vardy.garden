<script lang="ts">
	const getGreeting = (person: String) => {
		return 'Hello, ' + person;
	}

	let greeting = getGreeting("world");
</script>

<h1>{greeting}!</h1>