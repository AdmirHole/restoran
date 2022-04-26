<?php

/*** S: Singleton class which connects to the database ***/
class Connection {
	private $_connection;

	private $_hostname = "localhost";
	private $_username = "caffeosc_oscar";
	private $_password = "Thegodfather2022";
    private $_database = "caffeosc_restoran";
	
	
	private static $_instance; 

    // Create instance of the class
	public static function instance() {
		
		if(!self::$_instance) { 
		
		    // If no instance then make one here
			self::$_instance = new self();
		}
		return self::$_instance;
	}

	// Constructor which connects to the database
	public function __construct() {
		
		$this->_connection = new mysqli($this->_hostname, $this->_username, 
			$this->_password, $this->_database);
		$this->_connection->set_charset('utf8');
	
		// Write that we can't connect to the database if we have an error
		if(mysqli_connect_error()) {
			trigger_error("Failed to connect to MySQL: " . mysqli_connect_error(), E_USER_ERROR);
		}
	}

	// Magic method clone is empty to prevent duplication of connection
	private function __clone() { }

	// Get mysqli connection
	public function connect() {
		return $this->_connection;
	}
}
/*** E: Singleton class which connects to the database ***/
