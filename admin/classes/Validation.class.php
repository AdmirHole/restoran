<?php
class Validation
{
	/* public function test_input($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	  }
	public function setName($fullname)
	{
		$this->fullname = $fullname;
	} */

	public function validateName($fullname)
	{
		$error = '*Invalid Fullname';

		if (preg_match('/^[a-zA-Z]+ [a-zA-Z]+$/', $fullname)) {
			return true;
		} else {
			echo $error;
		}
	}

	/* public function setPassword($password)
	{
		$this->password = $password;
	} */

	public function validatePassword($password) {

		$error = '';

		if (strlen($password) < 8 ) {
			$error = '*Password should be min 8 characters<br>';
			echo $error;
		} else if (!preg_match("/\d/", $password)) {
			$error = '*Password should contain at least one digit<br>';
			echo $error;
		} else if (!preg_match("/[A-Z]/", $password)) {
			$error = '*Password should contain at least one capital letter<br>';
			echo $error;
		} else if (!preg_match("/[a-z]/", $password)) {
			$error = '*Password should contain at least one small letter<br>';
			echo $error;
		} else if (!preg_match("/\W/", $password)) {
			$error = '*Password should contain at least one small letter<br>';
			echo $error;
		} else if (preg_match("/\s/", $password)) {
			$error = '*Password should not contain any white space<br>';
			echo $error;
		} else {
			return true;
		}
	}

	/* public function setEmail($email)
	{
		$this->email = $email;
	} */

	public function validateEmail($email) {
		$error = '*Invalid email';

		if (filter_var($email, FILTER_SANITIZE_EMAIL) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
			return true;
		} else {
			return $error;
		}
	}

	public function validateAll()
	{
	if ($this->validateName($this->fullname) AND $this->validatePassword($this->password) AND $this-> validateEmail($this->email))
		{
			return true;
		}

		return false;
	}


}

?>
