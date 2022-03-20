# Funkcionális Specifikáció



#### Áttekintés

Megrendelőnk egy vidéki általános iskola, ahol az oktatás eddig csak hagyományos eszközökkel történt. Jelenleg viszont rendelkeznek egy korszerű gépparkkal, emiatt felmerült számukra egy igény egy játékos oktatást megvalósító weblapot elkészítésére.

#### Jelenlegi helyzet leírása

Adott egy vidéki általános iskola és egy analóg oktatási  rendszer. A gyerekek reggelente fáradtan cipelik a hátukon a  tankönyvekkel, füzetekkel, tolltartóval és egyéb eszközökkel alaposan  megpakolt táskájukat. A legtöbbjük használt, összefirkált, hiányos  tankönyveket hord magával, mert szüleiknek nem telik új könyvekre. Az  órákon mindenki engedelmesen jegyzeteli gyűrött füzetébe a tanár néni és tanár bácsi szavait a gondosan kihegyezett ceruzával, otthon pedig  ugyanebbe a füzetbe körmölik a házi feladatokat.

Ez a kép egyértelműen a múlt századot idézi. A mai  gyerekeknek nehezebb lekötni a figyelmét holmi nyomtatott papírokkal meg monoton beszéddel, ahhoz túlságosan felgyorsult a világ. Szükség van  hát a digitalizációra! És a lehetőség el is érkezett egy megnyert  pályázat formájában. Az iskolának immár lehetősége van fejleszteni a  gépparkját, tabletet biztosítani a diákoknak, és bizonyos folyamatokat  átvinni az online térbe.

#### Vágyálom rendszer leírása

Az iskola informatikatanára már régóta álmodozik egy interaktív weboldal elkészítéséről, ahol a diákok játszva sajátíthatnák el azokat az ismereteket, amiket a tanáraik csak küszködve tudnak megértetni velük. Erre az oldalra nem lesz kötelező fellépni a diákoknak, de nagy valószínűséggel mégis mindenki regisztrálni fog, hiszen a tankönyvekből és jegyzetekből oly nehezen megérthető feladatokat itt sokkal szórakoztatóbb formában oldhatják meg, aminek következtében a dolgozatok is könnyebben fognak menni. Lesz majd ranglista is a weboldalon, ezzel is buzdítva a diákokat a még több és még eredményesebb játékra.

Az oldalnak platformfüggetlennek kell lennie, mert a diákok mind számítógépről, mint tabletről használni fogják majd a szolgáltatásokat. Fontos a könnyű áttekinthetőség és a színes, vidám megjelenés. A bővíthetőségre is oda kell figyelni, hogy bármikor listába lehessen venni egy új játékot, vagy esetleg új funkcióval gazdagítani az oldalt.

#### Követelménylista

| Kód  |                       Megnevezés                        |                                                              |
| :--: | :-----------------------------------------------------: | ------------------------------------------------------------ |
|  K4  |                Ellenőrzött regisztráció                 | Amennyiben a felhasználó még nem rendelkezik fiókkal, abban az esetben  az "Új felhasználó létrehozása" opcióval regisztrálhat. A regisztráció során bizonyos adatok megadása kötelező. Ha ezek nincsenek kitöltve,  akkor a rendszer "Sikertelen regisztráció." hibaüzenetet küld. |
|  K2  |     Regisztrált felhasználók tárolása adatbázisban      | Az egyszerű és gyors adatelérés érdekében az regisztrált felhasználók adatainak tárolása adatbázisban történjen. |
|  K5  |                Bejelentkezési lehetőség                 | A felhasználó a felhasználónév és jelszó pár megadásával beléphet a  rendszerbe. Ha a felhasználónév vagy a jelszó helytelen, akkor az oldal üzen a felhasználónak: "Téves felhasználónév vagy jelszó." |
|  K1  | A játékok letisztult, egyszerű megjelenítése a weblapon | Az oldalon történő navigáció úgy valósul meg, hogy az az egyszerű felhasználók számára sem okoz nehézséget. Az oldal felületén a halvány, visszafogott színek dominálnak. A játékok a keresést követően listás jelleggel jelennek meg. A játékok nevére való kattintás után a játék külön oldalon jelenik meg. |
|  K8  |              Játékok keresése szűrésekkel               | Az oldalon található játékokon lehet szűrést alkalmazni(pl. évfolyam, játék típus, nehézség, stb.). Ekkor csak a megadott feltételeknek megfelelő játékok fognak megjelenni, amennyiben léteznek ilyenek. Olyan eset is előfordulhat, hogy nincs olyan játék, amelyik megfelel a keresési feltételeknek. Ekkor az oldalon a "Nem található a keresésnek megfelelő játék."  hibaüzenet jelenik meg. |
|  K6  |       Rekordok, pontszámok tárolása adatbázisban        | ???                                                          |
|  K7  |             Felhasználói adatok módosítása              | A weblapon a bejelentkezett felhasználónak lehetősége van a felhasználói fiókjához tartozó adatokat módosítani(pl. név, jelszó stb.). |

#### Használati esetek

Gyakorlatilag három szerepkört lehet megkülönböztetni az oldal felkeresésekor.

- Admin: A nevének megfelelően mindent lát, mindenhez hozzáfér, és tetszés szerint módosíthat bármit az oldalon. Ilyen jogosutságokkal lehetőség szerint csak 1-2, maximum 3 ember rendelkezzen.
- Látogató: Bárki, aki az oldalra téved, regisztráció nélkül szemrevételezheti a játékok listáját és rövid leírását, és tetszés szerint szűréseket is végezhet, rákereshet bizonyos típusú játékokra. Magát a játékot azonban már nem tudja elindítani, és a ranglistákat, pontrekordokat sem láthatja.
- Regisztrált/bejelentkezett felhasználó: Ebbe a csoportba praktikusan kizárólag az iskolai tanulói tartozhatnak, hiszen lényegében nekik készült az oldal. Bárki szabadon regisztrálhat, de az admin rendszeresen ellenőrzi a regisztrált felhasználók névsorát, és törölheti azokat, akik nem az iskola tanulói. A regisztrált felhasználók a látogatók lehetőségein felül elindíthatnak játékokat, megnézhetik a ranglistákat, és módosíthatják a fiókjukhoz tartozó adatokat.

#### Képernyőtervek



#### Forgatókönyvek

Pistike szeretne lejátszani egy kör Madzsongot, hogy megdöntse a barátja, Töhötöm rekordját.

- Pistike a tabletjén felkeresi a weboldalt
- a jelszavát már korábban megjegyeztette a böngészőjével, ezért a rendszer automatikusan bejelentkezteti
- a keresőbe beírja, hogy "Madzsong", mire az oldal megjeleníti a releváns találatok listáját
- Pistike rábök a keresett játékra, mire az megjelenik nagyobb méretben
- Pistike kiválasztja azt az alakzatot, amelyiknél a barátja tartja a rekordot
- elindul a játék
- a játék végeztével megjelenik a frissített ranglista, ahol Pistike talán átvette a vezetést Töhötömtől, talán nem

Egy látogató szeretné megtekinteni, milyen játékok vannak a korosztályának.

- a látogató a laptopján felkeresi az oldalt
- a részletes kereső menüpontot megnyitva, kipipálja a 8-10 éves korosztályt
- a kereső megjeleníti a releváns találatokat
- a látogató megtekintheti a listát, de kattintásra figyelmeztetést kap, hogy csak bejelentkezés után lehet játszani
