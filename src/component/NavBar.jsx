import { Stack, Button, Flex, Center } from "@chakra-ui/react";
import { SearchBar } from "./SearchBar";
import "./NavBar.css"

const NavBar = () => {
    return (
        <>
        <div className="navbar">
            <Stack spacing={4} direction="row" align="center" m="1rem">
                <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                    width={160}
                    height={40}
                    title="Flipkart"
                />
                <SearchBar />
                <div className="H6-NpN _3N4_BX">
                    <a
                        className="_1TOQfO"
                        title="Login"
                        aria-haspopup="true"
                        href="/account/login?ret=/"
                    >
                        <img
                            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
                            alt="Login"
                            className="-dOa_b L_FVxe"
                            width={24}
                            height={24}
                        />
                        <span>Login</span>
                    </a>
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K"
                        alt="Chevron"
                        className="-dOa_b XdYXbi"
                        width={12}
                        height={12}
                    />
                </div>

                <div className="_38VF5e">
                    <a
                        href="/viewcart?exploreMode=true&preference=FLIPKART"
                        title="Cart"
                        className="_3RX0a-"
                    >
                        <img
                            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                            alt="Cart"
                            className="_1XmrCc"
                            width={24}
                            height={24}
                        />
                    </a>
                    <a
                        className="_1krdK5 _3jeYYh"
                        href="/viewcart?exploreMode=true&preference=FLIPKART"
                        title="Cart"
                    >
                        Cart
                    </a>
                </div>

                <div className="_38VF5e">
                    <a
                        href="https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect"
                        title="Become a Seller"
                        className="_3RX0a- _3jeYYh"
                    >
                        <img
                            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
                            alt="Become a Seller"
                            className="_1XmrCc"
                        />
                    </a>
                    <a
                        className="_1krdK5 _3jeYYh"
                        href="https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect"
                        title="Become a Seller"
                    >
                        Become a Seller
                    </a>
                </div>

                <div className="H6-NpN">
                    <a
                        className="_1TOQfO"
                        title="Dropdown with more help links"
                        aria-haspopup="true"
                        href="#"
                    >
                        <img
                            className="-dOa_b"
                            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"
                            width={24}
                            height={24}
                            alt="Dropdown with more help links"
                        />
                    </a>
                </div>

            </Stack>
            </div>
        </>
    );
};

export default NavBar;