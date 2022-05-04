<?php
header('Content-type: text/html; charset=utf-8');
require_once './private/utils/db_manager.php';

function enlist(){
    $game_type = strtolower(filter_input(INPUT_POST, 'game_type'));
    $age_type = strtolower(filter_input(INPUT_POST, 'age_type'));
	
	$query = "SELECT game.game_id, game.game_name, game_type.game_type_name, age_group.age_group_name, game.game_location, game.last_update, game.game_desc FROM game 
		INNER JOIN game_type ON game_type.game_type_id = game.game_type_id 
		INNER JOIN age_group ON age_group.age_group_id = game.game_age_group_id 
        WHERE game_type.game_type_name = '" .$game_type. "' 
        AND age_group.age_group_id >= (SELECT age_group_id FROM age_group
        WHERE age_group_name = '" . $age_type. "' )";
    $result = select($query);

    require_once CONTENT_DIR.'pages/enlist.php';
}
