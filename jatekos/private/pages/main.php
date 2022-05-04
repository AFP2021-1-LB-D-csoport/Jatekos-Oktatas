<?php header('Content-type: text/html; charset=utf-8');?>
<meta charset="utf-8" />
<div class="d-flex align-items-center justify-content-center">
    <div class="col-lg-6 col-md-8 col-sm-10">
        <div class="display-6 mb-4 text-center">
            <p>Játékok keresése</p>
        </div>
		<div class="display-6 mb-4 text-center">
        <form action="http://localhost/jatekos/index.php?p=list&m=enlist" method="post" accept-charset="utf-8">
            <div class="d-flex align-items-center justify-content-center">
                <div class="form-group h5 col-lg-2 p-2">
                    <select id="game_type" name="game_type" class="p-1">
                    <option selected>Quiz</option>
                    <option>Matek</option>
                    <option>Idegen nyelv</option>
                    <option>Informatika</option>
                    <option>Rajz</option>
                    </select>
                </div>
				<div class="form-group h5 col-lg-3 p-2">
                    <select id="age_type" name="age_type" class="p-1">
                    <option value="Elso osztaly" selected>Első osztály</option>
                    <option value="Masodik osztaly">Második osztály</option>
                    <option value="Harmadik osztaly">Harmadik osztály</option>
                    <option value="Negyedik osztaly">Negyedik osztály</option>
                    <option value="Otodik osztaly">Ötödik osztály</option>
					<option value="Hatodik osztaly">Hatodik osztály</option>
					<option value="Hetedik osztaly">Hetedik osztály</option>
					<option value="Nyolcadik osztaly">Nyolcadik osztály</option>
                    </select>
                </div>
                <input class="btn btn-primary btn-md h5 col-lg-2 p-2" name="submit" id="submit" type="submit" value="Keresés">
        </form>
		</div>
        <div id="dropdownButton" class="text-center dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="detailedSearchButton1" data-toggle="dropdown">
                Részletes kereső
            </button>
        </div>
        <div id="dropupButton" class="text-center dropup" hidden>
            <button class="btn btn-secondary dropdown-toggle" type="button" id="detailedSearchButton2" data-toggle="dropdown">
                Részletes kereső
            </button>
        </div>
        <div class="h5 text-center"id="detailedSearchPanel" hidden>
            <div>Na, ide jöhet majd a részletes kereső</div>
        </div>
    </div>
</div>