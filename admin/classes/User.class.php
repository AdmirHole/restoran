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

    // Registruj novog korisnika
    public function register($username, $password)
    {

        $hash_password = password_hash($password, PASSWORD_BCRYPT);
        $this->Connect();
        $conn = $this->conn;
            //$result = $this->conn->query("INSERT INTO user (fullname, email, password, status, token) VALUES('$username', '$email', '$user_hashed_password', '3', '$token')");
            $sql  = "INSERT INTO user (username, password) VALUES(?, ?)";
            $stmt = mysqli_stmt_init($conn);

            if (!mysqli_stmt_prepare($stmt, $sql)) {
                //echo "Error updating record: " . mysqli_error($this->conn);
                exit();
                header("location: http://admin.caffeoscar.com/error");
            } else {
                mysqli_stmt_bind_param($stmt, "ss", $username, $hash_password);
                if (!mysqli_stmt_execute($stmt)) {
                    //echo "Error updating record: " . mysqli_error($this->conn);
                    exit();
                    header("location: http://admin.caffeoscar.com/error");
                }

                mysqli_stmt_close($stmt);
            }
        
        return true;
        mysqli_close($conn);
    }

    public function login($username, $password)
    {

        $stmt = $this->conn->prepare("SELECT * FROM user WHERE username=?");

            $stmt->bind_param("s", $username);
            $stmt->execute();

            $result = $stmt->get_result();
            while ($row = $result->fetch_assoc()) {
                if(password_verify($password, $row['password'])){
                    session_start();
                    $_SESSION['login'] = true;
                }
            }
        
        return true;
        mysqli_close($this->conn);
    }



    //END
}
