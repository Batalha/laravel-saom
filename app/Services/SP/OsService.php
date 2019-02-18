<?php
/**
 * Created by PhpStorm.
 * User: celio
 * Date: 18/02/2019
 * Time: 17:04
 */

namespace Saom\Services\SP;

use Saom\Models\SP\SpOs;

class OsService
{
    /**
     * @var SpOs
     */
    protected $servico;

    /**
     * OsService constructor.
     * @param SpOs $servico
     */
    public function __construct(SpOs $servico)
    {
        $this->servico = $servico;
    }

    public function lista(){

        $lista = $this->servico->all()->where('idos', 2);

      return $lista;
    }

    public function create(array $data)
    {
        return $this->servico->created($data);

    }

    public function update(array $data, $id)
    {
        return $this->servico->update($data, $id);

    }

}