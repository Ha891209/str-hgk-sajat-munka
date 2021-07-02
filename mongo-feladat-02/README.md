A videoStore feladat folytatása (update, find, projection)

Normalization elve: Csak a közvetlen összetartozó elemeket tároljuk egy táblázatban (listában). Minél összetettebb egy adat (több tulajdonsággal rendelkezhet, pl.: rendezőnek lehet neve, díjai, filmjei, születési adatai), annál inkább külön listába kell kiszervezni a tárolását.

Készíts el egy „directors” listát, amelyben filmrendezőket fogunk tárolni!
Ments el benne 3 „rendező” dokumentumot az insertOne() parancs segítségével:
"_id": egész szám 1-estől indulva
"name": Steven Spielberg, Clint Eastwood, James Cameron
"birthYear": születési év (tetszőlegesen megadott egész szám)
"movies": kezdetben egy üres lista
Frissítsd a rendezők dokumentumait, helyezd el a „movies” listájukba a megfelelő filmek id-jait (ha ObjectId-t használsz, akkor figyelj arra, hogy ObjectId-ként mentsd el őket). Tipp: kérdezd le a rendezőket, és alájuk listázd a filmeket úgy, hogy csak az id-jük és a rendező nevét adja vissza a lekérdezés:
A képen szöveg látható  Automatikusan generált leírás

Ha frissítetted a rendezőket, ellenőrzés gyanánt kérdezd le a dokumentumokat a „directors” listából (használd a pretty() metódust a szebb megjelenítéshez)! Ehhez hasonló eredményt kell látnod:
A képen szöveg látható  Automatikusan generált leírás

Ha elkészültél a rendezői listával, frissítsd a movies listát („táblázatot”): távolítsd el a director mezőt ($unset operátor segítségével). Ezentúl a rendezőn keresztül fogjuk elérni a hozzájuk tartozó filmeket.
Kérdezd le az egy bizonyos év előtt készült filmeket, majd az egy bizonyos év után készült filmeket! ($gt, $gte, $lt, $lte)
Kérdezz le két év között készült filmeket! (Próbáld ki $and operátorral is!)
Kérdezz le két év közötti filmeket, amelyek egy bizonyos kategóriával rendelkeznek!
Kérdezd le a filmeket, amelyeknek a kategóriája NEM FANTASY ($ne)!
