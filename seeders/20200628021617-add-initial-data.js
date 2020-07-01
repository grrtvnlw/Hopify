'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Breweries', [
      {
      name: 'SweetWater Brewing Company',
      description: "February 17, 1997 marked the official beginning of SweetWater Brewery, and a new style of brewing and selling beer in Atlanta as the boys wandered around Atlanta in an old van with Freddy's dog Badger. After ending up on the wrong side of the tracks a few times, they were finally pointed in the direction of Virginia-Highlands and found a few bars willing to take a chance on them. \"We'll give you a shot as long as your dog stops begging for leftovers on our patio\" was the cautious approval they needed to get the brand rolling.\r\n\r\nSweetWater's second and current location is in Midtown Atlanta, adjacent to Ansley Park, in the Armour Circle Industrial Park just off of Piedmont and Monroe. The boys saved all of their pennies to buy the 25,000 square feet of brewing goodness and smack in the middle of all the action. Since the company began we've wanted to be closer to our homes, the bars and stores that sell our beer, and all the good folks that drink it. Fortunately seven years of great growth gave the company that opportunity. We learned a lot from that location and left all those mistakes behind as we built our new home. SweetWater Brewing Company has been here since 2004 and it feels good to be settled in. Our new home has enough capacity to brew 100,000 barrels of beer a year (A few more years at this rate.)",
      website: "http://www.sweetwaterbrew.com/",
      established: "1997",
      images: "https://brewerydb-images.s3.amazonaws.com/brewery/TMc6H2/upload_3il9e7-icon.png",
      streetAddress: "195 Ottley Drive",
      locality: "Atlanta",
      region: "Georgia",
      postalCode: "30324",
      phone: "404-691-2537",
      wishlist: false,
      favorite: true,
      createdAt: new Date(),
      updatedAt: new Date()  
    },
    {
      name: 'Lagunitas Brewing Company',
      description: "From our earliest days of striving to make consistently good beer, and instead making beer that ranged from vile, to barely drinkable, to wonderful, to elegant, to questionable-at-best. From being castigated by our West Marin neighbors to finally suffering an 'eviction' by our West Marin septic system. From landing in the welcoming arms of Petaluma, and actually getting our beer into bottles, onto the streets, and into the hands of sympathatic beer geeks, to steadily losing less money each month. From all this and more, Lagunitas Brewing Company is emerging as a battle-tested brewery capable of making great beer out of goat's milk, brambles, and asphalt on the surface of the Moon, if need be.\r\n\r\nAs the poet once said, 'Where, but for the grace of God and the kindness of strangers, go I'. Where go we indeed, whatever that means.",
      website: "http://www.lagunitas.com/",
      established: "1993",
      images: "https://brewerydb-images.s3.amazonaws.com/brewery/nLsoQ9/upload_WqZkvw-icon.png",
      streetAddress: "1280 North McDowell Boulevard",
      locality: "Petaluma",
      region: "California",
      postalCode: "94954",
      phone: "707-769-4495",
      wishlist: true,
      favorite: false,
      createdAt: new Date(),
      updatedAt: new Date()  
    }
  ])

    await queryInterface.bulkInsert('Beers', [
      {
      name: 'SweetWater IPA',    
      description: 'This mammoth IPA is defined by generous quantities of juicy American hops. The extensive dry hopping process contributes to its bright and flavorful character. This beer is unfiltered to leave all the natural flavors intact and bottle conditioned to stay super fresh.',
      link: 'https://www.sweetwaterbrew.com/brews/sweetwater-ipa/',
      image: 'https://www.sweetwaterbrew.com/wp-content/uploads/sw-brew-product-vignette.png',
      brewery: 'SweetWater Brewing Company',
      breweryLink: 'https://www.sweetwaterbrew.com/',
      city: 'Atlanta',    
      abv: '6.3%',    
      ibu: '50',    
      style: 'IPA',    
      wishlist: true,
      favorite: false,
      createdAt: new Date(),
      updatedAt: new Date()    
    },
    {
      name: 'Goin\' Coastal',    
      description: 'Slip into some sunshine and step off the grid by Goin’ Coastal with this pineapple laced IPA. The bright aromas of the five citrus hop additions are accentuated by the tropical fruit of the pineapple. And just like those three day weekends, its finish is quick. Golden copper in color with a full malt bill to bring the balance to our year round offering.',    
      link: 'https://www.sweetwaterbrew.com/brews/goin-coastal-ipa/',
      image: 'https://www.sweetwaterbrew.com/wp-content/uploads/2017/07/product-image-brew_goin-coastal.png',
      brewery: 'SweetWater Brewing Company',
      breweryLink: 'https://www.sweetwaterbrew.com/',
      city: 'Atlanta',
      abv: '6.1%',    
      ibu: '45',    
      style: 'IPA',    
      wishlist: false,
      favorite: false,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      name: 'Pliny the Elder',    
      description: 'Pliny the Elder is brewed with Amarillo, Centennial, CTZ, and Simcoe hops. It is well-balanced with malt, hops, and alcohol, slightly bitter with a fresh hop aroma of floral, citrus, and pine. Best enjoyed FRESH! That is why we make it in such limited supply. Actual bottling date is printed on each bottle! Where did we come up with this name? Back in the year 2000, our friend, Vic Kralj, who owns the Bistro in Hayward, California, decided to have his first ever Double IPA festival. Vic invited 10 breweries, 6 of whom (including us) had to brew something special for him since we had nothing that would fall under this style category. Vinnie had made a Double IPA at Blind Pig Brewing Co. in 1994, but was not brewing one at Russian River Brewing Co. at the time. He had an idea for the recipe, but not a name. After much research in beer books, brainstorming, and deliberation, we came up with “Pliny the Elder”. Pliny, the man, lived in the first century- 23 to 79 A.D. According to our brewing references, he and his contemporaries either created the botanical name or at least wrote about Lupus Salictarius, or hops, currently known as Humulus Lupulus. That was a very early reference to an important part of any Double IPA! Pliny, the beer has now become one of our flagship brews!' + 
      'Pliny the Elder was immortalized by his nephew, Pliny the Younger, who wrote about his uncle succumbing to ash and smoke during the eruption of Mt. Vesuvius in 79 A.D. while rescuing people. Cheers to the scholar, historian, officer, writer, and Roman Naturalist- Pliny the Elder!',    
      link: 'https://russianriverbrewing.com/pliny-the-elder/',
      image: 'https://russianriverbrewing.com/wp-content/uploads/2018/04/yearroundbottles_large_6b60a081-5de8-4023-a04a-5eafc669b48e.jpg',
      brewery: 'Russian River Brewing Company',
      breweryLink: 'https://russianriverbrewing.com/',
      city: 'Santa Rosa',
      abv: '8.0%',    
      ibu: 'N/A',    
      style: 'IPA',    
      wishlist: false,
      favorite: true,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      name: 'Dirty Beaches',    
      description: 'WE GOT DOWN AND DIRTY WITH OUR TROPICAL WHEAT. A SPIRITED COLLAB WITH VICTORY BRANDS. THIS HYBRID WHEAT & IPA WHETS YOUR PALATE. JUST LIKE YOU BEACHES LIKE IT. EASY DRINKING WITH A SOFT CREAMY BODY AND WAVES OF TROPICAL FRUIT AROMAS. DIRTY BEACHES IS FILTHY GOOD.',    
      link: 'https://scofflawbeer.com/beaches.html',
      image: 'https://scofflawbeer.com/img/SCOFFLAW-DIRTYBEACHES-1000X1000.png',
      brewery: 'Scofflaw Brewing Company',
      breweryLink: 'https://scofflawbeer.com/',
      city: 'Atlanta',
      abv: '6.3%',    
      ibu: '45',    
      style: 'Wheat',    
      wishlist: false,
      favorite: false,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      name: 'Breakfast Stout',    
      description: 'The coffee lover’s consummate beer. Brewed with an abundance of flaked oats, bitter and imported chocolates, and two types of coffee, this stout has an intense fresh-roasted java nose topped with a frothy, cinnamon-colored head that goes forever.',    
      link: 'https://foundersbrewing.com/our-beer/breakfast-stout/',
      image: 'https://foundersbrewing.com/wp-content/uploads/2017/08/2018_BreakfastStout_Featured.jpg',
      brewery: 'Founders Brewing Company',
      breweryLink: 'https://foundersbrewing.com/',
      city: 'Grand Rapids',
      abv: '8.3%',    
      ibu: '60',    
      style: 'Stout',    
      wishlist: false,
      favorite: true,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      name: 'Porter',    
      description: 'Pours silky black with a creamy tan head. The nose is sweet with strong chocolate and caramel malt presence. No absence of hops gives Founders’ robust porter the full flavor you deserve and expect. Cozy like velvet. It’s a lover, not a fighter.',    
      link: 'https://foundersbrewing.com/our-beer/porter/',
      image: 'https://foundersbrewing.com/wp-content/uploads/2017/08/2018_Porter_Featured.jpg',
      brewery: 'Founders Brewing Company',
      breweryLink: 'https://foundersbrewing.com/',
      city: 'Grand Rapids',
      abv: '6.5%',    
      ibu: '45',    
      style: 'Porter',    
      wishlist: false,
      favorite: true,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      name: 'Dr. Robot Blackberry Lemon Sour',    
      description: 'A tart, fruity sour beer. Dr. Robot is as playful as its name. After souring to a delightfully tart level, we add blackberry juice and lemon zest to enhance and balance the flavor. The juice gives this beer a pink hue. The perfect blend of sweet and sour, Dr. Robot is a refreshing year-round sipper.',    
      link: 'https://mondaynightbrewing.com/beers/dr-robot/',
      image: 'https://i0.wp.com/mondaynightbrewing.com/wp-content/uploads/2017/09/robot-for-website-01-01-01-01-01.png?resize=1024%2C1024&ssl=1',
      brewery: 'Monday Night Brewing',
      breweryLink: 'https://mondaynightbrewing.com/',
      city: 'Atlanta',
      abv: '5%',    
      ibu: '7',    
      style: 'Sour',    
      wishlist: false,
      favorite: false,
      createdAt: new Date(),
      updatedAt: new Date() 
    }
  ], {});

  return await queryInterface.bulkInsert('BeersBreweries', [
      {
      beersId: 1,
      breweriesId: 1,
      createdAt: new Date(),
      updatedAt: new Date()    
    },
    {
      beersId: 2,
      breweriesId: 1,
      createdAt: new Date(),
      updatedAt: new Date()    
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('BeersBreweries', null, {})
    await queryInterface.bulkDelete('Beers', null, {})
    await queryInterface.bulkDelete('Breweries', null, {})
  }
};
