import { test } from "@playwright/test";
test.setTimeout(150000);

// Function to log in to the website
async function login(page) {
    await page.goto("https://exortstore.com/login");
    await page.getByPlaceholder("Enter email").fill("preranagiri28@gmail.com");
    await page.getByPlaceholder("Enter password").fill("preranagiri@123");
    await page.getByRole("button", { name: "Log In" }).click();
}

// Function to search for a product and add it to the cart
async function searchAndAddToCart(page, searchText, productName) {
    await page.getByPlaceholder("Search...").fill(searchText);
    await page.getByPlaceholder("Search...").press("Enter");
    await page.getByRole("link", { name: productName }).click();
    await page.getByRole("button", { name: " Add to Cart" }).click();
}

// Function to log out of the website
async function logout(page) {
    await page.getByRole("link", { name: "Prerana Giri Prerana Giri " }).click();
    await page.locator("li").filter({ hasText: "Logout" }).nth(1).click();
}

// Test case for login
test("login test", async({ page }) => {
    await page.goto("https://exortstore.com/");
    await page.getByRole("link", { name: "u", exact: true }).click();
    await login(page);
});

// Test case for searching and adding a product to the cart
test("search and add to cart - hyperbar", async({ page }) => {
    await page.goto("https://exortstore.com/");
    await page.getByRole("link", { name: "u", exact: true }).click();
    await login(page);
    await searchAndAddToCart(page, "hyperbar", "20% Off Hyperbar Ultra 12000");
});

// Test case for searching and adding another product to the cart
test("search and add to cart - water bottle", async({ page }) => {
    await page.goto("https://exortstore.com/");
    await page.getByRole("link", { name: "u", exact: true }).click();
    await login(page);
    await searchAndAddToCart(
        page,
        "water bottle",
        "Air Up Scented Water Bottle With Flavor Pods"
    );
});

// Test case for logout
test("logout test", async({ page }) => {
    await page.goto("https://exortstore.com/");
    await page.getByRole("link", { name: "u", exact: true }).click();
    await login(page);
    await searchAndAddToCart(page, "hyperbar", "20% Off Hyperbar Ultra 12000"); // Example action before logout
    await logout(page);
});


