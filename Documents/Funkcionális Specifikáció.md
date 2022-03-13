# Funkcionális Specifikáció



#### Áttekintés

Megrendelőnk egy vidéki általános iskola, ahol az oktatás eddig csak hagyományos eszközökkel történt. Jelenleg viszont rendelkeznek egy korszerű gépparkkal, emiatt felmerült számukra egy igény egy játékos oktatást megvalósító weblapot elkészítésére.

#### Jelenlegi helyzet leírása

Adott egy vidéki általános iskola és egy analóg oktatási  rendszer. A gyerekek reggelente fáradtan cipelik a hátukon a  tankönyvekkel, füzetekkel, tolltartóval és egyéb eszközökkel alaposan  megpakolt táskájukat. A legtöbbjük használt, összefirkált, hiányos  tankönyveket hord magával, mert szüleiknek nem telik új könyvekre. Az  órákon mindenki engedelmesen jegyzeteli gyűrött füzetébe a tanár néni és tanár bácsi szavait a gondosan kihegyezett ceruzával, otthon pedig  ugyanebbe a füzetbe körmölik a házi feladatokat.

Ez a kép egyértelműen a múlt századot idézi. A mai  gyerekeknek nehezebb lekötni a figyelmét holmi nyomtatott papírokkal meg monoton beszéddel, ahhoz túlságosan felgyorsult a világ. Szükség van  hát a digitalizációra! És a lehetőség el is érkezett egy megnyert  pályázat formájában. Az iskolának immár lehetősége van fejleszteni a  gépparkját, tabletet biztosítani a diákoknak, és bizonyos folyamatokat  átvinni az online térbe.

#### Vágyálom rendszer leírása



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



#### Használati esetek aktorok szerinti bontásban



#### Képernyőtervek



#### Forgatókönyvek

