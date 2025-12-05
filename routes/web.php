<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    sleep(5);
    return Inertia::render('Home', ['name' => 'Eko']);
});

// Route::inertia('/', 'Home');
