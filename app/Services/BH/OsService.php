<?php
/**
 * Created by PhpStorm.
 * User: celio
 * Date: 18/02/2019
 * Time: 17:26
 */

namespace Saom\Services\BH;


use Saom\Models\BH\BhOs;

class OsService
{

    /**
     * @var BhOs
     */
    private $service;

    /**
     * OsService constructor.
     * @param BhOs $service
     */
    public function __construct(BhOs $service)
    {
        $this->service = $service;
    }

    public function lista(){
        $lista = $this->service->all()->where('idos', '5');
        return $lista;
    }

}