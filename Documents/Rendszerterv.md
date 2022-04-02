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



#### 4.2 Nem funkcionális követelmények 

- **Termék követelmények**

- **Szervezeti követelmények**

- **Külső követelmények**

  

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

