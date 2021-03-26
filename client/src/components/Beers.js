import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addFavoriteBeer,
  deleteFavoriteBeer,
  addWishlistBeer,
  deleteWishlistBeer,
  addCity,
  addStyle,
  addBeers,
} from "./redux/action";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Card,
} from "react-bootstrap";
import styles from "./Beers.module.css";

const emergencyBeers = [
  {
    name: "SweetWater Brewing Company",
    description:
      "February 17, 1997 marked the official beginning of SweetWater Brewery, and a new style of brewing and selling beer in Atlanta as the boys wandered around Atlanta in an old van with Freddy's dog Badger. After ending up on the wrong side of the tracks a few times, they were finally pointed in the direction of Virginia-Highlands and found a few bars willing to take a chance on them. \"We'll give you a shot as long as your dog stops begging for leftovers on our patio\" was the cautious approval they needed to get the brand rolling.\r\n\r\nSweetWater's second and current location is in Midtown Atlanta, adjacent to Ansley Park, in the Armour Circle Industrial Park just off of Piedmont and Monroe. The boys saved all of their pennies to buy the 25,000 square feet of brewing goodness and smack in the middle of all the action. Since the company began we've wanted to be closer to our homes, the bars and stores that sell our beer, and all the good folks that drink it. Fortunately seven years of great growth gave the company that opportunity. We learned a lot from that location and left all those mistakes behind as we built our new home. SweetWater Brewing Company has been here since 2004 and it feels good to be settled in. Our new home has enough capacity to brew 100,000 barrels of beer a year (A few more years at this rate.)",
    website: "http://www.sweetwaterbrew.com/",
    established: "1997",
    images:
      "https://brewerydb-images.s3.amazonaws.com/brewery/TMc6H2/upload_3il9e7-icon.png",
    streetAddress: "195 Ottley Drive",
    locality: "Atlanta",
    region: "Georgia",
    postalCode: "30324",
    phone: "404-691-2537",
    wishlist: false,
    favorite: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Lagunitas Brewing Company",
    description:
      "From our earliest days of striving to make consistently good beer, and instead making beer that ranged from vile, to barely drinkable, to wonderful, to elegant, to questionable-at-best. From being castigated by our West Marin neighbors to finally suffering an 'eviction' by our West Marin septic system. From landing in the welcoming arms of Petaluma, and actually getting our beer into bottles, onto the streets, and into the hands of sympathatic beer geeks, to steadily losing less money each month. From all this and more, Lagunitas Brewing Company is emerging as a battle-tested brewery capable of making great beer out of goat's milk, brambles, and asphalt on the surface of the Moon, if need be.\r\n\r\nAs the poet once said, 'Where, but for the grace of God and the kindness of strangers, go I'. Where go we indeed, whatever that means.",
    website: "http://www.lagunitas.com/",
    established: "1993",
    images:
      "https://brewerydb-images.s3.amazonaws.com/brewery/nLsoQ9/upload_WqZkvw-icon.png",
    streetAddress: "1280 North McDowell Boulevard",
    locality: "Petaluma",
    region: "California",
    postalCode: "94954",
    phone: "707-769-4495",
    wishlist: true,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "SweetWater IPA",
    description:
      "This mammoth IPA is defined by generous quantities of juicy American hops. The extensive dry hopping process contributes to its bright and flavorful character. This beer is unfiltered to leave all the natural flavors intact and bottle conditioned to stay super fresh.",
    link: "https://www.sweetwaterbrew.com/brews/sweetwater-ipa/",
    image:
      "https://www.sweetwaterbrew.com/wp-content/uploads/sw-brew-product-vignette.png",
    brewery: "SweetWater Brewing Company",
    breweryLink: "https://www.sweetwaterbrew.com/",
    city: "Atlanta",
    abv: "6.3%",
    ibu: "50",
    style: "IPA",
    wishlist: true,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Goin' Coastal",
    description:
      "Slip into some sunshine and step off the grid by Goin’ Coastal with this pineapple laced IPA. The bright aromas of the five citrus hop additions are accentuated by the tropical fruit of the pineapple. And just like those three day weekends, its finish is quick. Golden copper in color with a full malt bill to bring the balance to our year round offering.",
    link: "https://www.sweetwaterbrew.com/brews/goin-coastal-ipa/",
    image:
      "https://www.sweetwaterbrew.com/wp-content/uploads/2017/07/product-image-brew_goin-coastal.png",
    brewery: "SweetWater Brewing Company",
    breweryLink: "https://www.sweetwaterbrew.com/",
    city: "Atlanta",
    abv: "6.1%",
    ibu: "45",
    style: "IPA",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Pliny the Elder",
    description:
      "Pliny the Elder is brewed with Amarillo, Centennial, CTZ, and Simcoe hops. It is well-balanced with malt, hops, and alcohol, slightly bitter with a fresh hop aroma of floral, citrus, and pine. Best enjoyed FRESH! That is why we make it in such limited supply. Actual bottling date is printed on each bottle! Where did we come up with this name? Back in the year 2000, our friend, Vic Kralj, who owns the Bistro in Hayward, California, decided to have his first ever Double IPA festival. Vic invited 10 breweries, 6 of whom (including us) had to brew something special for him since we had nothing that would fall under this style category. Vinnie had made a Double IPA at Blind Pig Brewing Co. in 1994, but was not brewing one at Russian River Brewing Co. at the time. He had an idea for the recipe, but not a name. After much research in beer books, brainstorming, and deliberation, we came up with “Pliny the Elder”. Pliny, the man, lived in the first century- 23 to 79 A.D. According to our brewing references, he and his contemporaries either created the botanical name or at least wrote about Lupus Salictarius, or hops, currently known as Humulus Lupulus. That was a very early reference to an important part of any Double IPA! Pliny, the beer has now become one of our flagship brews!" +
      "Pliny the Elder was immortalized by his nephew, Pliny the Younger, who wrote about his uncle succumbing to ash and smoke during the eruption of Mt. Vesuvius in 79 A.D. while rescuing people. Cheers to the scholar, historian, officer, writer, and Roman Naturalist- Pliny the Elder!",
    link: "https://russianriverbrewing.com/pliny-the-elder/",
    image:
      "https://russianriverbrewing.com/wp-content/uploads/2018/04/yearroundbottles_large_6b60a081-5de8-4023-a04a-5eafc669b48e.jpg",
    brewery: "Russian River Brewing Company",
    breweryLink: "https://russianriverbrewing.com/",
    city: "Santa Rosa",
    abv: "8.0%",
    ibu: "N/A",
    style: "IPA",
    wishlist: false,
    favorite: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Dirty Beaches",
    description:
      "WE GOT DOWN AND DIRTY WITH OUR TROPICAL WHEAT. A SPIRITED COLLAB WITH VICTORY BRANDS. THIS HYBRID WHEAT & IPA WHETS YOUR PALATE. JUST LIKE YOU BEACHES LIKE IT. EASY DRINKING WITH A SOFT CREAMY BODY AND WAVES OF TROPICAL FRUIT AROMAS. DIRTY BEACHES IS FILTHY GOOD.",
    link: "https://scofflawbeer.com/beaches.html",
    image: "https://scofflawbeer.com/img/SCOFFLAW-DIRTYBEACHES-1000X1000.png",
    brewery: "Scofflaw Brewing Company",
    breweryLink: "https://scofflawbeer.com/",
    city: "Atlanta",
    abv: "6.3%",
    ibu: "45",
    style: "Wheat",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Breakfast Stout",
    description:
      "The coffee lover’s consummate beer. Brewed with an abundance of flaked oats, bitter and imported chocolates, and two types of coffee, this stout has an intense fresh-roasted java nose topped with a frothy, cinnamon-colored head that goes forever.",
    link: "https://foundersbrewing.com/our-beer/breakfast-stout/",
    image:
      "https://foundersbrewing.com/wp-content/uploads/2017/08/2018_BreakfastStout_Featured.jpg",
    brewery: "Founders Brewing Company",
    breweryLink: "https://foundersbrewing.com/",
    city: "Grand Rapids",
    abv: "8.3%",
    ibu: "60",
    style: "Stout",
    wishlist: false,
    favorite: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Porter",
    description:
      "Pours silky black with a creamy tan head. The nose is sweet with strong chocolate and caramel malt presence. No absence of hops gives Founders’ robust porter the full flavor you deserve and expect. Cozy like velvet. It’s a lover, not a fighter.",
    link: "https://foundersbrewing.com/our-beer/porter/",
    image:
      "https://foundersbrewing.com/wp-content/uploads/2017/08/2018_Porter_Featured.jpg",
    brewery: "Founders Brewing Company",
    breweryLink: "https://foundersbrewing.com/",
    city: "Grand Rapids",
    abv: "6.5%",
    ibu: "45",
    style: "Porter",
    wishlist: false,
    favorite: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Dr. Robot Blackberry Lemon Sour",
    description:
      "A tart, fruity sour beer. Dr. Robot is as playful as its name. After souring to a delightfully tart level, we add blackberry juice and lemon zest to enhance and balance the flavor. The juice gives this beer a pink hue. The perfect blend of sweet and sour, Dr. Robot is a refreshing year-round sipper.",
    link: "https://mondaynightbrewing.com/beers/dr-robot/",
    image:
      "https://i0.wp.com/mondaynightbrewing.com/wp-content/uploads/2017/09/robot-for-website-01-01-01-01-01.png?resize=1024%2C1024&ssl=1",
    brewery: "Monday Night Brewing",
    breweryLink: "https://mondaynightbrewing.com/",
    city: "Atlanta",
    abv: "5%",
    ibu: "7",
    style: "Sour",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Guide Beer",
    description:
      "Guide Beer is made in honor of guides. Those men and women who lead us to swift waters, into the shadows of tall trees, and through the unexplored terrain of ourselves. 11% of the profit from this beer will help guides who are no longer able to pursue their life’s work. It’s our way of saying “Thank You” to a group of people whose contribution to society is both underestimated and immeasurable.",
    link: "https://www.sweetwaterbrew.com/brews/guide-beer/",
    image:
      "https://www.sweetwaterbrew.com/wp-content/uploads/sw-brew-product-vignette-GuideBeer-12oz.png",
    brewery: "SweetWater Brewing Company",
    breweryLink: "https://www.sweetwaterbrew.com/",
    city: "Atlanta",
    abv: "4%",
    ibu: "21",
    style: "Lager",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Hopsecutioner",
    description:
      "Light copper in color, this IPA has an aroma of fresh pine and citrus. A strong malt backbone provides balance to an assertive hop bitterness.",
    link: "https://www.terrapinbeer.com/beer/hopsecutioner",
    image:
      "https://assets-global.website-files.com/5dd2bab4d8e6f2cf71c78e4e/5e1f364f0263e77216ad5a55_Hopsecutioner%20copy.png",
    brewery: "Terrapin Beer Company",
    breweryLink: "https://www.terrapinbeer.com/",
    city: "Athens",
    abv: "7.3%",
    ibu: "60",
    style: "IPA",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Elusory",
    description:
      "Triple dry-hopped hazy IPA loaded with juicy Mosaic hops floating on a bold combination of classic American hops.",
    link: "https://www.orpheusbrewing.com/beers/elusory/",
    image:
      "https://www.orpheusbrewing.com/wp-content/uploads/2020/02/Elusory-Can-Transparent-2.png",
    brewery: "Orpheus Brewing",
    breweryLink: "https://www.orpheusbrewing.com/",
    city: "Atlanta",
    abv: "6.7%",
    ibu: "N/A",
    style: "IPA",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Chooser of the Slain",
    description:
      "A German-style pilsner with all German hops and featuring heritage German Barke Pilsner malt, Choosers of the Slain is refreshingly dry and bitter with a delicate, spicy hop nose and a touch of citrus. The Barke Pilsner malt gives a bready, crackery undertone to keep everything in balance glass after glass.",
    link: "https://www.orpheusbrewing.com/beers/choosers-of-the-slain-2/",
    image:
      "https://www.orpheusbrewing.com/wp-content/uploads/2019/07/WebCan_ChoosersoftheSlain.png",
    brewery: "Orpheus Brewing",
    breweryLink: "https://www.orpheusbrewing.com/",
    city: "Atlanta",
    abv: "4.8%",
    ibu: "N/A",
    style: "Pilsner",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "All You Get is All You Get",
    description:
      "We can be swayed by the illusion that some things are just out of our grasp, but sometimes all you get is all you get. It’s worth realizing how fortunate you still are, and what you have here will not disappoint. Tart, fruity, and a touch sweet, this hazy sour ale is all you really need.",
    link: "https://www.orpheusbrewing.com/beers/all-you-get-is-all-you-get-2/",
    image:
      "https://www.orpheusbrewing.com/wp-content/uploads/2020/01/All-You-Get-e1579121677400.png",
    brewery: "Orpheus Brewing",
    breweryLink: "https://www.orpheusbrewing.com/",
    city: "Atlanta",
    abv: "5%",
    ibu: "N/A",
    style: "Sour",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Anchor Steam",
    description:
      "Anchor Steam® Beer derives its unusual name from the 19th century when “steam” was a nickname for beer brewed on the West Coast of America under primitive conditions and without ice. While the origin of the name remains shrouded in mystery, it likely relates to the original practice of fermenting the beer on San Francisco’s rooftops in a cool climate. In lieu of ice, the foggy night air naturally cooled the fermenting beer, creating steam off the warm open pans. Once a nickname for any Californian or West Coast beer brewed under these conditions, today the name “steam” is a trademark of Anchor Brewing and applies only to the singular process and taste of our flagship brand - San Francisco’s original Anchor Steam® Beer. The classic of American brewing tradition since 1896.",
    link: "https://www.anchorbrewing.com/beer/anchor_steam",
    image:
      "https://s3.amazonaws.com/anchor_cms_production/beers/1/original/Steam_CanBottlePint_v2.png?1530025176",
    brewery: "Anchor Brewing",
    breweryLink: "https://www.anchorbrewing.com",
    city: "San Francisco",
    abv: "4.9%",
    ibu: "N/A",
    style: "Lager",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Anchor Porter",
    description:
      "With deep black color, a thick, creamy head, rich chocolate, toffee and coffee flavors, and full-bodied smoothness, Anchor Porter® is the epitome of a handcrafted dark beer. A blend of specially roasted pale, caramel, chocolate, and black malts, along with our top-fermenting yeast, creates complexity without bitterness. The brew is hopped at a high rate, and naturally carbonated. The result is dark in the glass, but surprisingly light on the palate. Anchor Porter® became the first modern American porter style beer when it was introduced in 1972. Over 40 years later, our porter continues to reward those who look beyond its intimidating appearance to discover its smooth, full-bodied drinkability. Anchor Porter® is the definitive American Porter.",
    link: "https://www.anchorbrewing.com/beer/anchor_porter",
    image:
      "https://s3.amazonaws.com/anchor_cms_production/beers/3/original/porter-bio.png?1470867514",
    brewery: "Anchor Brewing",
    breweryLink: "https://www.anchorbrewing.com",
    city: "San Francisco",
    abv: "5.6%",
    ibu: "N/A",
    style: "Porter",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "San Franpsycho IPA",
    description:
      "Anchor Brewing is synonymous with San Francisco culture, and we love blending our passion for beer with our passion for community. For our Spring/Summer collaboration brew, we found an amazing partner with San Franpsycho®—a vibrant and local company that’s equally enthusiastic about supporting and celebrating the community. San Franpsycho® IPA is a delicious, balanced and easy-drinking beer that finishes with floral hops and big, juicy notes of peaches and apricots making it the perfect sessionable summertime IPA. This beer is truly an original, just like the city itself, and now we’re proud to share this brew with our friends and fans all over the world. So together, let’s all crack open a beer and savor the city. Brewed with 2-row pale, red wheat and acidulated malt, San Franpsycho® IPA pours a hazy golden straw color with a white fluffy head. The mouthfeel is creamy and smooth yet mildly effervescent with a hint of back-end tartness. San Franpsycho® IPA is fermented with a mixed culture of yeast to create a unique and fruity estery nose, unlike any other IPA from Anchor. Anchor brewers add peach and apricot fruit puree during the secondary fermentation, giving the beer a pleasant hint of sweetness and abundantly fruity aromas of peach, apricot, and pineapple with a bit of funky dank. The name San Franpsycho® IPA speaks to San Francisco, but specifically to Ocean Beach and the Outer Sunset neighborhood. The label design is a classic view from the Noriega hilltop looking down to the Outer Sunset and Ocean Beach, where San Franpsycho® was born.",
    link: "https://www.anchorbrewing.com/beer/san_franpsycho_ipa",
    image:
      "https://s3.amazonaws.com/anchor_cms_production/beers/41/original/Detailpage_CanandPint_SFPcan.png?1555431683",
    brewery: "Anchor Brewing",
    breweryLink: "https://www.anchorbrewing.com",
    city: "San Francisco",
    abv: "6.3%",
    ibu: "N/A",
    style: "IPA",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Blue Moon Belgian Wheat",
    description:
      "A wheat beer brewed with orange peel for a subtle sweetness and bright, citrus aroma.",
    link:
      "https://www.bluemoonbrewingcompany.com/currently-available/blue-moon-belgian-white",
    image:
      "https://www.bluemoonbrewingcompany.com/sites/bluemoon/files/styles/beers/public/beers/2018-06/BlueMoon-BelgianWhite.png?itok=AonO8W6_",
    brewery: "Blue Moon Brewing Company",
    breweryLink: "https://www.bluemoonbrewingcompany.com/",
    city: "Denver",
    abv: "5.4%",
    ibu: "9",
    style: "Wheat",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Vliet",
    description: "Tasting Notes: Clean, Sweet, Hay, Herbal Hops, Verdant",
    link: "https://threesbrewing.com/beers/vliet",
    image:
      "https://images.ctfassets.net/lwrxrme3djuw/7An77AhOSEReR3PCCbMfLQ/0bdd9284f3966f09ac4ba0d2474a095e/Beer_Images-Vliet_Alexander_Bohn_2018_Square.jpg?w=1200",
    brewery: "Threes Brewing",
    breweryLink: "https://threesbrewing.com/",
    city: "New York",
    abv: "5.2%",
    ibu: "N/A",
    style: "Pilsner",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Lay Low",
    description:
      "At just 90 calories and 3.2% ABV, Lay Low is an IPA that packs in a surprising amount of character. Hints of tropical fruit and pine wrestle with a pleasant hop bitternes and a slightly sweet malt profile. It's the perfect beer for taming tigers. If you've already tamed all the tigers, it's still a great IPA to slay all day.",
    link: "https://mondaynightbrewing.com/beers/lay-low/",
    image:
      "https://i0.wp.com/mondaynightbrewing.com/wp-content/uploads/2019/12/lay-low-mnb-big.png?resize=1024%2C1024&ssl=1",
    brewery: "Monday Night Brewing",
    breweryLink: "https://mondaynightbrewing.com/",
    city: "Atlanta",
    abv: "3.2%",
    ibu: "30",
    style: "IPA",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Lundi",
    description:
      "Say bonjour to Lundi, a refined IPA from Monday Night Brewing. Pouring a slightly hazy royal yellow, Lundi abounds with citrus notes on the nose. The first sip is soft and juicy with a pleasant sweetness thanks to the malt backbone of pilsner, oats and wheat. It contains all the tangerine and grapefruit notes of Mosaic, Simcoe and El Dorado hops, with little of the expected bitterness.  Pair Lundi with an elegant charcuterie plate (include Bleu D’Avergine and Epoisses cheeses), a savory tortière, or chicken paillard. And definitely pair it with great friends and good conversation. #bonlundi",
    link: "https://mondaynightbrewing.com/beers/lundi/",
    image:
      "https://i2.wp.com/mondaynightbrewing.com/wp-content/uploads/2019/06/Lundi-12-oz-mockup-no-water2A-01-e1569336913250.png?w=1080&ssl=1",
    brewery: "Monday Night Brewing",
    breweryLink: "https://mondaynightbrewing.com/",
    city: "Atlanta",
    abv: "7.1%",
    ibu: "55",
    style: "IPA",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Blind Pirate",
    description:
      "A juicy IPA. Pirates love citrus fruits almost as much as they love blood. If the phrase “you are what you eat” is true, then pirates are blood oranges. If the phrase “you are what you drink” is true, you’re about to be an incredibly delicious, juicy hop bomb of an IPA. We add bits of real blood orange to every beer, so you know it’s good.",
    link: "https://mondaynightbrewing.com/beers/blind-pirate/",
    image:
      "https://i1.wp.com/mondaynightbrewing.com/wp-content/uploads/2017/09/BOBP-for-website-01-01-01-01-01.png?resize=1632%2C1632&ssl=1",
    brewery: "Monday Night Brewing",
    breweryLink: "https://mondaynightbrewing.com/",
    city: "Atlanta",
    abv: "7.4%",
    ibu: "55",
    style: "IPA",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Drafty Kilt",
    description:
      "A roasty scotch ale with a hint of smoke. Full-bodied, but not overpowering. Smokey, but not in a creepy bar kind of way. Sweet, but not obnoxiously so. Sound like your ideal mother-in-law? Fair enough, but it also is a pretty dead-on description of our Scotch Ale. In a difficult hop-growing climate, Scottish brewers relied on other ingredients to impart flavor and bitterness – one such ingredient was smoked malt. Drafty Kilt is a dark, malty bombshell of a beer.",
    link: "https://mondaynightbrewing.com/beers/drafty-kilt/",
    image:
      "https://i1.wp.com/mondaynightbrewing.com/wp-content/uploads/2017/09/kilt-for-website-01-01-01-01.png?resize=1632%2C1632&ssl=1",
    brewery: "Monday Night Brewing",
    breweryLink: "https://mondaynightbrewing.com/",
    city: "Atlanta",
    abv: "7.2%",
    ibu: "26",
    style: "Ale",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Tangerine Express IPA",
    description:
      "This ain’t no just-add-juice approach. This one is for adults. We use bountiful whole tangerine purée, which brings pithy, crisp bitterness to the citrus flavor. In addition to the complexities of the tangerine — the likes of which you can only get by using the whole fruit — we judiciously employ just a hint of whole pineapple for a backnote (you’d likely not even pick it out of the mix if we didn’t tell you it was there). We’re not looking for a sweet concoction to appease the “I want my beer to taste like fruit juice” crowd. This is Stone. We like our IPAs to taste like IPAs. Big, bold and not for kids.",
    link:
      "https://www.stonebrewing.com/beer/year-round-releases/stone-tangerine-express-hazy-ipa",
    image: "https://specsonline.com/wp-content/uploads/reload/063625174163.jpg",
    brewery: "Stone Brewing",
    breweryLink: "https://www.stonebrewing.com/",
    city: "San Diego",
    abv: "6.7%",
    ibu: "75",
    style: "IPA",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Tropic of Thunder Lager",
    description:
      "Imagine you set sail for a three hour tour. Let’s say from the Port of Escondido (work with us here). The weather started getting rough. Your tiny ship (but not lunch, thankfully) was tossed. Long story short: You’re marooned on a remote island somewhere near the Tropic of Thunder. The good news is that the Capt. of the S.S. Stone and her brewing kit were among the small cast of colorful characters that survived the rough voyage with you. Mainstays Citra & Mosaic along with newcomer Cashmere hops are joined by their juicy tropical aromas of citrus, pineapple and coconut (try stringing all that together in a catchy tune). The rescue ship will find you all soon enough. For now, set aside the non-working cell phone and lack of social media (again, work with us here), kick back and revel in your moment of tropical island lagoon serenity.",
    link:
      "https://www.stonebrewing.com/beer/year-round-releases/stone-tropic-thunder-lager",
    image:
      "https://beerconnoisseur.com/sites/default/files/stone-tropic-of-thunder-lager-stone-brewing.jpg",
    brewery: "Stone Brewing",
    breweryLink: "https://www.stonebrewing.com/",
    city: "San Diego",
    abv: "5.8%",
    ibu: "45",
    style: "Lager",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Sculpin IPA",
    description:
      "Imagine you set sail for a three hour tour. Let’s say from the Port of Escondido (work with us here). The weather started getting rough. Your tiny ship (but not lunch, thankfully) was tossed. Long story short: You’re marooned on a remote island somewhere near the Tropic of Thunder. The good news is that the Capt. of the S.S. Stone and her brewing kit were among the small cast of colorful characters that survived the rough voyage with you. Mainstays Citra & Mosaic along with newcomer Cashmere hops are joined by their juicy tropical aromas of citrus, pineapple and coconut (try stringing all that together in a catchy tune). The rescue ship will find you all soon enough. For now, set aside the non-working cell phone andOur Sculpin IPA is a great example of what got us into brewing in the first place. After years of experimenting, we knew hopping an ale at five separate stages would produce something special. The result ended up being this gold-medal winning IPA, whose inspired use of hops creates hints of apricot, peach, mango and lemon flavors, but still packs a bit of a sting, just like a Sculpin fish.",
    link: "https://ballastpoint.com/beer/sculpin/",
    image:
      "https://ballastpoint.com/wp-content/uploads/2018/05/12_Sculpin-2.png",
    brewery: "Ballast Point Brewing Company",
    breweryLink: "https://ballastpoint.com/",
    city: "San Diego",
    abv: "7%",
    ibu: "70",
    style: "IPA",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Victory at Sea",
    description:
      "Our Ballast Point Victory at Sea Imperial Porter is a bold, smooth brew with just the right amount of sweetness. We infused this robust porter with vanilla and San Diego’s own Caffe Calabria coffee beans. The subtle roasted notes and minimal acidity of the cold brewed coffee, balances perfectly with the sweet caramel undertones of the malt, creating a winning combination for your palate.",
    link: "https://ballastpoint.com/beer/victory-at-sea/",
    image:
      "https://ballastpoint.com/wp-content/uploads/2018/05/Victory-at-Sea_12oz-Bottle_v3.png",
    brewery: "Ballast Point Brewing Company",
    breweryLink: "https://ballastpoint.com/",
    city: "San Diego",
    abv: "10%",
    ibu: "60",
    style: "Porter",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Pineapple Farm Hazy IPA",
    description:
      "One thing is clear, this hazy IPA stands out from the crowd.  Brewed with a blend of New World hops and fresh pineapple for a tropical twist, Pineapple Farm is a juicy, island vacations in a can.",
    link: "https://coronadobrewing.com/coronado-beer-series/core-series-2/",
    image:
      "https://coronadobrewing.com/assets/Pineapple-Farms-16_Front_2-copy.png",
    brewery: "Coronado Brewing Company",
    breweryLink: "https://coronadobrewing.com/",
    city: "San Diego",
    abv: "6.8%",
    ibu: "N/A",
    style: "IPA",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Salty Crew Blonde Ale",
    description:
      "What is a boat beer? It’s a canned beer that’s crisp, versatile and refreshing.  It’s the perfect blank slate.  Throw a lime in it, make it bloody or spice the rim for a classic twist.  It’s a beer that goes where no glass can.  Whether you’re on or off the boat, this beer will take you back to days spent finding refuge in the sea.",
    link: "https://coronadobrewing.com/coronado-beer-series/core-series-2/",
    image: "https://coronadobrewing.com/assets/Salty-Crew_web.png",
    brewery: "Coronado Brewing Company",
    breweryLink: "https://coronadobrewing.com/",
    city: "San Diego",
    abv: "4.5%",
    ibu: "N/A",
    style: "Ale",
    wishlist: false,
    favorite: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

class Beers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "",
      styleName: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (
      props.cityName !== state.cityName ||
      props.styleName !== state.styleName
    ) {
      let { cityName, styleName } = props;
      if (styleName === "All Beer" && cityName) {
        // try {
        //   fetch(`/api/v1/beers?city=${cityName}`, {
        //     headers: {
        //       "Content-Type": "application/json",
        //       Accept: "application/json",
        //     },
        //   })``
        //     .then((res) => res.json())
        //     .then((data) => {
        //       props.addBeers(
        //         data || emergencyBeers.filter((x) => x.city === cityName)
        //       );
        //     });
        // } catch (error) {
        //   console.log(error);
        let city = emergencyBeers.filter((x) => x.city === cityName);
        props.addBeers(city);
        // }
        return {
          cityName,
          styleName,
        };
      } else if (styleName === "All Beer") {
        // try {
        //   fetch(`/api/v1/beers`, {
        //     headers: {
        //       "Content-Type": "application/json",
        //       Accept: "application/json",
        //     },
        //   })
        //     .then((res) => {
        //       res.json();
        //     })
        //     .then((data) => {
        //       props.addBeers(data || emergencyBeers);
        //     });
        // } catch (error) {
        //   console.log(error);
        props.addCity(emergencyBeers);
        // }
        return {
          cityName,
          styleName,
        };
      } else {
        // try {
        //   fetch(`/api/v1/beers?city=${cityName}&style=${styleName}`, {
        //     headers: {
        //       "Content-Type": "application/json",
        //       Accept: "application/json",
        //     },
        //   })
        //     .then((res) => res.json())
        //     .then((data) => {
        //       props.addBeers(
        //         data ||
        //           emergencyBeers.filter(
        //             (x) => x.city === cityName && x.style === styleName
        //           )
        //       );
        //     });
        // } catch (error) {
        //   console.log(error);
        let cityAndStyle = emergencyBeers.filter(
          (x) => x.city === cityName && x.style === styleName
        );
        props.addBeers(cityAndStyle);
        // }
        return {
          cityName,
          styleName,
        };
      }
    } else {
      return state;
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { cityName, styleName } = this.props;
    // try {
    //   fetch(`/api/v1/beers?city=${cityName}&style=${styleName}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       this.props.addBeers(
    //         data ||
    //           emergencyBeers.filter(
    //             (x) => x.city === cityName && x.style === styleName
    //           )
    //       );
    //       this.setState({
    //         cityName: "",
    //         style: "",
    //       });
    //     });
    // } catch (error) {
    //   console.log(error);
    let cityAndStyle = emergencyBeers.filter(
      (x) => x.city === cityName && x.style === styleName
    );
    this.props.addBeers(cityAndStyle);
    this.setState({
      cityName: "",
      style: "",
    });
    // }
  };

  componentDidMount() {
    this.props.addStyle("All Beer");
    // try {
    //   fetch(`/api/v1/beers`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(`hello ${data}`);
    //       this.props.addBeers(data || emergencyBeers);
    //     });
    // } catch (error) {
    //   console.log(error);
    this.props.addBeers(emergencyBeers);
    // }
  }

  handleChange = (e) => {
    let city = e.target.value;
    this.props.addCity(city);
  };

  saveData = (empty, e) => {
    let style = e.target.textContent;
    this.props.addStyle(style);
  };

  clearField = (e) => {
    e.preventDefault();
    this.props.addCity("");
    let style = this.props.style;
    // try {
    //   fetch(`/api/v1/beers/${style}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       this.props.addBeers(data || []);
    //       this.setState({
    //         cityName: "",
    //       });
    //     });
    // } catch (error) {
    //   console.log(error);
    his.props.addBeers(emergencyBeers);
    this.setState({
      cityName: "",
    });
    // }
  };

  render() {
    return (
      <Container>
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          className={styles.colorNav}
        >
          <Navbar.Brand href="/" className={styles.navBrand}>
            Hopify
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/beers">Beers</Nav.Link>
              <NavDropdown
                title="Styles"
                id="basic-nav-dropdown"
                onSelect={this.saveData}
              >
                <NavDropdown.Item value="IPA">IPA</NavDropdown.Item>
                <NavDropdown.Item value="Wheat">Wheat</NavDropdown.Item>
                <NavDropdown.Item value="Sour">Sour</NavDropdown.Item>
                <NavDropdown.Item value="Ale">Ale</NavDropdown.Item>
                <NavDropdown.Item value="Lager">Lager</NavDropdown.Item>
                <NavDropdown.Item value="Pilsner">Pilsner</NavDropdown.Item>
                <NavDropdown.Item value="Stout">Stout</NavDropdown.Item>
                <NavDropdown.Item value="Porter">Porter</NavDropdown.Item>
                <NavDropdown.Item value="Seltzer">Seltzer</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item value="All Beer">All Beer</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/breweries">Breweries</Nav.Link>
              <Nav.Link href="/favorites">Favorites</Nav.Link>
              <Nav.Link href="/wishlist">Wishlist</Nav.Link>
            </Nav>
            <Form inline onSubmit={this.handleFormSubmit}>
              <FormControl
                type="text"
                placeholder="Enter a city"
                className="mr-sm-2"
                value={this.state.cityName}
                onChange={this.handleChange}
              />
              <Button
                type="submit"
                variant="outline-primary"
                onClick={this.clearField}
              >
                Clear
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className={styles.beerDiv}>
          <h1>Select a style and a city to find beers</h1>
          <div className={styles.specialDiv}>
            {this.props.styleName && this.props.styleName + "s"}{" "}
            {this.props.cityName && "in " + this.props.cityName}
          </div>
          {this.props.beers.map((beer, index) => {
            return (
              <Card className={styles.beerCard} key={index}>
                <div className={styles.wrapper}>
                  <div className={styles.left}>
                    <h2>{beer.name}</h2>
                    <p className={styles.description}>{beer.description}</p>
                    <ul>
                      <li>
                        <b>ABV: </b>
                        {beer.abv}
                      </li>
                      <li>
                        <b>IBU: </b>
                        {beer.ibu}
                      </li>
                      <li>
                        <b>Brewer: </b>
                        <a
                          href={beer.breweryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {beer.brewery}
                        </a>
                      </li>
                    </ul>
                    {this.props.favoriteBeers.findIndex(
                      (favorite) => beer.name === favorite.name
                    ) === -1 ? (
                      <Button
                        variant="success"
                        className={styles.button}
                        onClick={() => {
                          this.props.addFavoriteBeer(beer);
                        }}
                      >
                        Favorite{" "}
                        <span role="img" aria-label="beer">
                          🍺
                        </span>
                      </Button>
                    ) : (
                      <Button
                        variant="outline-success"
                        className={styles.button}
                        onClick={() => {
                          this.props.deleteFavoriteBeer(beer);
                        }}
                      >
                        Unfavorite{" "}
                        <span role="img" aria-label="beer">
                          🍺
                        </span>
                      </Button>
                    )}
                    {this.props.wishlistBeers.findIndex(
                      (favorite) => beer.name === favorite.name
                    ) === -1 ? (
                      <Button
                        variant="success"
                        className={styles.button}
                        onClick={() => {
                          this.props.addWishlistBeer(beer);
                        }}
                      >
                        Wishlist{" "}
                        <span role="img" aria-label="hop">
                          🌳
                        </span>
                      </Button>
                    ) : (
                      <Button
                        variant="outline-success"
                        className={styles.button}
                        onClick={() => {
                          this.props.deleteWishlistBeer(beer);
                        }}
                      >
                        Unwishlist{" "}
                        <span role="img" aria-label="hop">
                          🌳
                        </span>
                      </Button>
                    )}
                  </div>
                  <div className={styles.right}>
                    <a
                      href={beer.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={beer.image}
                        className={styles.beerImage}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteBeers: state.favoriteBeers,
    wishlistBeers: state.wishlistBeers,
    cityName: state.cityName,
    styleName: state.styleName,
    beers: state.beers,
  };
};

const mapDispatchToProps = {
  addFavoriteBeer,
  deleteFavoriteBeer,
  addWishlistBeer,
  deleteWishlistBeer,
  addStyle,
  addCity,
  addBeers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Beers);
