<script>
	export let rating;
</script>

<div class="box">
	<div class="circular-progress" style={`--rating: ${rating * 10 * 3.6}deg`}>
		<span class="rating">{rating}</span>
	</div>
</div>
<!-- style={`background: conic-gradient(#10b981 ${rating * 10 * 3.6}deg, #f0f0f0 0deg)`} -->

<style>
	.box {
		top: 10px;
		right: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
		position: absolute;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background-color: #f4f4f4;
		box-shadow: 0px 4px 16px rgba(17, 17, 26, 0.1), 0px 8px 32px rgba(17, 17, 26, 0.05);
	}

	.circular-progress {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: conic-gradient(#10b981 var(--rating), #f0f0f0 0deg);
	}

	.circular-progress::before {
		position: absolute;
		content: ' ';
		width: 28px;
		height: 28px;
		border-radius: 50%;
		background-color: #f4f4f4;
	}

	.rating {
		position: relative;
		font-family: 'Ubuntu';
		font-weight: 500;
		font-size: 0.875rem;
		color: #404040;
	}
</style>
