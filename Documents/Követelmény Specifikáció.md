# Követelmény Specifikáció

#### **Jelenlegi helyzet**

Adott egy vidéki általános iskola és egy analóg oktatási rendszer. A gyerekek reggelente fáradtan cipelik a hátukon a tankönyvekkel, füzetekkel, tolltartóval és egyéb eszközökkel alaposan megpakolt táskájukat. A legtöbbjük használt, összefirkált, hiányos tankönyveket hord magával, mert szüleiknek nem telik új könyvekre. Az órákon mindenki engedelmesen jegyzeteli gyűrött füzetébe a tanár néni és tanár bácsi szavait a gondosan kihegyezett ceruzával, otthon pedig ugyanebbe a füzetbe körmölik a házi feladatokat.

Ez a kép egyértelműen a múlt századot idézi. A mai gyerekeknek nehezebb lekötni a figyelmét holmi nyomtatott papírokkal meg monoton beszéddel, ahhoz túlságosan felgyorsult a világ. Szükség van hát a digitalizációra! És a lehetőség el is érkezett egy megnyert pályázat formájában. Az iskolának immár lehetősége van fejleszteni a gépparkját, tabletet biztosítani a diákoknak, és bizonyos folyamatokat átvinni az online térbe.

#### **Vágyálomrendszer**

Az iskola informatikatanára már régóta álmodozik egy interaktív weboldal elkészítéséről, ahol a diákok játszva sajátíthatnák el azokat az ismereteket, amiket a tanáraik csak küszködve tudnak megértetni velük. Erre az oldalra nem lesz kötelező fellépni a diákoknak, de nagy valószínűséggel mégis mindenki regisztrálni fog, hiszen a tankönyvekből és jegyzetekből oly nehezen megérthető feladatokat itt sokkal szórakoztatóbb formában oldhatják meg, aminek következtében a dolgozatok is könnyebben fognak menni. Lesz majd ranglista is a weboldalon, ezzel is buzdítva a diákokat a még több és még eredményesebb játékra.

Az oldalnak platformfüggetlennek kell lennie, mert a diákok mind számítógépről, mint tabletről használni fogják majd a szolgáltatásokat. Fontos a könnyű áttekinthetőség és a színes, vidám megjelenés. A bővíthetőségre is oda kell figyelni, hogy bármikor listába lehessen venni egy új játékot, vagy esetleg új funkcióval gazdagítani az oldalt.

#### **A rendszerre vonatkozó szabályok**

A rendszer, lévén általános iskolás - elsősorban alsós - gyermekeknek készül, kizárólag a korosztálynak megfelelő tartalommal és hirdetésekkel rendelkezhet. A játékoknak, a mai kor követelményeinek megfelelően, amikor csak lehetséges, magukon kell hordozniuk a politikai korrektség jegyeit (pl. férfi/női/gendersemleges és színesbőrű karakterek). A szexualitásra utaló tartalom nem engedélyezett, továbbá szigorúan politikamentesnek kell lennie.

Az oldal HTML, CSS, JavaScript és React felhasználásával készüljön, az adatbázis pedig MySQL alapokra épüljön.

#### **Jelenlegi üzleti folyamatok modellje**

Az oktatásban jelenleg semmilyen formában nincsenek jelen tanító jellegű számítógépes játékok. A tudást kizárólag szóban és papír alapon próbálják átadni a diákoknak. 

#### **Igényelt üzleti folyamatok**

A megálmodott weboldalon a diákok regisztráció után kiválaszthatják a nekik tetsző játékot.

Regisztráció után:

- profil alapvető beállításai
- játékok szűrése életkor és típus szerint (pl. kvíz)
- játék elindítása
- elért eredmények megtekintése

#### **Követelménylista**

| Kód  |                       Megnevezés                        |
| :--: | :-----------------------------------------------------: |
|  K4  |                Ellenőrzött regisztráció                 |
|  K2  |     Regisztrált felhasználók tárolása adatbázisban      |
|  K5  |                Bejelentkezési lehetőség                 |
|  K1  | A játékok letisztult, egyszerű megjelenítése a weblapon |
|  K8  |              Játékok keresése szűrésekkel               |
|  K6  |       Rekordok, pontszámok tárolása adatbázisban        |
|  K7  |             Felhasználói adatok módosítása              |

#### Fogalomtár

Kreativitás: Többféle értelemben használhatjuk. Van, amikor az alkotói folyamatot értjük alatta, van, hogy az alkotó személyiség tulajdonságát (pl.: tehetséges személyek esetén), máskor pedig az alkotás eredményét emeljük ki.A kreativitás eredeti, újszerű dolgok, tárgyak, gondolatok létrehozásában nyilvánul meg.

Ezenkívül az egyéni látásmód, a problémákhoz való hozzáállás szokatlan megoldásának képességét is magába foglalja.

Készségfejlesztés: A készségfejlesztési folyamat célja mindazoknak a készségeknek a folyamatos fejlesztése, amelyek gyakorlati alkalmazása révén az gyermekek egyéni hatékonysága, ezáltal az osztály teljesítménye nő.
Ehhez nyújtanak segítséget azok a játékok, amiket kifejezetten ezzel a céllal készítettek el, hogy a gyermekek különböző készségeit fejlesszék.

Érzelmi intelligencia fejlesztés: Többféle intelligenciát különböztetünk meg, többek között nyelvi, zenei, matematikai-logikai, érzelmi intelligenciát.
Az érzelmi intelligencia alatt azt a képességet értjük, hogy az egyén milyen jól tudja felismerni, megérteni és kezelni az érzelmeket, mind sajátját, mind másokét. Aki ugyanis jelentőséget tulajdonít saját belső érzéseinek és érzelmeinek, együttérzőbbé válhat másokkal szemben is. Képes elválasztani magát a viselkedést a viselkedést generáló érzelmektől, minek következtében például nem vesz magára olyat, ami valójában nem ellene szól. Nem véletlenül nevezik ezt a képességet „emberekhez való intelligenciának” is. Akinek magasabb ez az értéke, az szociálisan sokkal aktívabb.
A különböző multiplayer játékok segíthetik ennek fejlesztését.


Vizuális nevelés: Ennek a gyakorlati tevékenységeinek fontos célja az érzéki tapasztalás, a környezettel való közvetlen kapcsolat fenntartása, erősítése, ezáltal a közvetlen tapasztalatszerzés, a képekkel való érintkezés, az érzékelés érzékenységének fokozása. További cél tudatosítani az érzékelés különböző formáinak (például látás, hallás, kinetikus érzékelés) kapcsolatát, amely a számítógépes környezet bevonásával képes egy újabb, „más minőségű” intermediális szemléletet is kialakítani.


Matematikai fejlesztés: 
A tanulók matematikai gondolkodásának fejlesztése során alapvető cél, hogy mind inkább ki tudják választani és alkalmazni tudják a természeti és társadalmi jelenségekhez illeszkedő modelleket, gondolkodásmódokat (analógiás, heurisztikus, becslésen alapuló, matematikai logikai, axiomatikus, valószínűségi, konstruktív, kreatív stb.), módszereket (aritmetikai, algebrai, geometriai, függvénytani, statisztikai stb.) és leírásokat.
