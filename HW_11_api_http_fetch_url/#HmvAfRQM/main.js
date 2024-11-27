let wrapper = document.getElementById(`wrapper`);

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(({carts}) => {
        console.log(carts)
        for (const cart of carts) {
            const div = document.createElement("div");
            div.classList.add(`cartCont`);
            const info = document.createElement("div");
            info.innerText = `
            userId: ${cart.userId},
            discountedTotal: ${cart.discountedTotal},
            id:${cart.id},
            total: ${cart.total},
            totalProducts: ${cart.totalProducts},
            totalQuantity: ${cart.totalQuantity},
            `;
            let ol = document.createElement("ol");
            for (const product of cart.products) {


                let li = document.createElement(`li`);
                li.innerText = `
                   id: ${product.id},
                  title: ${product.title},
                  price:${product.price}
                  quantity: ${product.quantity},
                  total: ${product.total},
                  discountPercentage: ${product.discountPercentage},
                  discountedTotal: ${product.discountedTotal}
                `;
                let img = document.createElement("img");
                img.src = product.thumbnail;
                li.append(img);
                ol.append(li);
        }
           div.append(info, ol);
            wrapper.append(div);
        }

    });
