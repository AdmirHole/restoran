<?php if (sidebar_off() === false) : ?>
    <ul class="toggle-button">
        <li class="nav-item">
            <i class="fas fa-bars"></i>
        </li>
    </ul>
<?php endif; ?>
<?php
$projectsForSidebar = json_decode($class->user_product(null, $_SESSION['user_session']), true);
$projectProductSidebar = json_decode($class->project_product(null), true);
$proj = json_decode($class->get_projects(null));
?>
<aside class="sidebar">
    <nav class="nav-sidebar">
        <ul class="sidebar-list">
            <li class="sidebar-item no-submenu">
                <a href="applications" class="sidebar-link">
                    <i class="fas fa-tachometer-alt"></i>
                    <?php echo language('sidebar', 'dashboard'); ?>
                </a>
            </li>

            <li class="sidebar-item has-submenu submenu-close">
                <a href="#" class="sidebar-link">
                    <i class="fas fa-ellipsis-h"></i>
                    <span><?php echo language('sidebar', 'applications'); ?></span>
                    <i class="fas fa-angle-left open-submenu"></i>
                </a>
                <ul class="sidebar-submenu">
                    <?php
                    $_data = [];
                    foreach ($projectsForSidebar as $item) {
                        if ($item['status'] == "2") {
                            array_push($_data, $item);
                        }
                    }
                    foreach ($projectProductSidebar as $key) {
                        if ($key['price'] == 0) {
                            array_push($_data, $key);
                        }
                    }

                    $finalArr = [];
                    foreach ($_data as $v) {
                        if (isset($_finalArr[$v['project_id']])) {
                            // found duplicate
                            continue;
                        }
                        // remember unique item
                        $finalArr[$v['project_id']] = $v;
                    }
                    foreach ($finalArr as $data) {
                        if ($data['project_status'] == '1') {
                    ?>
                            <li class="submenu-item">
                                <a href="<?php echo htmlentities($data['project_url'], ENT_QUOTES); ?>" class="submenu-link">
                                    <i class="fas fa-ellipsis-v"></i>
                                    <?php echo htmlentities($data['project_name'], ENT_QUOTES); ?>
                                </a>
                            </li>
                    <?php
                        }
                    }
                    ?>
                </ul>
            </li>

            <li class="sidebar-item no-submenu">
                <a href="subscriptions" class="sidebar-link">
                    <i class="fas fa-scroll"></i>
                    <span><?php echo language('sidebar', 'subscriptions'); ?></span>
                </a>
            </li>

            <li class="sidebar-item no-submenu">
                <a href="transactions" class="sidebar-link">
                    <i class="fas fa-exchange-alt"></i>
                    <span><?php echo language('sidebar', 'transactions'); ?></span>
                </a>
            </li>
            <?php
            if (isset($_SESSION['status']) && $_SESSION['status'] == '0') {
            } else {
            ?>
                <li class="sidebar-item has-submenu submenu-close">
                    <a href="#" class="sidebar-link">
                        <i class="fas fa-cog"></i>
                        <span><?php echo language('sidebar', 'administration'); ?></span>
                        <i class="fas fa-angle-left open-submenu"></i>
                    </a>
                    <ul class="sidebar-submenu">
                        <li class="submenu-item">
                            <a href="users" class="submenu-link">
                                <i class="fas fa-users"></i>
                                <?php echo language('sidebar', 'users'); ?>
                            </a>
                        </li>
                        <li class="submenu-item">
                            <a href="admin-applications" class="submenu-link">
                                <i class="fas fa-layer-group"></i>
                                <?php echo language('sidebar', 'applications'); ?>
                            </a>
                        </li>
                        <li class="submenu-item">
                            <a href="packages" class="submenu-link">
                                <i class="fas fa-box-open"></i>
                                <?php echo language('sidebar', 'packages'); ?>
                            </a>
                        </li>
                    </ul>
                </li>
            <?php
            }
            ?>
            <li class="sidebar-item no-submenu">
                <a href="profile" class="sidebar-link">
                    <i class="nav-icon fas fa-user"></i>
                    <span><?php echo language('sidebar', 'profile'); ?></span>
                </a>
            </li>

            <li class="sidebar-item no-submenu">
                <a href="includes/logout.php" class="sidebar-link">
                    <i class="fas fa-sign-out-alt"></i>
                    <span><?php echo language('sidebar', 'logout'); ?></span>
                </a>
            </li>
        </ul>
    </nav>
</aside>