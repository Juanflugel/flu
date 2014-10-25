<?php 

class Flugel extends CI_Controller{

	public function __construct(){
		parent:: __construct();

		$this->load->helper('url');
	}

	public function subir_datos(){
		$this->load->view('vista/tarea.html');
	}

	public function ingreso_datos(){
		$this->load->view('vista/ingreso.html');
	}

	public function ingreso2(){
		$this->load->view('vista/ingreso2.html');
	}
}