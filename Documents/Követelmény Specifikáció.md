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

