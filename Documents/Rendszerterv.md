# Rendszerterv



### 1. A rendszer célja

A projekt célja egy olyan webes keretrendszer fejlesztése, amely alkalmas arra, hogy  a tanulók számára készített oktató és fejlesztő játékokat megjelenítse, képes legyen regisztrálni a diákokat egy adatbázisba, az általuk elért eredményeket rögzíteni, illetve fontos szempont még a folyamatos bővíthetőség lehetősége, hogy egyre több játék kapjon benne helyet, illetve legyen cserélhető, ha érdektelenségbe fulladna a játék.
Az oldalt felkeresőknek legyen lehetősége böngészni a játékok között, szűrök alkalmazásával is akár(például korcsoport vagy téma alapján). Regisztráció után mentse a játékos tevékenységét, mely játékokat használta és milyen eredményt ért el benne. Ennek monitorozása nagy segítséget nyújthat abban, hogy milyen képességekkel rendelkezik, mi az ami fejleszteni való és mi az, amiben kiemelkedő, ami jutalmat is vonhatna maga után.  
A fejlesztés során figyelemmel kell lenni arra, hogy ma már a diákok nem csak PC eszközzel rendelkeznek, így fontos szempont az is, hogy a weboldal elérhető és megjeleníthető legyen tablet és okostelefon eszközökről. Elsősorban kisiskolásoknak szóló játékokról van szó, hiszen egy összeadást vagy szorzást még könnyen át lehet konvertálni egy érdekes játékba, azonban egy deriválással már meggyűlne a fejlesztők baja.
Az admin és diákok szerepkörön kívül még érdemes lenne egy oktató szerepkört is létrehozni, amivel a tanároknak nyújtanánk nagy segítséget. A projekt egy konkrét iskola diákjainak készül, tehát a játékok nem lesznek elérhetők bárki számára, kizárólag az iskola regisztrált tanulói használhatják majd őket.

A legfőbb cél, hogy a weboldal által az iskola egy lépést tegyen a modernizáció irányába, hiszen a jövő elképzelhetetlen digitális oktatási formák nélkül. Egy ilyen játékos oldal kiváló lehetőséget nyújt arra, hogy a gyerekek szórakozás iránti igényét felhasználva az iskola átadja azt a tudást, amit az ott dolgozó oktatók még könyvekből tanultak meg. Természetesen a hagyományos oktatás szerepe is megmarad, de minden lehetőséget meg kell ragadni, amivel a szokásostól eltérően lehet megszólítani a diákokat, hiszen mindenki másképpen érti meg az adott anyagot. Lehet, hogy ami nem ment könyvekből és a táblánál állva, az rögtön beépül majd egy látványos játék által.

### 2. Projektterv

####    2.1 Projekt szerepkörök

A projektet a senior projektvezető fogja össze, a projektben további 3 személy dolgozik. A projekten dolgozó személyek a feladatokat rendszeresen online megbeszélések keretében osztják fel egymás között, a projekt előrehaladását Kanban módszerrel követjük nyomon (Trello). A projektben dolgozó emberek egyformán felelősek a feladatkörükhöz tartozó dokumentáció elkészítéséért és a programozási feladatok helyes elvégézésért is. A projektben részt vevő személyek pontos listája az alábbi:

|Szerepkör|Név|Feladatok|
|:----------------------------:|:---------------------------------------------:|--------------------------------------------------------------------------|
|Projektvezető|Kormány Milán|projekt irányítása, határidők felügyelete, projekt haladásának biztosítása|
|Projekt munkatárs|Letső Dániel|dokumentáció készítése, programozás, tesztelés|
|Projekt munkatárs|Safarcsik Viktor|dokumentáció készítése, programozás, tesztelés|
|Projekt munkatárs|Telegdi Tamás|dokumentáció készítése, programozás, tesztelés|

####    2.2 Ütemterv

A projektet két nagy fázisra bontjuk, az első a dokumentáció, amely magában foglalja a funkcionális/követelmény specifikáció és a rendszerterv elkészítését.
A második fázis tartalmazza a rendszer implementálást, tesztelést, hibajavítást, utólagos dokumentálást.

####    2.3 Projekt mérföldkövek

1. Megrendelő igényeinek felmérése, vitás kérdések tisztázása
2. Követelmény specifikáció elkészítése
3. Funkcionális specifikáció elkészítése
4. Rendszerterv elkészítése
5. Programozási feladatok elvégzése
6. Tesztelés és hibajavítás befejezése
7. Működő rendszer átadása

### 3. Üzleti folyamatok modellje

#### 			3.1 Üzleti szereplők

Látogató: Szabadon böngészheti a weblapot, megtekintheti az elérhető játékok listáját. Ezeken képes 	szűréseket is végezni. A játék leírások is elérhetőek a látogató számára is. A regisztráció, bejelentkezés lehetősége is biztosított. A játékokat viszont már nem képes futtatni.

Tag: Szabadon böngészheti a weblapot, megtekintheti az elérhető játékok listáját, leírását. Ezeken képes 	szűréseket is végezni. Számára a játékok futtatása is lehetséges, valamint adott esetben képes felkerülni a ranglistára. A felhasználói fiókhoz tartozó adatokat képes szerkeszteni.

Admin: Menedzselheti a játékokat. A játékokhoz tartozó leírásokat, elnevezéseket, kategóriákat szerkesztheti. Törölhet és hozzáadhat játékokat a weblaphoz.

#### 			3.2 Üzleti folyamatok

- Játékok böngészése: 
  Bárki szabadon megteheti, regisztráció nélkül. A főoldalon a betöltést követően egy egyszerűsített kereső használatával lehetőség van a játékok korcsoport szerinti szűrésére. A Keresés gombra való kattintást követően egy új lapra irányítva a keresett feltételeknek megfelelő játékok listás formában jelennek meg(Amennyiben van a keresési feltételeknek megfelelő játék). 
  A részletes keresés a kereső alsó sarkában található További keresési feltételek gombra történő kattintás után válnak elérhetővé. Ebben az esetben is egy új oldal betöltésével válik elérhetővé a keresési feltételeket kielégítő játékok listája.

- Ranglista:
  Az főoldalon a felső menüsorban található Scoreboard gombra kattintva az oldalon megtekinthető a ranglista bárki számára. A ranglista csak a 10 legmagasabb ponttal rendelkező felhasználót mutatja. 

- Regisztráció:

  A főoldalon található felső menüsorban helyet foglaló Regisztráció gombra kattintva az oldal a regisztrációs lapra navigál, ahol egy egyszerű regisztrációs űrlap kitöltésére van lehetőség. Itt az érvényes e-mail cím és a választott jelszó megadását követően a Regisztráció gombra kattintva lehet megkezdeni a műveletet. Az adatok ellenőrzése után megtörténik a regisztráció. Amennyiben az adatok helytelennek bizonyultak, az oldal ezt jelezni fogja.
  

- Bejelentkezés:
  A főoldalon látható felső menüsorban található Bejelentkezés gombra kattintva, az oldal a bejelentkezést megvalósító oldalra navigál. Itt az e-mail cím és jelszó páros megadását követően a Login gombra kattintva elkezdődik a bejelentkezési folyamat. Amennyiben a megadott adatok helyesek, akkor az oldalra történő bejelentkezés sikeres volt. Ha bármelyik adat helytelen volt, akkor az oldal ezt hibaüzenettel közli.

- Felhasználó adatainak megváltoztatása
  A felhasználói fiókkal rendelkező bejelentkezett tagoknak lehetőségük van a felhasználói profilukhoz tartozó személyes adatok szerkesztésére. A bejelentkezést követően a felső menüsorban meg jelenik az aktuálisan bejelentkezett felhasználó e-mail címe. Erre kattintva a felhasználó adatlapjára történik a navigáció. Itt bármelyik adatot módosíthatja. Az elfogad gombbal történik meg az adatok módosításának véglegesítése.
  

- Játék indítása:
  A játékok elindításához először bejelentkezés szükséges. Ezután a felhasználó által megfogalmazott feltételeknek megfelelő játékok listájából kiválasztott játékra kattintva új lapon betöltődik a játék. 

- Játékok törlése:
  Ehhez a művelethez bejelentkezett admin felhasználói fiókkal kell rendelkezni. A bejelentkezést követően a játék adatlapján található törlés gombra kattintva a játék eltűnik az oldalról.

#### 			3.3 Üzleti entitások

- admin
- felhasználó
- játék

### 4. Követelmények

#### 4.1 Funkcionális követelmények

- A felhasználó bejelentkezés nélkül képes használni az oldal bizonyos funkcióit. Tehát végig tudja böngészni a játékok listáját és szűréseket is el tud végezni rajtuk. Eléri továbbá a regisztrációt és a bejelentkezést a menüsorból. Ezeknek megfelelően szükséges az oldalon történő navigálást és megjelenést kezelni. 

  A listázás és a szűrés során az oldal az adatbázisban tárolt adatokat tárolt eljárások és lekérdezések segítségével szűrve kapja meg. Így a felhasználó a teljes adatbázisban vagy az adatbázis egy részhalmazában képes keresni.

  A regisztrációnál és a bejelentkezésnél az oldal szintén adatbáziskapcsolatot használ a felhasználó azonosítására vagy a felhasználói fiók létrehozására. Minden felhasználó számára egyedi azonosító(id) generálódik, amely alapján a felhasználó később azonosításra kerül. Mind a regisztráció, mind a bejelentkezés esetében az adatokat ellenőrizve továbbítja az oldal az adatbázis felé, ezzel elkerülve az esetleges hibák előfordulását.

- A bejelentkezett felhasználó számára az oldalon megjelennek új funkciók. Ilyen a felhasználói fiók szerkesztése, saját pontszámok megtekintése, a különféle játékokban felállított rekordok kilistázása.

  A felhasználói fiók szerkesztésekor az adatbázisban a felhasználót leíró adatokat lehet megváltoztatni. Ehhez a megváltoztatni kívánt adatokat szükséges megadni. A bevitt adatok ellenőrzésre kerülnek, ezután az adatbázissal kerül kiépítésre a kapcsolat és a megadott adatok az adatbázisban is megváltoztatásra kerülnek.

  A saját pontszámok és az elért rekordok megjelenítésekor szintén az adatbázisból kerülnek lekérdezésre az adatok.

- Admin jogosultsággal lehetőség van új játékok felvitelére vagy a meglévők törlésére. Ezen műveletek végrehajtásához külön kis ikonok jelennek meg admin módban. Játékot hozzáadni a játékok oldalon megjelenő + jellel lehetséges, törölni pedig az adott játék mellett elhelyezkedő kuka ikonnal.

  Új játék feltöltésekor megjelenik egy űrlap, melyen a játék címét, jellemzőit, ajánlott korosztályát, témáját lehet megadni, továbbá be lehet tallózni a feltölteni kívánt állományt. A feltöltés gombra kattintva nem csak a játék töltődik fel az oldalra, de egy új rekord is rögzítésre kerül az adatbázisban a megadott adatokkal.

  Törlésnél egyrészt letörlődik a játék teljes állománya a weboldalról, másrészt az adatbázisban róla tárolt adatok is törlésre kerülnek. Figyelni kell rá, hogy a hozzá kapcsolódó pontszámokat és rekordokat is töröljük az adatbázisból.

#### 4.2 Nem funkcionális követelmények 

- **Termék követelmények**
  - Az oldal a kéréseket adatbáziskapcsolat kiépítésétől függetlenül 1000ms-on belül képes végrehajtani
  - Az adatbázisban a felhasználó csak a saját adatait képes megváltoztatni.
  - Az adatbázissal történő kommunikáció, amennyiben lehetséges, tárolt eljárásokon keresztül történjen.
  - A szoftver mérete nem haladja meg az 5 GB-ot.
  - Az oldal legyen fiatalos, modern kinézetű, figyelemfelkeltő.
  - Minden körülmények között fokozott figyelmet kell fordítani a tartalom politikai korrektségére, pl. a hagyományos női/férfi besoroláson kívül meg kell jelennie a gendersemlegességnek.
  - Bármilyen szexuális utalás a leghatározottabban tilos, csakúgy, mint a politikai tartalom.
- **Szervezeti követelmények**
  - A szoftver a szerződésben meghatározott időpontig, az előzetesen meghatározott követelményeknek megfelelő állapotban átadásra kerül. Ellenkező esetben a szerződésben feltüntetett kötbér megfizetése terheli a fejlesztő céget.
  - A program az előzetesen meghatározott rendszereken használható.
- **Külső követelmények**

  - A szoftverfejlesztő cég szakemberei és a megrendelő a kapcsolattartást az előzetesen meghatározott gyakorisággal folytatják. Amennyiben a fejlesztés előrehaladása érdekében további konzultáció szükséges, azt időpontegyeztetés után lehetséges beiktatni.
  - A szoftverfejlesztő cég munkatársainak a jóváhagyott etikai kódex alapján kell viselkedniük.

### 5. Funkcionális terv



### 6. Fizikai környezet


### 7. Absztrakt domain modell




### 8. Architekturális terv



### 9. Adatbázisterv




### 10. Implementációs terv



### 11. Tesztterv



#### 11.1. Tesztesetek a megadott követelménylista alapján



#### 11.2. Egyéb teszteseket




### 12. Telepítési terv



### 13. Karbantartási terv

