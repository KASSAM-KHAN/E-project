    const container = document.getElementById('cake-gallery');
    
    cakeData.forEach((cake, index) => {
        const card = `
            <div class="product-card">
                <img src="${cake.img}" alt="${cake.title}">
                <p><strong>${cake.title}</strong></p>
                <p>Code: ${cake.code}</p>
                <p>Price: PKR ${cake.price}</p>
                <button class="btn-details" onclick="openZoom(${index})">Details</button>
                <button class="btn-order" onclick="alert('Added to cart!')">Order</button>
            </div>
        `;
        container.innerHTML += card;
    });

    // OPEN NEW WINDOW
    function openZoom(index) {
        const cake = cakeData[index];
        
        const url = `zoom.html?img=${encodeURIComponent(cake.img)}` +
                    `&title=${encodeURIComponent(cake.title)}` +
                    `&code=${encodeURIComponent(cake.code)}` +
                    `&price=${encodeURIComponent(cake.price)}` +
                    `&desc=${encodeURIComponent(cake.desc)}` +
                    `&shape=${encodeURIComponent(cake.shape)}` +
                    `&flavour=${encodeURIComponent(cake.flavour)}` +
                    `&texture=${encodeURIComponent(cake.texture)}` +
                    `&frosting=${encodeURIComponent(cake.frosting)}` +
                    `&bestfor=${encodeURIComponent(cake.bestfor)}`;
       
        window.open(url, '_blank', 'width=1100,height=800');
    }