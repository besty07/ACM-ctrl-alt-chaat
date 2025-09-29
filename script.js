// Varad Khadilkar,SE,COMPS-A,58


const foodItems = [
    { name: "Idli", img: "idli.jpg", cuisine: "south", info: "Soft, fluffy steamed rice cakes that are like cloud storage for your taste buds!" },
    { name: "Dosa", img: "dosa.jpg", cuisine: "south", info: "Crispy golden crepe that's thinner than my patience during code compilation!" },
    { name: "Vada Pav", img: "vadapav.jpg", cuisine: "maharashtrian", info: "If you don't know what's this then what are you even doing bruh🥀" },
    { name: "Bhel", img: "bhel.jpg", cuisine: "maharashtrian", info: "Crunchy chaos in a bowl - like my code before I learned proper structure!" },
    { name: "Misal Pav", img: "misal.jpg", cuisine: "maharashtrian", info: "Spicy sprout curry that'll debug your taste buds and restart your appetite!" },
    { name: "Puranpoli", img: "puranpoli.jpg", cuisine: "maharashtrian", info: "Sweet flatbread stuffed with jaggery - like finding a hidden easter egg in code!" },
    { name: "Modak", img: "modak.jpg", cuisine: "maharashtrian", info: "Lord Ganesha's favorite dumpling - sweet success in every bite!" },
    { name: "Pav Bhaji", img: "pavbhaji.jpg", cuisine: "north", info: "Buttery mashed vegetables with bread - comfort food that never throws exceptions!" },
    { name: "Pani Puri", img: "panipuri.jpg", cuisine: "north", info: "Crispy shells filled with tangy water - one byte at a time!" },
    { name: "Samosa", img: "samosa.jpg", cuisine: "north", info: "Triangular packets of joy - perfectly wrapped like well-documented code!" },
    { name: "Chole Bhature", img: "chole.jpg", cuisine: "north", info: "Spicy chickpeas with fluffy bread - a combo that always compiles successfully!" },
    { name: "Pakora", img: "pakoda.jpg", cuisine: "snacks", info: "Deep-fried fritters that are crunchier than my keyboard at 3 AM!" },
    { name: "Jalebi", img: "jalebi.jpg", cuisine: "snacks", info: "Spiral sweets soaked in syrup - like infinite loops, but way more delicious!" },
    { name: "Lassi", img: "lassi.jpg", cuisine: "snacks", info: "Cooling yogurt drink that's like clearing your cache - refreshing and essential!" },
    { name: "Upma", img: "upma.jpg", cuisine: "south", info: "Savory semolina porridge - like your code before adding the semicolons!" },
    { name: "Sabudana Khichdi", img: "sabu.jpg", cuisine: "maharashtrian", info: "Tapioca pearls sautéed with peanuts—like tiny nuggets of happiness in a loop!" },
    { name: "Poha", img: "poha.jpg", cuisine: "maharashtrian", info: "Flattened rice breakfast that loads faster than your first app on startup!" },
    { name: "Rajma Chawal", img: "rajma.jpg", cuisine: "north", info: "Kidney beans with rice—comfort food that runs without errors every time!" },
    { name: "Aloo Paratha", img: "aloo.jpg", cuisine: "north", info: "Stuffed bread with potato goodness—basically a carb-powered CPU upgrade!" },
    { name: "Paneer Tikka", img: "paneer.jpg", cuisine: "north", info: "Grilled spiced paneer—like your code after adding that perfect function!" },
    { name: "Momos", img: "momos.jpg", cuisine: "indo-chinese", info: "Steamed dumplings that are wrapped tighter than your exception handling!" },
    { name: "Hakka Noodles", img: "hakka.jpg", cuisine: "indo-chinese", info: "Stir-fried noodles with veggies—like threading multiple processes, but tastier!" },
    { name: "Manchurian", img: "manchurian.jpg", cuisine: "indo-chinese", info: "Fried veggie balls in sauce—like debugging, messy but satisfying!" },
    { name: "Paneer 65", img: "pan65.jpg", cuisine: "indo-chinese", info: "Spicy paneer that kicks harder than a null pointer exception!" },
    { name: "Fried Rice", img: "fried.jpg", cuisine: "indo-chinese", info: "Rice with veggies and sauce—simple ingredients, complex flavors, like good code!" },
    { name: "Dhokla", img: "dhokla.jpg", cuisine: "snacks", info: "Soft, spongy, slightly tangy snack—like a happy little breakpoint in your day!" },
    { name: "Sev Puri", img: "sevpuri.jpg", cuisine: "snacks", info: "Crispy base with tangy toppings—chaotic, messy, and super fun, like coding with friends!" }
];


const foodGrid = document.getElementById("foodGrid");
const cuisineSelect = document.getElementById("cuisine");
const taglineEl = document.querySelector(".tagline");

const foodPuns = [
    "UI/UX = Ultimate Idli Experience 🍽️",
    "Stack Overflow? More like Stack of Samosas 🥟",
    "Cache me if you can — Pani Puri edition 😎",
    "Segmentation Fault? Bro, eat a Jalebi 🍬",
    "Byte into Pav Bhaji, not bytes 💻",
    "Git commit to Dosa, push to mouth 🤤",
    "My code is like idli batter—soft, fluffy, forever loading ⏳",
    "Debugging = eating pani puri blindfolded 👀💦",
    "Loops are like biryani layers—too many and I’m stuck 😵",
    "My functions be like samosas—stuffed with bugs 🤯",
    "No comments? That sambar’s bland, bro 🌶️",
    "Variables are like chutney—spicy and confusing 🌶️😂",
    "Recursion = thali vibes, keeps coming back 🍛🔁",
    "No version control = bland masala, sad coding 😭",
    "Compile errors be like overcooked pakoras—crunchy pain 😬",
    "Infinite loops = laddoo overdose 🪐🍬",
    "Merge conflicts = too much tamarind, chaos everywhere 😵‍💫",
    "Deploying untested code = jalebi in a hurricane 🍥🌪️",
    "404: Hunger Not Found 🔍",
"try { eatFood() } catch(spice) { drinkLassi() } 🌶️",
"while(hungry) { eat(chaat); } 🔄",
"const happiness = samosa + chai ☕"
];



function shuffleTagline() {
    taglineEl.style.opacity = 0;
    setTimeout(() => {
        taglineEl.textContent = foodPuns[Math.floor(Math.random() * foodPuns.length)];
        taglineEl.style.opacity = 1;
    }, 400);
}


shuffleTagline();
setInterval(shuffleTagline, 5000);


function renderFoods(filter) {
    foodGrid.innerHTML = "";
    foodItems
        .filter(item => filter === "all" || item.cuisine === filter)
        .forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <img src="${item.img}" alt="${item.name}">
                        <h3>${item.name}</h3>
                    </div>
                    <div class="card-back">
                        <p>${item.info}</p>
                    </div>
                </div>
            `;
        
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
            
            foodGrid.appendChild(card);
        });
}


cuisineSelect.addEventListener("change", () => {
    renderFoods(cuisineSelect.value);
});


renderFoods("all");
