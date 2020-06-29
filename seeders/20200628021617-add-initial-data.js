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
      abv: '6.1%',    
      ibu: '45',    
      style: 'IPA',    
      wishlist: false,
      favorite: true,
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
