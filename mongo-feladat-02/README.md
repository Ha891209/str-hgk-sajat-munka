A videoStore feladat folytatása (update, find, projection)

**Normalization elve**:  Csak a közvetlen összetartozó elemeket tároljuk egy táblázatban (listában). Minél összetettebb egy adat (több tulajdonsággal rendelkezhet, pl.: rendezőnek lehet neve, díjai, filmjei, születési adatai), annál inkább külön listába kell kiszervezni a tárolását.

1. Készíts el egy „directors” listát, amelyben filmrendezőket fogunk tárolni!  
`db.createCollection("directors")`

2. Ments el benne 3 „rendező” dokumentumot az insertOne() parancs segítségével:
"_id": egész szám 1-estől indulva
"name": Steven Spielberg, Clint Eastwood, James Cameron
"birthYear": születési év (tetszőlegesen megadott egész szám)
"movies": kezdetben egy üres lista
`db.directors.insertOne({_id:1, name: "Steven Spielberg", birthYear: 1946, movies: []})`  
`db.directors.insertOne({_id:2, name: "Clint Eastwood", birthYear: 1930, movies: []})`  
`db.directors.insertOne({_id:3, name: "James Cameron", birthYear: 1954, movies: []})` 

4. Frissítsd  a rendezők dokumentumait, helyezd el a „movies” listájukba a megfelelő filmek id-jait (ha ObjectId-t használsz, akkor figyelj arra, hogy ObjectId-ként mentsd el őket). Tipp: kérdezd le a rendezőket, és alájuk listázd a filmeket úgy, hogy csak az id-jük és a rendező nevét adja vissza a lekérdezés:

`db.directors.update({name:"Steven Spielberg"},{$push:{movies: {$each: [ObjectId("60e36a44a3ec746e99873747"),ObjectId("60e36a5527767f70d7f4528e"),ObjectId("60e36a61e2bc8d3f43239d26")]}}})`  
`db.directors.update({name:"Clint Eastwood"},{$push:{movies: {$each: [ObjectId("60e36a728a1ed146abbe5c5f"),ObjectId("60e36a82074add733b6f6b1e"),ObjectId("60e36a913752128321c342be")]}}})`  
`db.directors.update({name:"James Cameron"},{$push:{movies: {$each: [ObjectId("60e36a9f4e6a13ef3d885b83"),ObjectId("60e36aacf02e7539cfc88909"),ObjectId("60e36ab9424bd252ffb203fe")]}}})`

5. Ha frissítetted a rendezőket, ellenőrzés gyanánt kérdezd le a dokumentumokat a „directors” listából (használd a pretty() metódust a szebb megjelenítéshez)! Ehhez hasonló eredményt kell látnod:
`db.directors.find().pretty()`

6. Ha elkészültél a rendezői listával, frissítsd a movies listát („táblázatot”): távolítsd el a director mezőt ($unset operátor segítségével). Ezentúl a rendezőn keresztül fogjuk elérni a hozzájuk tartozó filmeket.
`db.movies.updateMany({}, {$unset: {director: ""}})`

7. Kérdezd le az egy bizonyos év előtt készült filmeket, majd az egy bizonyos év után készült filmeket! ($gt, $gte, $lt, $lte)  
`db.movies.find({releaseYear: {$lt: 2001}})`
`db.movies.find({releaseYear: {$gt: 1999}})`

8. Kérdezz le két év között készült filmeket! (Próbáld ki $and operátorral is!)  
`db.movies.find({releaseYear: {$gt: 1999, $lt: 2005}})`  
`db.movies.find({$and: [{releaseYear: {$gt: 1999}}, {releaseYear: {$lt: 2005}}]})`

9. Kérdezz le két év közötti filmeket, amelyek egy bizonyos kategóriával rendelkeznek!  
`db.movies.find({releaseYear: {$gt: 1999, $lt: 2005}, category: "action"})`

Kérdezd le a filmeket, amelyeknek a kategóriája NEM FANTASY ($ne)!