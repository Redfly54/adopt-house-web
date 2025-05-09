<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Adopt House</title>
        <!-- <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-eval' 'unsafe-inline' http://localhost:5173; style-src 'self' 'unsafe-inline' http://localhost:5173;"> -->
        <meta http-equiv="Content-Security-Policy" content="script-src * 'unsafe-eval' 'unsafe-inline' http://localhost:5173; style-src * 'unsafe-inline' http://localhost:5173;">
        <!-- <?php if(app()->environment('local')): ?>
            <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-eval' 'unsafe-inline' http://localhost:5173 http://[::1]:5173; style-src 'self' 'unsafe-inline' http://localhost:5173 http://[::1]:5173;">
        <?php endif; ?> -->
        <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
        <?php echo app('Illuminate\Foundation\Vite')('resources/react/App.jsx'); ?>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html><?php /**PATH C:\Users\Jason_2\Documents\Kuliah\DBS\adopt-house-web\resources\views/welcome.blade.php ENDPATH**/ ?>