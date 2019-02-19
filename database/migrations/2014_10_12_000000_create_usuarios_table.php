<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->increments('idusuarios');
            $table->string('nome');
            $table->string('empresa');
            $table->string('funcao');
            $table->string('telefone');
            $table->string('login');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('senha');
            $table->integer('perfis_idperfis');
            $table->integer('empresas_idempresas');
            $table->tinyInteger('incidente');
            $table->integer('subperfil_idsubperfil');
            $table->tinyInteger('subperfil_idsubperfil');
            $table->integer('saom');
            $table->char('ativacao');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
}
