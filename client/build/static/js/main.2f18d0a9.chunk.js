(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{201:function(e,a,t){e.exports=t.p+"static/media/beer.26054c01.png"},202:function(e,a,t){e.exports=t.p+"static/media/Hops_IPA_Pour-BA-1200.2f60bb56.jpg"},210:function(e,a,t){e.exports=t(419)},215:function(e,a,t){},216:function(e,a,t){},41:function(e,a,t){e.exports={breweryCard:"Breweries_breweryCard__3kIE5",breweryDiv:"Breweries_breweryDiv__vLsAO",title:"Breweries_title__1Sy8W",colorNav:"Breweries_colorNav__E8To0",navBrand:"Breweries_navBrand__2_cGQ",mapContainer:"Breweries_mapContainer__55A0y",favDiv:"Breweries_favDiv__1wlEM",button:"Breweries_button__3aahm"}},419:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(21),i=t.n(l),s=(t(215),t(26)),c=t(27),o=t(29),m=t(28),u=(t(216),t(205)),p=t(10),E=t(39);function v(e){return{type:"ADD_FAVORITE_BEER",value:e}}function d(e){return{type:"DELETE_FAVORITE_BEER",value:e}}function h(e){return{type:"ADD_FAVORITE_BREWERY",value:e}}function f(e){return{type:"DELETE_FAVORITE_BREWERY",value:e}}function b(e){return{type:"ADD_WISHLIST_BEER",value:e}}function y(e){return{type:"DELETE_WISHLIST_BEER",value:e}}function B(e){return{type:"ADD_WISHLIST_BREWERY",value:e}}function w(e){return{type:"DELETE_WISHLIST_BREWERY",value:e}}var g=t(424),_=t(428),N=t(429),k=t(426),C=t(427),I=t(199),S=t(198),T=t(430),D=t(6),O=t.n(D),W=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var a=r.props,t=a.cityName,n=a.styleName;fetch("/api/v1/beers?city=".concat(t,"&style=").concat(n)).then((function(e){return e.json()})).then((function(e){r.props.addBeers(e||[]),r.setState({cityName:"",style:""})}))},r.handleChange=function(e){var a=e.target.value;r.props.addCity(a)},r.saveData=function(e,a){var t=a.target.textContent;r.props.addStyle(t)},r.clearField=function(e){e.preventDefault(),r.props.addCity("");var a=r.props.style;fetch("/api/v1/beers/".concat(a)).then((function(e){return e.json()})).then((function(e){r.props.addBeers(e||[]),r.setState({cityName:""})}))},r.state={cityName:"",styleName:""},r}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.addStyle("All Beer"),fetch("/api/v1/beers").then((function(e){return e.json()})).then((function(a){console.log("hello ".concat(a)),e.props.addBeers(a||[])}))}},{key:"render",value:function(){var e=this;return n.a.createElement(g.a,null,n.a.createElement(_.a,{bg:"dark",variant:"dark",expand:"lg",className:O.a.colorNav},n.a.createElement(_.a.Brand,{href:"/",className:O.a.navBrand},"Hopify"),n.a.createElement(_.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(_.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(N.a,{className:"mr-auto"},n.a.createElement(N.a.Link,{href:"/"},"Home"),n.a.createElement(N.a.Link,{href:"/beers"},"Beers"),n.a.createElement(k.a,{title:"Styles",id:"basic-nav-dropdown",onSelect:this.saveData},n.a.createElement(k.a.Item,{value:"IPA"},"IPA"),n.a.createElement(k.a.Item,{value:"Wheat"},"Wheat"),n.a.createElement(k.a.Item,{value:"Sour"},"Sour"),n.a.createElement(k.a.Item,{value:"Ale"},"Ale"),n.a.createElement(k.a.Item,{value:"Lager"},"Lager"),n.a.createElement(k.a.Item,{value:"Pilsner"},"Pilsner"),n.a.createElement(k.a.Item,{value:"Stout"},"Stout"),n.a.createElement(k.a.Item,{value:"Porter"},"Porter"),n.a.createElement(k.a.Item,{value:"Seltzer"},"Seltzer"),n.a.createElement(k.a.Divider,null),n.a.createElement(k.a.Item,{value:"All Beer"},"All Beer")),n.a.createElement(N.a.Link,{href:"/breweries"},"Breweries"),n.a.createElement(N.a.Link,{href:"/favorites"},"Favorites"),n.a.createElement(N.a.Link,{href:"/wishlist"},"Wishlist")),n.a.createElement(C.a,{inline:!0,onSubmit:this.handleFormSubmit},n.a.createElement(I.a,{type:"text",placeholder:"Enter a city",className:"mr-sm-2",value:this.state.cityName,onChange:this.handleChange}),n.a.createElement(S.a,{type:"submit",variant:"outline-primary",onClick:this.clearField},"Clear")))),n.a.createElement("div",{className:O.a.beerDiv},n.a.createElement("h1",null,"Select a style and a city to find beers"),n.a.createElement("div",{className:O.a.specialDiv},this.props.styleName&&this.props.styleName+"s","  ",this.props.cityName&&"in "+this.props.cityName),this.props.beers.map((function(a,t){return n.a.createElement(T.a,{className:O.a.beerCard,key:t},n.a.createElement("div",{className:O.a.wrapper},n.a.createElement("div",{className:O.a.left},n.a.createElement("h2",null,a.name),n.a.createElement("p",{className:O.a.description},a.description),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("b",null,"ABV: "),a.abv),n.a.createElement("li",null,n.a.createElement("b",null,"IBU: "),a.ibu),n.a.createElement("li",null,n.a.createElement("b",null,"Brewer: "),n.a.createElement("a",{href:a.breweryLink,target:"_blank",rel:"noopener noreferrer"},a.brewery))),-1===e.props.favoriteBeers.findIndex((function(e){return a.name===e.name}))?n.a.createElement(S.a,{variant:"success",className:O.a.button,onClick:function(){e.props.addFavoriteBeer(a)}},"Favorite ",n.a.createElement("span",{role:"img","aria-label":"beer"},"\ud83c\udf7a")):n.a.createElement(S.a,{variant:"outline-success",className:O.a.button,onClick:function(){e.props.deleteFavoriteBeer(a)}},"Unfavorite ",n.a.createElement("span",{role:"img","aria-label":"beer"},"\ud83c\udf7a")),-1===e.props.wishlistBeers.findIndex((function(e){return a.name===e.name}))?n.a.createElement(S.a,{variant:"success",className:O.a.button,onClick:function(){e.props.addWishlistBeer(a)}},"Wishlist ",n.a.createElement("span",{role:"img","aria-label":"hop"},"\ud83c\udf33")):n.a.createElement(S.a,{variant:"outline-success",className:O.a.button,onClick:function(){e.props.deleteWishlistBeer(a)}},"Unwishlist ",n.a.createElement("span",{role:"img","aria-label":"hop"},"\ud83c\udf33"))),n.a.createElement("div",{className:O.a.right},n.a.createElement("a",{href:a.link,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:a.image,className:O.a.beerImage,alt:""})))))}))))}}],[{key:"getDerivedStateFromProps",value:function(e,a){if(e.cityName!==a.cityName||e.styleName!==a.styleName){var t=e.cityName,r=e.styleName;return"All Beer"===r&&t?(fetch("/api/v1/beers?city=".concat(t)).then((function(e){return e.json()})).then((function(a){e.addBeers(a||[])})),{cityName:t,styleName:r}):"All Beer"===r?(fetch("/api/v1/beers").then((function(e){return e.json()})).then((function(a){e.addBeers(a||[])})),{cityName:t,styleName:r}):(fetch("/api/v1/beers?city=".concat(t,"&style=").concat(r)).then((function(e){return e.json()})).then((function(a){e.addBeers(a||[])})),{cityName:t,styleName:r})}return a}}]),t}(r.Component),L={addFavoriteBeer:v,deleteFavoriteBeer:d,addWishlistBeer:b,deleteWishlistBeer:y,addStyle:function(e){return{type:"ADD_STYLE",value:e}},addCity:function(e){return{type:"ADD_CITY",value:e}},addBeers:function(e){return{type:"ADD_BEERS",value:e}}},j=Object(E.b)((function(e){return{favoriteBeers:e.favoriteBeers,wishlistBeers:e.wishlistBeers,cityName:e.cityName,styleName:e.styleName,beers:e.beers}}),L)(W),F=t(41),A=t.n(F),x=t(207),R=t(65),H=[{featureType:"all",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#f1efe8"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{color:"#f1efe8"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{visibility:"on"},{saturation:"-100"},{lightness:"34"},{weight:"2.09"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#b2ac83"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#b2ac83"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#8ac0c4"}]}],M=t(201),U=t.n(M);var P=Object(R.withScriptjs)(Object(R.withGoogleMap)((function(e){var a=Object(r.useRef)(null),t=Object(r.useState)(null),l=Object(x.a)(t,2),i=l[0],s=l[1];return Object(r.useEffect)((function(){if(e.breweries.length){var t=new window.google.maps.LatLngBounds;e.breweries.forEach((function(e){var a=e.latitude,r=e.longitude;if(a&&r){var n=new window.google.maps.LatLng(a,r);t.extend(n)}})),a.current&&a.current.fitBounds(t)}})),n.a.createElement(R.GoogleMap,{ref:a,defaultZoom:11,defaultCenter:{lat:33.76333225,lng:-84.3870607355802},defaultOptions:{styles:H}},e.breweries.map((function(e,a){return n.a.createElement(R.Marker,{key:a,position:{lat:Number.parseFloat(e.latitude),lng:Number.parseFloat(e.longitude)},onClick:function(){s(e)},icon:{url:U.a,scaledSize:{width:25,height:25}}})})),i&&n.a.createElement(R.InfoWindow,{position:{lat:Number.parseFloat(i.latitude),lng:Number.parseFloat(i.longitude)},onCloseClick:function(){s(null)}},n.a.createElement("div",null,i.website_url?n.a.createElement("h2",null,n.a.createElement("a",{href:i.website_url,target:"_blank",rel:"noopener noreferrer"},i.name)):n.a.createElement("h2",null,i.name),n.a.createElement("div",null,i.street&&n.a.createElement("p",null,n.a.createElement("b",null,"Address:")," ",i.street),i.phone&&n.a.createElement("p",null,n.a.createElement("b",null,"Phone Number:")," ",i.phone)))))})));function V(e){return n.a.createElement("div",{style:{width:"90%",height:"500px",margin:"0 auto"}},n.a.createElement(P,Object.assign({googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=".concat("AIzaSyBSPu-lH4OIVqzXvbGJ2MgLo6xMnJYeU9M"),loadingElement:n.a.createElement("div",{style:{height:"100%"}}),containerElement:n.a.createElement("div",{style:{height:"100%"}}),mapElement:n.a.createElement("div",{style:{height:"100%"}})},e)))}var Y=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var a=r.state.cityName;fetch("https://api.openbrewerydb.org/breweries?by_city=".concat(a)).then((function(e){return e.json()})).then((function(e){r.setState({cityName:"",breweries:e})}))},r.handleChange=function(e){r.setState({cityName:e.target.value})},r.state={cityName:"",breweries:[]},r}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(g.a,null,n.a.createElement(_.a,{bg:"dark",variant:"dark",expand:"lg",className:A.a.colorNav},n.a.createElement(_.a.Brand,{href:"/",className:A.a.navBrand},"Hopify"),n.a.createElement(_.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(_.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(N.a,{className:"mr-auto"},n.a.createElement(N.a.Link,{href:"/"},"Home"),n.a.createElement(N.a.Link,{href:"/beers"},"Beers"),n.a.createElement(N.a.Link,{href:"/breweries"},"Breweries"),n.a.createElement(N.a.Link,{href:"/favorites"},"Favorites"),n.a.createElement(N.a.Link,{href:"/wishlist"},"Wishlist")),n.a.createElement(C.a,{inline:!0,onSubmit:this.handleFormSubmit},n.a.createElement(I.a,{type:"text",placeholder:"Enter a city",className:"mr-sm-2",value:this.state.cityName,onChange:this.handleChange}),n.a.createElement(S.a,{variant:"outline-primary"},"Search")))),n.a.createElement("div",{className:A.a.breweryDiv},n.a.createElement("h1",null,"Search for a city to find breweries"),n.a.createElement(V,{breweries:this.state.breweries}),this.state.breweries.map((function(a,t){var r=a.name,l=a.brewery_type,i=a.street,s=a.city,c=a.state,o=a.phone,m=a.website_url;return"planning"!==l?n.a.createElement(T.a,{className:A.a.breweryCard,key:t},n.a.createElement(T.a.Body,null,n.a.createElement("div",null,n.a.createElement(T.a.Title,{className:A.a.title},r&&n.a.createElement("h2",null,r)),n.a.createElement(T.a.Text,null,l&&n.a.createElement("p",null,"Type: ",l),i&&n.a.createElement("p",null,"Address: ",i,", ",s,", ",c),o&&n.a.createElement("p",null,"Phone: ",o),m&&n.a.createElement("p",null,"Website: ",n.a.createElement("a",{href:m,target:"_blank",rel:"noopener noreferrer"},m)))),-1===e.props.favoriteBreweries.findIndex((function(e){return r===e.name}))?n.a.createElement(S.a,{variant:"success",className:A.a.button,onClick:function(){e.props.addFavoriteBrewery(a)}},"Favorite ",n.a.createElement("span",{role:"img","aria-label":"beer"},"\ud83c\udf7a")):n.a.createElement(S.a,{variant:"outline-success",className:A.a.button,onClick:function(){e.props.deleteFavoriteBrewery(a)}},"Unfavorite ",n.a.createElement("span",{role:"img","aria-label":"beer"},"\ud83c\udf7a")),-1===e.props.wishlistBreweries.findIndex((function(e){return r===e.name}))?n.a.createElement(S.a,{variant:"success",className:A.a.button,onClick:function(){e.props.addWishlistBrewery(a)}},"Wishlist ",n.a.createElement("span",{role:"img","aria-label":"hops"},"\ud83c\udf33")):n.a.createElement(S.a,{variant:"outline-success",className:A.a.button,onClick:function(){e.props.deleteWishlistBrewery(a)}},"Unwishlist ",n.a.createElement("span",{role:"img","aria-label":"hops"},"\ud83c\udf33")))):""}))))}}]),t}(r.Component),z={addFavoriteBrewery:h,deleteFavoriteBrewery:f,addWishlistBrewery:B,deleteWishlistBrewery:w,addBreweries:function(e){return{type:"ADD_BREWERIES",value:e}},addMapCity:function(e){return{type:"ADD_MAPCITY",value:e}}},J=Object(E.b)((function(e){return{favoriteBreweries:e.favoriteBreweries,wishlistBreweries:e.wishlistBreweries,breweries:e.breweries,mapCity:e.mapCity}}),z)(Y),X=(t(417),t(79)),G=t.n(X),q=t(202),Q=t.n(q),K=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(g.a,null,n.a.createElement(_.a,{bg:"dark",variant:"dark",expand:"lg",className:G.a.colorNav},n.a.createElement(_.a.Brand,{href:"/",className:G.a.navBrand},"Hopify"),n.a.createElement(_.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(_.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(N.a,{className:"mr-auto"},n.a.createElement(N.a.Link,{href:"/"},"Home"),n.a.createElement(N.a.Link,{href:"/beers"},"Beers"),n.a.createElement(N.a.Link,{href:"/breweries"},"Breweries"),n.a.createElement(N.a.Link,{href:"/favorites"},"Favorites"),n.a.createElement(N.a.Link,{href:"/wishlist"},"Wishlist")))),n.a.createElement("div",{className:G.a.home},n.a.createElement("header",null,n.a.createElement("h1",null,"H",n.a.createElement("span",{role:"img","aria-label":"hop"},"\ud83c\udf33"),"pify"),n.a.createElement("h3",null,"Find beers and breweries in your city")),n.a.createElement("img",{src:Q.a,alt:"",className:G.a.banner})))}}]),t}(r.Component),Z=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(g.a,null,n.a.createElement(_.a,{bg:"dark",variant:"dark",expand:"lg",className:O.a.colorNav},n.a.createElement(_.a.Brand,{href:"/",className:O.a.navBrand},"Hopify"),n.a.createElement(_.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(_.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(N.a,{className:"mr-auto"},n.a.createElement(N.a.Link,{href:"/"},"Home"),n.a.createElement(N.a.Link,{href:"/beers"},"Beers"),n.a.createElement(N.a.Link,{href:"/breweries"},"Breweries"),n.a.createElement(N.a.Link,{href:"/favorites"},"Favorites"),n.a.createElement(N.a.Link,{href:"/wishlist"},"Wishlist")))),n.a.createElement("div",{className:O.a.favDiv},n.a.createElement("h1",null,"Favorite Beers and Breweries"),n.a.createElement("h2",null,"Beers"),this.props.favoriteBeers.map((function(a,t){return n.a.createElement(T.a,{className:O.a.beerCard,key:t},n.a.createElement("div",{className:O.a.wrapper},n.a.createElement("div",{className:O.a.left},n.a.createElement("h3",null,a.name),n.a.createElement("p",{className:O.a.description},a.description),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("b",null,"ABV: "),a.abv),n.a.createElement("li",null,n.a.createElement("b",null,"IBU: "),a.ibu),n.a.createElement("li",null,n.a.createElement("b",null,"Brewer: "),n.a.createElement("a",{href:a.breweryLink,target:"_blank",rel:"noopener noreferrer"},a.brewery))),-1===e.props.favoriteBeers.findIndex((function(e){return a.name===e.name}))?n.a.createElement(S.a,{variant:"success",className:O.a.button,onClick:function(){e.props.addFavoriteBeer(a)}},"Favorite ",n.a.createElement("span",{role:"img","aria-label":"beer"},"\ud83c\udf7a")):n.a.createElement(S.a,{variant:"outline-success",className:O.a.button,onClick:function(){e.props.deleteFavoriteBeer(a)}},"Unfavorite ",n.a.createElement("span",{role:"img","aria-label":"beer"},"\ud83c\udf7a")),-1===e.props.wishlistBeers.findIndex((function(e){return a.name===e.name}))?n.a.createElement(S.a,{variant:"success",className:O.a.button,onClick:function(){e.props.addWishlistBeer(a)}},"Wishlist ",n.a.createElement("span",{role:"img","aria-label":"hop"},"\ud83c\udf33")):n.a.createElement(S.a,{variant:"outline-success",className:O.a.button,onClick:function(){e.props.deleteWishlistBeer(a)}},"Unwishlist ",n.a.createElement("span",{role:"img","aria-label":"hop"},"\ud83c\udf33"))),n.a.createElement("div",{className:O.a.right},n.a.createElement("a",{href:a.link,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:a.image,className:O.a.beerImage,alt:""})))))})),n.a.createElement("h2",null,"Breweries"),this.props.favoriteBreweries.map((function(a,t){var r=a.name,l=a.brewery_type,i=a.street,s=a.city,c=a.state,o=a.phone,m=a.website_url;return n.a.createElement(T.a,{className:O.a.breweryCard,key:t},n.a.createElement("div",{className:O.a.wrapper},n.a.createElement("div",null,n.a.createElement(T.a.Title,{className:O.a.title},r&&n.a.createElement("h3",null,r)),n.a.createElement(T.a.Text,null,l&&n.a.createElement("p",null,"Type: ",l),i&&n.a.createElement("p",null,"Address: ",i,", ",s,", ",c),o&&n.a.createElement("p",null,"Phone: ",o),m&&n.a.createElement("p",null,"Website: ",n.a.createElement("a",{href:m,target:"_blank",rel:"noopener noreferrer"},m))),-1===e.props.favoriteBreweries.findIndex((function(e){return r===e.name}))?n.a.createElement(S.a,{variant:"success",className:O.a.button,onClick:function(){e.props.addFavoriteBrewery(a)}},"Favorite ",n.a.createElement("span",{role:"img","aria-label":"beer"},"\ud83c\udf7a")):n.a.createElement(S.a,{variant:"outline-success",className:O.a.button,onClick:function(){e.props.deleteFavoriteBrewery(a)}},"Unfavorite ",n.a.createElement("span",{role:"img","aria-label":"beer"},"\ud83c\udf7a")),-1===e.props.wishlistBreweries.findIndex((function(e){return r===e.name}))?n.a.createElement(S.a,{variant:"success",className:O.a.button,onClick:function(){e.props.addWishlistBrewery(a)}},"Wishlist ",n.a.createElement("span",{role:"img","aria-label":"hops"},"\ud83c\udf33")):n.a.createElement(S.a,{variant:"outline-success",className:O.a.button,onClick:function(){e.props.deleteWishlistBrewery(a)}},"Unwishlist ",n.a.createElement("span",{role:"img","aria-label":"hops"},"\ud83c\udf33")))))}))))}}]),t}(r.Component),$={addWishlistBeer:b,deleteWishlistBeer:y,addWishlistBrewery:B,deleteWishlistBrewery:w,deleteFavoriteBeer:d,deleteFavoriteBrewery:f},ee=Object(E.b)((function(e){return{favoriteBeers:e.favoriteBeers,favoriteBreweries:e.favoriteBreweries,wishlistBeers:e.wishlistBeers,wishlistBreweries:e.wishlistBreweries}}),$)(Z),ae=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(g.a,null,n.a.createElement(_.a,{bg:"dark",variant:"dark",expand:"lg",className:O.a.colorNav},n.a.createElement(_.a.Brand,{href:"/",className:O.a.navBrand},"Hopify"),n.a.createElement(_.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(_.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(N.a,{className:"mr-auto"},n.a.createElement(N.a.Link,{href:"/"},"Home"),n.a.createElement(N.a.Link,{href:"/beers"},"Beers"),n.a.createElement(N.a.Link,{href:"/breweries"},"Breweries"),n.a.createElement(N.a.Link,{href:"/favorites"},"Favorites"),n.a.createElement(N.a.Link,{href:"/wishlist"},"Wishlist")))),n.a.createElement("div",{className:O.a.favDiv},n.a.createElement("h1",null,"My Wishlist"),n.a.createElement("h2",null,"Beers"),this.props.wishlistBeers.map((function(a,t){return n.a.createElement(T.a,{className:O.a.beerCard,key:t},n.a.createElement("div",{className:O.a.wrapper},n.a.createElement("div",{className:O.a.left},n.a.createElement("h3",null,a.name),n.a.createElement("p",{className:O.a.description},a.description),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("b",null,"ABV: "),a.abv),n.a.createElement("li",null,n.a.createElement("b",null,"IBU: "),a.ibu),n.a.createElement("li",null,n.a.createElement("b",null,"Brewer: "),n.a.createElement("a",{href:a.breweryLink,target:"_blank",rel:"noopener noreferrer"},a.brewery))),-1===e.props.favoriteBeers.findIndex((function(e){return a.name===e.name}))?n.a.createElement(S.a,{variant:"success",className:O.a.button,onClick:function(){e.props.addFavoriteBeer(a)}},"Favorite ",n.a.createElement("span",{role:"img","aria-label":"beer"},"\ud83c\udf7a")):n.a.createElement(S.a,{variant:"outline-success",className:O.a.button,onClick:function(){e.props.deleteFavoriteBeer(a)}},"Unfavorite ",n.a.createElement("span",{role:"img","aria-label":"beer"},"\ud83c\udf7a")),-1===e.props.wishlistBeers.findIndex((function(e){return a.name===e.name}))?n.a.createElement(S.a,{variant:"success",className:O.a.button,onClick:function(){e.props.addWishlistBeer(a)}},"Wishlist ",n.a.createElement("span",{role:"img","aria-label":"hop"},"\ud83c\udf33")):n.a.createElement(S.a,{variant:"outline-success",className:O.a.button,onClick:function(){e.props.deleteWishlistBeer(a)}},"Unwishlist ",n.a.createElement("span",{role:"img","aria-label":"hop"},"\ud83c\udf33"))),n.a.createElement("div",{className:O.a.right},n.a.createElement("a",{href:a.link,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:a.image,className:O.a.beerImage,alt:""})))))})),n.a.createElement("h2",null,"Breweries"),this.props.wishlistBreweries.map((function(a,t){var r=a.name,l=a.brewery_type,i=a.street,s=a.city,c=a.state,o=a.phone,m=a.website_url;return n.a.createElement(T.a,{className:O.a.breweryCard,key:t},n.a.createElement("div",{className:O.a.wrapper},n.a.createElement("div",null,n.a.createElement(T.a.Title,{className:O.a.title},r&&n.a.createElement("h3",null,r)),n.a.createElement(T.a.Text,null,l&&n.a.createElement("p",null,"Type: ",l),i&&n.a.createElement("p",null,"Address: ",i,", ",s,", ",c),o&&n.a.createElement("p",null,"Phone: ",o),m&&n.a.createElement("p",null,"Website: ",n.a.createElement("a",{href:m,target:"_blank",rel:"noopener noreferrer"},m))),-1===e.props.favoriteBreweries.findIndex((function(e){return r===e.name}))?n.a.createElement(S.a,{variant:"success",className:O.a.button,onClick:function(){e.props.addFavoriteBrewery(a)}},"Favorite ",n.a.createElement("span",{role:"img","aria-label":"beer"},"\ud83c\udf7a")):n.a.createElement(S.a,{variant:"outline-success",className:O.a.button,onClick:function(){e.props.deleteFavoriteBrewery(a)}},"Unfavorite ",n.a.createElement("span",{role:"img","aria-label":"beer"},"\ud83c\udf7a")),-1===e.props.wishlistBreweries.findIndex((function(e){return r===e.name}))?n.a.createElement(S.a,{variant:"success",className:O.a.button,onClick:function(){e.props.addWishlistBrewery(a)}},"Wishlist ",n.a.createElement("span",{role:"img","aria-label":"hops"},"\ud83c\udf33")):n.a.createElement(S.a,{variant:"outline-success",className:O.a.button,onClick:function(){e.props.deleteWishlistBrewery(a)}},"Unwishlist ",n.a.createElement("span",{role:"img","aria-label":"hops"},"\ud83c\udf33")))))}))))}}]),t}(r.Component),te={deleteWishlistBeer:y,deleteWishlistBrewery:w,addFavoriteBeer:v,deleteFavoriteBeer:d,addFavoriteBrewery:h,deleteFavoriteBrewery:f},re=Object(E.b)((function(e){return{wishlistBeers:e.wishlistBeers,wishlistBreweries:e.wishlistBreweries,favoriteBeers:e.favoriteBeers,favoriteBreweries:e.favoriteBreweries}}),te)(ae),ne=t(203),le=t.n(ne),ie=t(425);function se(e){var a=Object(r.useState)(!1);return n.a.createElement(n.a.Fragment,null,n.a.createElement(ie.a,{show:e.show,onHide:function(){return a(!1)},backdrop:"static",keyboard:!1},n.a.createElement(ie.a.Header,null,n.a.createElement(ie.a.Title,null,n.a.createElement("h1",null,"Random Beer! Cheers ",n.a.createElement("span",{role:"img","aria-label":"cheers"},"\ud83c\udf7b")))),n.a.createElement(ie.a.Body,null,n.a.createElement("h1",null,e.randomBeer.name),e.randomBeer&&n.a.createElement("h3",null,e.randomBeer.style.name),n.a.createElement("div",{style:{height:"100px",overflow:"scroll",marginBottom:"20px"}},e.randomBeer&&n.a.createElement("p",null,e.randomBeer.style.description)),n.a.createElement("ul",null,e.randomBeer.abv&&n.a.createElement("li",null,"ABV: ",e.randomBeer.abv,"%"),e.randomBeer.ibu&&n.a.createElement("li",null,"IBU: ",e.randomBeer.ibu))),n.a.createElement(ie.a.Footer,null,n.a.createElement(S.a,{variant:"secondary",onClick:e.closeModal},"Close"))))}var ce=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).easterEgg=function(){fetch("/random").then((function(e){return e.json()})).then((function(e){r.setState({random:e.data,show:!0})}))},r.closeModal=function(){r.setState({show:!1})},r.state={random:"",show:!1},r}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(u.a,null,n.a.createElement("div",null,n.a.createElement(p.c,null,n.a.createElement(p.a,{path:"/",exact:!0,component:K}),n.a.createElement(p.a,{path:"/beers",component:j}),n.a.createElement(p.a,{path:"/breweries",component:J}),n.a.createElement(p.a,{path:"/favorites",component:ee}),n.a.createElement(p.a,{path:"/wishlist",component:re})),n.a.createElement(le.a,{action:this.easterEgg},n.a.createElement(se,{randomBeer:this.state.random,show:this.state.show,closeModal:this.closeModal}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=t(60),me=t(48),ue=[];var pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_FAVORITE_BEER":return[].concat(Object(me.a)(e),[a.value]);case"DELETE_FAVORITE_BEER":var t=e.filter((function(e){return e.name!==a.value.name}));return t;default:return e}},Ee=[];var ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_FAVORITE_BREWERY":return[].concat(Object(me.a)(e),[a.value]);case"DELETE_FAVORITE_BREWERY":var t=e.filter((function(e){return e.name!==a.value.name}));return t;default:return e}},de=[];var he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_WISHLIST_BREWERY":return[].concat(Object(me.a)(e),[a.value]);case"DELETE_WISHLIST_BREWERY":var t=e.filter((function(e){return e.name!==a.value.name}));return t;default:return e}},fe=[];var be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_WISHLIST_BEER":return[].concat(Object(me.a)(e),[a.value]);case"DELETE_WISHLIST_BEER":var t=e.filter((function(e){return e.name!==a.value.name}));return t;default:return e}};var ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_CITY":return a.value;default:return e}};var Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_STYLE":return a.value;default:return e}},we=[];var ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_BEERS":return a.value;default:return e}},_e=[];var Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_BREWERIES":return a.value;default:return e}};var ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_MAPCITY":return a.value;default:return e}},Ce=Object(oe.b)({favoriteBeers:pe,favoriteBreweries:ve,wishlistBeers:be,wishlistBreweries:he,cityName:ye,styleName:Be,beers:ge,breweries:Ne,mapCity:ke}),Ie=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):localStorage.setItem("reduxState",""),Se=Object(oe.c)(Ce,Ie,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Se.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(Se.getState()))}));var Te=Se;i.a.render(n.a.createElement(E.a,{store:Te},n.a.createElement(n.a.StrictMode,null,n.a.createElement(ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){e.exports={beerDiv:"Beers_beerDiv__WJxh1",beerCard:"Beers_beerCard__1g_ha",breweryCard:"Beers_breweryCard__2Quvt",colorNav:"Beers_colorNav__2WO0Y",navBrand:"Beers_navBrand__3myCq",beerImage:"Beers_beerImage__1M_4-",wrapper:"Beers_wrapper__kW3Rh",left:"Beers_left__1VvV7",right:"Beers_right__2IzXn",description:"Beers_description__1CBgM",button:"Beers_button__2OKNu",favDiv:"Beers_favDiv__1Czyn",specialDiv:"Beers_specialDiv__24B8R",specialButton:"Beers_specialButton__yHHOo"}},79:function(e,a,t){e.exports={home:"Home_home__9Mejl",banner:"Home_banner__2-tj6",navBrand:"Home_navBrand__1PEyj"}}},[[210,1,2]]]);
//# sourceMappingURL=main.2f18d0a9.chunk.js.map