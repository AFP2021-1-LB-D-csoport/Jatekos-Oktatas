
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
                            <a href="?p=games/memorygame2/index">
                                <input class="btn btn-primary btn-md h5 p-3" type="submit" id="button" name="button" value="Play">
                            </a>
                        <?php endif; ?>
                    </div>
                <?php endfor; ?>
        <?php endif; ?>
    </div>
</div>
