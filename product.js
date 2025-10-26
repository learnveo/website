
fetch("products.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let product of products){
		out += `
			<section class="product card">
				<span>
					<img src='${product.image}'>
					<details>
						<summary>${product.name}</summary>
						<p>${product.discription}</p>
						<i>Duration: ${product.duration}</i>
						<div class="price-button">
							<strong>Price: ${product.price} <strike>${product.oldPrice}</strike></strong>
							<button onclick="enroll('${product.name}')">Enroll Now</button>
						</div>

					</details>
				</span>
			</section>
		`;
	}

	placeholder.innerHTML = out;
});