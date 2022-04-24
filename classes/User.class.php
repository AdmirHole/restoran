<?php

require 'Connection.class.php';

use Twilio\Rest\Client;

class User extends Connection
{

    private $conn;
    private $parentInstance;

    public function Connect()
    {
        $this->parentInstance = parent::instance();
        $this->conn = $this->parentInstance->connect();
    }

    public function __construct()
    {
        $this->Connect();
    }
    public function insert_grupe($nazivGrupe)
    {
        $this->Connect();

        if ($this->conn->query("INSERT INTO grupe (naziv_grupe) VALUES ('$nazivGrupe')")) {
            return true;
        };
    }
    public function insert_artikla($idGrupe, $nazivArtikla, $cijena, $kolicina)
    {
        $this->Connect();

        if ($this->conn->query("INSERT INTO artikli (naziv, kolicina, cijena, grupa) VALUES ('$nazivArtikla', '$kolicina', '$cijena', '$idGrupe')")) {
            return true;
        };
    }
    public function get_grupe()
    {
        $this->Connect();

        if ($result = $this->conn->query("SELECT * FROM grupe")) {
            $data = [];
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
            return $data;
        };
    }

    public function get_menu()
    {
        $this->Connect();
        if ($result = $this->conn->query("SELECT a.id as artikal_id, a.naziv, a.kolicina, a.cijena, g.naziv_grupe
        FROM artikli a JOIN grupe g on g.id=a.grupa")) {
            $data = [];
            $menu = [];
            while ($row = $result->fetch_assoc()) {
                $data[$row['naziv_grupe']][] = $row;
            }

            return $data;
        };
    }


    //END
}
