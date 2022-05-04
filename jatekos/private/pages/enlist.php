
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
                    <div><?php echo "Cím: " . $result[$i]['game_name'] ?></div>
                    <div><?php echo "Típus: " . $result[$i]['game_type_name'] ?></div>
                    <div><?php echo "Korcsoport: " . $result[$i]['age_group_name'] . " és feljebb" ?></div>
					<div><?php echo "Megjelenés: " . $result[$i]['last_update'] ?></div>
                </div>
				<?php if(isset($_SESSION['user'])) : ?>
				<div class="h5 text-center"> <form method="post" onaction="http://localhost/jatekos/index.php?p=about">
					<input class="btn btn-primary btn-md h5 col-lg-2 p-2" type="submit" id="button1" name="button1" value="Play">
					
				</div>
            </div>
        <?php endfor; ?>
<?php endif; ?>
    </div>
</div>
