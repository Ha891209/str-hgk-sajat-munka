Elsőként olvasd végig az összes pontot!

1. Készíts egy videoStore nevű MongoDB adatbázist!  
`use videoStore`  

2. Hozz létre benne egy movies listát!  
`db.createCollection("movies")`

3. Ments el benne 10 új filmet (save()) a következő mezőkkel:
- _id: legyen generált, ObjectId
- title: egy-egy kedvenc film címe, szöveges tartalom
- category: szöveges tartalom (3 típus lehet: fantasy, action, romantic) => legyenek vegyesen a filmek, amennyire lehet
- director: szöveges tartalom, 3 rendező közül vegyesen szétválogatva => Steven Spielberg, Clint Eastwood, James Cameron  
`db.movies.save([`  
`   {title: "Jurassic Park", category: "fantasy", director: "Steven Spielberg"},` 
`   title: "American Sniper", category: "action, director: "Clint Eastwood"},`  
`	{title: "Avatar", category: "fantasy", director: "James Cameron"},`  
`	{title: "Always", category: "romantic", director: "Steven Spielberg"},` 
`	{title: "Breezy", category: "romantic", director: "Clint Eastwood"},`  
`	{title: "Ready Player One", category: "action", director: "Steven Spielberg"},`  
`	{title: "Titanic", category: "romantic", director: "James Cameron"},`  
`	{title: "Indiana Jones and the Kingdom of the Crystal Skull", category: "action", director: "Steven Spielberg"},`  
`	{title: "Dirty Harry", category: "action", director: "Clint Eastwood"}`  
`	{title: "The Terminator", category: "action", director: "James Cameron"},`  
`])`

4. Frissítsd a listádat (updateMany), mindenki kapjon egy „ratings” mezőt, amely egy üres listát tartalmaz (1-5 ig lehet benne tárolni a szavazatokat)!  
`db.movies.updateMany({}, {$set: {ratings: []}})`

5. Adj 3 különböző filmre legalább 2 különböző szavazatot (használd a $push operátort)!  
`db.movies.update({_id:ObjectId("60de3903f10796a25c29f9f7")},{$push: {ratings: { $each: [1,4] }}})`
`db.movies.update({_id:ObjectId("60de391dafa1a4e476c07b38")},{$push: {ratings: { $each: [4,5] }}})`
`db.movies.update({_id:ObjectId("60de392dc3e58749088e2cad")},{$push: {ratings: { $each: [2,3] }}})`

6. Adj hozzá minden filmhez egy „releaseYear” (megjelenés éve) mezőt: kezdetnek állíts be egy tetszőleges évet minden filmnek (pl.: 2000)!  
`db.movies.updateMany({}, {$set: {releaseYear: 2000}})`

7. Írd át category típusonként csupa nagybetűre a kategóriákat (pl.: action ==> ACTION legyen mindenhol). Használd az updateMany parancsot!
Tipp: db.courses.updateMany( {}, [{$set: {title: {$toUpper: "$title"} }}] )
`db.movies.updateMany({}, [{$set: {category: {$toUpper: "$category"}}}])`

8. Kérdezd le az adatokat, hogy ellenőrizd, sikeresek lettek-e a frissítések! Most így kellene kinéznie a listának:
`db.movies.find()`


