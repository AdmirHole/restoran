$(document).ready(function () {
    (function (document, src, libName, config) {
        var script = document.createElement('script');
        script.src = src;
        script.async = true;
        var firstScriptElement = document.getElementsByTagName('script')[0];
        script.onload = function () {
            for (var namespace in config) {
                if (config.hasOwnProperty(namespace)) {
                    window[libName].setup.setConfig(namespace, config[namespace]);
                }
            }
            window[libName].register();
        };

        firstScriptElement.parentNode.insertBefore(script, firstScriptElement);
    })(document, 'https://secure.avangate.com/checkout/client/twoCoInlineCart.js', 'TwoCoInlineCart', {
        "app": {
            "merchant": "250805647489",
            "iframeLoad": "checkout"
        },
        "cart": {
            "host": "https:\/\/secure.2checkout.com",
            "customization": "inline"
        }
    });

    $(document).on("click", ".btn-buy-now", function () {
        let userId = $(".userId").text();
        let productId = $(this).siblings('h4').text();
        let projectId = $(this).siblings('h3').text();
        let productName = $(this).siblings("div").find(".card-title").text();
        let productPrice = $(this).siblings("h5").text().replace(' $', '');
        let productType = $(this).siblings("div").find(".card-text span").text();
        let unit = '';
        let length;
        switch (productType) {
            case 'Monthly':
                unit = 'MONTH';
                length = 1
                break;
            case 'Half a year':
                unit = 'MONTH';
                length = 6
                break;
            case 'Yearly':
                unit = 'YEAR';
                length = 1
                break;
            default:
                unit = 'DAY';
                length = 1
        }
        TwoCoInlineCart.setup.setMode('DYNAMIC');
        TwoCoInlineCart.cart.setCurrency('USD');

        TwoCoInlineCart.products.removeAll();
        TwoCoInlineCart.products.add({
            name: productName,
            quantity: 1,
            price: productPrice,
            recurrence: {
                unit: unit,
                length: length
            },
            duration: {
                unit: 'FOREVER',
                length: 1
            },
            renewalPrice: parseInt(productPrice)
        });
        TwoCoInlineCart.cart.setReturnMethod({
            type: 'redirect',
            url: 'https://admin.lab387.com/includes/payment.php?uId='+ userId +'&pId='+ projectId +'&productId='+ productId +''
        });
        TwoCoInlineCart.cart.checkout();
    });
})