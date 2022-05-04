<?php
header('Content-type: text/html; charset=utf-8');
require_once './private/utils/db_manager.php';

function check(){
	if(isset($_SESSION['user'])){
    $game = 0;
	}
	else{
	echo "A játékok csak bejelentkezés után futtathatóak!";
	}
}