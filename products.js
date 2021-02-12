class Product {
    constructor(title, description, category, price, rating, weight, image) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.rating = rating;
        this.weight = weight;
        this.image = image;
    }
    
}
const ALL_PRODUCTS = []

let instantPot = new Product (
    "Instant Pot Max",
    "Pressure Cooker, 9 in 1 Best for Canning with 15PSI and serilizer, 6QT",
    "Home & Kitchen",
    99.99,
    4.7,
    14.2,
    "imgs/instant-pot.png"
);
ALL_PRODUCTS.push(instantPot);

let seniorWallDecal = new Product (
    "Wall Monkey Decal: Senior Woman with Asthma",
    "Hang anywhere in your house!  Wall paint-safe; 48in x 41in decal; senior woman with asthma",
    "Appliances > Refridgerators, Freezers & Ice Makers",
    49.99,
    5,
    1.5,
    "imgs/senior-wall-decal.png"
);
ALL_PRODUCTS.push(seniorWallDecal);

let fingerPuppets = new Product (
    "Tiny Hand Finger Puppets",
    "Pack of 12, instead of the usual 10!  Halloween hand prop accessories; dishwasher safe",
    "Toys & Games",
    10.97,
    4.7,
    .25,
    "imgs/tinyhands.png"
);
ALL_PRODUCTS.push(fingerPuppets);

let catTissueHolder = new Product (
    "Catt Butt Tissue Holder",
    "Orange Tabby Cat. Fits square tissue box. Made from molded resin. Microwave Safe",
    "Home & Kitchen > Bath > Bathroom Accessories > Holders & Dispensers > Tissue Holders",
    39.95,
    4.7,
    30,
    "imgs/cat-tissue-holder.png"
);
ALL_PRODUCTS.push(catTissueHolder);

let karaokeHorn = new Product (
    "Karaoke Horn",
    "Take your voice where ever you go! Ultra Heat safe silicone up to 550F, for the HOT voices out there.  Machine wash cold; tumble dry",
    "None",
    69.36,
    3.5,
    .58,
    "imgs/k-horn.png"
);
ALL_PRODUCTS.push(karaokeHorn);


let fingerCovers = new Product (
    "Finger Covers",
    "Keep your fingers CLEAN with these finger food covers.  Enjoy your cheetos with peace.  3ct, red.  Washable, reusable, dishwasher safe.",
    "Home & Kitchen > Kitchen & Dining > Kitchen Utensils & Gadgets",
    18.99,
    4.4,
    .4,
    "imgs/finger-covers.png"
);
ALL_PRODUCTS.push(fingerCovers);

let desktopFridge = new Product (
    "Desktop Fridge",
    "Keep your beverage cold with this USB powered Minifridge.  Single can capacity - 24cu Inches.  Red plastic.",
    "Appliances > Refridgerators, Freezers & Ice Makers",
    23.97,
    3.4,
    1.41,
    "imgs/desktop-fridge.png"
);
ALL_PRODUCTS.push(desktopFridge)

let baconBandageStrips = new Product (
    "Bacon Bandage Strips", 
    "Ouch! That smarts! Treat your minor cuts, scrapes and scratches with the incredible healing power of meat.",
    "Health & Household > Bandaging Supplies, Adhesive Bandages",
    5.99,
    1.5,
    "bacon-bandaid.png"
);
ALL_PRODUCTS.push(baconBandageStrips);

let nicCagePillow = new Product (
    "Nicolas Cage Sequin Pillow",
    "Get to sleep right next to Nic Cage every night!  Magic sequin pillow case and pillow from red to Nic Cage.",
    "Bedding > Decorative Pillows, Inserts & Covers > Throw Pillows",
    18.99,
    4.5,
    1.5,
    "imgs/nic-cage-pillow.png"
);
ALL_PRODUCTS.push(nicCagePillow);

let roastBeefandSalt = new Product (
    "Bath Salts: Roast Beef Sandwich",
    "Amber bath salts: Luxury.  Best gifts for best friends, significant other.  Au jus french dip.",
    "Bath & Bathing Accessories > Bath > Minerals & Salts",
    14.95,
    4.7,
    .5,
    "imgs/roast-beef-bath.png"
);   
ALL_PRODUCTS.push(roastBeefandSalt);

