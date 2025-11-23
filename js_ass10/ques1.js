$(document).ready(function () {

    $("#search").on("input", function () {
        const query = $(this).val().trim();

        $("#loading").show();    
        $("#results").empty();   
        $.ajax({
            url: "http://localhost:3001/products?q=" + query,
            method: "GET",

            success: function (data) {
                $("#loading").hide();  

                if (data.length === 0) {
                    $("#results").html("<p>No products found</p>");
                    return;
                }

                data.forEach(product => {
                    $("#results").append(`
                        <div class="product">
                            <img src="${product.image}" width="70" height="70">
                            <div>
                                <h4>${product.name}</h4>
                                <p>₹${product.price}</p>
                            </div>
                        </div>
                    `);
                });
            }
        });
    });

});
