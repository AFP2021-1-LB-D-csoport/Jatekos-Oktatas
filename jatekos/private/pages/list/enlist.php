<div class="d-flex align-items-center justify-content-center">
    <div class="col-lg-6 col-md-8 col-sm-10">
    <?php
if ($result === null || empty($result)): ?>
    <h2 class="text-center">Nincs találat</h2>
<?php else: ?>
    <?php $count = count($result); ?>
        <?php for ($i = 0; $i < $count; $i++): ?>
            <div class="d-flex align-items-center justify-content-left">
                <img src="./public/img/no_image.jpeg" width="25%" class="p-2">
                <div class="row">
                    <div><?php echo $result[$i]['game_name'] ?></div>
                    <div><?php echo $result[$i]['game_type_name'] ?></div>
                    <div><?php echo $result[$i]['age_group_name'] ?></div>
					<div><?php echo $result[$i]['last_update'] ?></div>
					//<div><a href="../games/ <?php echo $result[$i]['game_location'] ?>">Page 2</a></div>
					<div><a href="../games/MemoryGame/MemoryGame.js">Play</a></div>
                </div>
            </div>
        <?php endfor; ?>
<?php endif; ?>
    </div>
</div>