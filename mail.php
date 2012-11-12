<?php

require_once 'inc/tfpdf.php';
require_once 'inc/PHPMailer/class.phpmailer.php';

$name    = $_POST['name'];
$date    = date("Y-m-d H:i",strtotime ('+1 hour', strtotime (date("Y-m-d H:i"))));
$pdfdate = date("M/d/Y",strtotime ('+1 hour', strtotime (date("Y-m-d H:i"))));
$expierydate = date("M/d/Y", strtotime('+14 day', strtotime(date("Y-m-d H:i"))));
$Computers_Number  = $_POST['Computers_Number'];
$Servers_Number    = $_POST['Servers_Number'];
$Screens_Number    = $_POST['Screens_Number'];
$MsOffice_Number   = $_POST['MsOffice_Number'];
$MsExchange_Number = $_POST['MsExchange_Number'];
$Switches_Number   = $_POST['Switches_Number'];
$Routers_Number    = $_POST['Routers_Number'];
$TotalFor_Two_Years     = $_POST['TotalFor_Two_Years'];
$TotalFor_THREE_Years   = $_POST['TotalFor_THREE_Years'];
$TotalFor_FIVE_Years    = $_POST['TotalFor_FIVE_Years'];
$ComputerType   = $_POST['ComputerType'];
$ServerType     = $_POST['ServerType'];
$ScreenType     = $_POST['ScreenType'];

////////////////////|Generate PDF|///////////////////////////////
class PDF extends tFPDF
{
    // Page header
    function Header(){
        // Logo
        $this->Image('./images/header.png',-1.5,-1.5,301,25);
        $this->Image('./images/logo.png',240,2.5,50,33);
        // Arial bold 15
        //$this->SetFont('Arial','B',14);
        // Move to the right
        $this->Cell(80);
        // Title
        //$this->Cell(30,10,'Title',1,0,'C');          
        // Line break
        $this->Ln(15);
    }

    // Page footer
    function Footer(){
        // Position at 1.5 cm from bottom
        $this->SetY(-25);
        // Arial italic 8
        $this->SetFont('Arial','B',10);
        $this->SetTextColor(79,79,79);
        //// Page number
        //$this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
        $this->Cell(10);
        $this->Cell(0,10,'E FORTIORI LIMITED',0,0,'C');
        $this->Cell(10);
        $this->SetFont('Arial','',6);
        $this->Ln(7);
        $this->Cell(10);
        $this->Cell(0,4,'(registered in England with number 04525778)',0,0,'C');
        $this->Ln(2);
        $this->Cell(10);
        $this->Cell(0,4,'VAT registration number 839 5900 91',0,0,'C');
        $this->Ln(3);
        $this->SetFont('Arial','',8);
        $this->Cell(8);
        $this->Cell(0,6,'14 City Road  London  EC1Y 2AA - 0845 6439 149 - info@efortiori.com - www.efortiori.com',0,0,'C');
    }
}

// Instanciation of inherited class
//$pdf = new PDF('P','mm','A4');//'P' or 'L' for normal or lanscap | 'pt' or 'mm' or 'cm' for page size 
$pdf = new PDF('L','mm','A4');//'P', 'pt'
//$pdf->AddFont('Georgiai','','georgiai.php');
$pdf->AddPage();
//$pdf->Image('logo.png',0,0,500);
//$pdf->SetFont("Arial","B",14);
//$pdf->Cell(40,10,'Hello World!');
$pdf->SetFont('Arial','',10);
$pdf->Cell(10); 
$pdf->Cell(50,10,'Dear '.$name);
$pdf->Cell(10);
$pdf->Ln(10);
$pdf->Cell(10);
$pdf->Cell(200,10,'Thank you for completing our Guesstimate, the approximate costs for your new machines are as follows:');
$pdf->Ln(10);
$pdf->Cell(10); 
$pdf->Cell(60,10,'Date: '.$pdfdate);
$pdf->Ln(10);

//First table head
$pdf->SetFont('Arial','B',10);
$pdf->Cell(10);
$pdf->Cell(50,8,'Item',1,0,'C');
$pdf->Cell(50,8,'Type',1,0,'C');
$pdf->Cell(20,8,'Quantity',1,0,'C');
$pdf->Cell(30);
$pdf->Cell(50,8,'Option',1,0,'C');
$pdf->Cell(40,8,'Cost / month',1,0,'C');
$pdf->Ln(8);

//First table body
//$pdf->SetFont('Arial','',10);
// Add a Unicode font (uses UTF-8)
$pdf->AddFont('DejaVu','','DejaVuSansCondensed.ttf',true);
$pdf->SetFont('DejaVu','',10);
$pdf->Cell(10);
$pdf->Cell(50,6,'Computer',1,0,'L');
$pdf->Cell(50,6,$ComputerType,1,0,'L');
$pdf->Cell(20,6,$Computers_Number,1,0,'C');
$pdf->Cell(30);
$pdf->Cell(50,6,'2 Yr Leasing Option',1,0,'L');
$pdf->Cell(40,6,"£ ".$TotalFor_Two_Years.' per month',1,0,'C');
$pdf->Ln(6);
$pdf->Cell(10);
$pdf->Cell(50,6,'Server',1,0,'L');
$pdf->Cell(50,6,$ServerType,1,0,'L');
$pdf->Cell(20,6,$Servers_Number,1,0,'C');
$pdf->Cell(30);
$pdf->Cell(50,6,'3 Yr Leasing Option',1,0,'L');
$pdf->Cell(40,6,"£ ".$TotalFor_THREE_Years.' per month',1,0,'C');
$pdf->Ln(6);
$pdf->Cell(10);
$pdf->Cell(50,6,'Screen',1,0,'L');
$pdf->Cell(50,6,$ScreenType,1,0,'L');
$pdf->Cell(20,6,$Screens_Number,1,0,'C');
$pdf->Cell(30);
$pdf->Cell(50,6,'5 Yr Leasing Option',1,0,'L');
$pdf->Cell(40,6,"£ ".$TotalFor_FIVE_Years.' per month',1,0,'C');
$pdf->Ln(6);
$pdf->Cell(10);
$pdf->Cell(50,6,'Ms Office',1,0,'L');
$pdf->Cell(50,6,'N/A',1,0,'L');
$pdf->Cell(20,6,$MsOffice_Number,1,0,'C');
$pdf->Ln(6);
$pdf->Cell(10);
$pdf->Cell(50,6,'Exchange',1,0,'L');
$pdf->Cell(50,6,'N/A',1,0,'L');
$pdf->Cell(20,6,$MsExchange_Number,1,0,'C');
$pdf->Ln(6);
$pdf->Cell(10);
$pdf->Cell(50,6,'Switch',1,0,'L');
$pdf->Cell(50,6,'N/A',1,0,'L');
$pdf->Cell(20,6,$Switches_Number,1,0,'C');
$pdf->Ln(6);
$pdf->Cell(10);
$pdf->Cell(50,6,'Router',1,0,'L');
$pdf->Cell(50,6,'N/A',1,0,'L');
$pdf->Cell(20,6,$Routers_Number,1,0,'C');
$pdf->Ln(15);
//table

$pdf->Cell(10);
$pdf->Cell(100,6,'So we can maintain an accurate service, this guesstimate is accurate until '.$expierydate.'.');
$pdf->Ln(10);
$pdf->SetFont('Arial','B',12); 
$pdf->Cell(10);
$pdf->Cell(100,6,'Remember this includes the computer, the installation AND support.');
$pdf->SetFont('Arial','',10);
$pdf->Ln(5);
$pdf->Cell(10);
$pdf->Cell(200,10,'For more details on what is included with your quotation, please see our terms and conditions which you can find on our web-site or you can request by emailing');
$pdf->Ln(5);
$pdf->Cell(10);
$pdf->Cell(200,10,'accounts@efortiori.com. Remember, this is only a guideline, to get the complete quotation we will need to get to know your needs a bit better.');

$pdf->Ln(8);
$pdf->Cell(10); 
$pdf->Cell(70,10,'Here are your next Steps:');
$pdf->Ln(10);

//First Square
$pdf->cell(10);
$pdf->Cell(45,23,'',1,0);
//Second Square
$pdf->cell(20);
$pdf->Cell(47,23,'',1,0);
//Third Square
$pdf->cell(20);
$pdf->Cell(43,23,'',1,0);
//Fourth Square
$pdf->cell(20);
$pdf->Cell(42,22,'',1,0);

$pdf->Image('./images/arrow_right.png',70,158,12,11);
$pdf->Image('./images/arrow_right.png',137,158,12,11);
$pdf->Image('./images/arrow_right.png',199,158,12,11);

$pdf->Ln(3);
$pdf->cell(10);
$pdf->Cell(40,8,'Call us for an audit (better                         Audit completed on-site and                        Timelines determined and                       Project completed and');
$pdf->Ln(6);
$pdf->cell(10);
$pdf->Cell(40,8,'idea of your needs)                                   recommendations presented                        project planned                                       support starts');
$pdf->Ln(6); 
$pdf->cell(10);
$pdf->Cell(40,8,'0845 6439 149');


////////////////////////////////////|Send Email|///////////////////////////////////////////////////////////

// email stuff (change data below)
$to = $_POST['mail'];  
$from = 'support@efortiori.com'; 
$subject = 'Your Guesstimate'; 
$message = "<p>Please see the attachment.</p>";

// attachment name
$pdf_filename = "Efortiori-Guesstimate.pdf";

// encode data (puts attachment in proper format)
$pdf->Output($pdf_filename);

$mail             = new PHPMailer(); // defaults to using php "mail()"

$body             = file_get_contents('emailTemplate.html');

$mail->IsSMTP(); // telling the class to use SMTP
$mail->Mailer 	= "smtp";
$mail->Host 	= "smtpout.europe.secureserver.net";
$mail->Port 	= 25; 
$mail->From    	= "support@efortiori.com";
$mail->FromName	= "E Fortiori";
$mail->SMTPAuth	= true; // turn on SMTP authentication
$mail->Username	= "gabriel.amorim@mayn.co.uk";
$mail->Password	= "echofox1";

$mail->AddAddress($to, $name);
$mail->Subject    = $subject;
$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test
$mail->MsgHTML('<br><div style="margin:10px">
<div style="width:640px;font-family:Arial,Helvetica,sans-serif;font-size:14px">
<br><br><p style="line-height:1.5;text-align:justify; margin-left:10px">Hi, '.$name.$body.$message . "<p></div></div>");

$mail->AddAttachment($pdf_filename); 

// send message //
if ($mail->Send()){        
	echo "Your email is successfully sent.";
	SaveDetailsToDb();             
} 
else{ 	
	echo "Mailer Error: " . $mail->ErrorInfo;   
}

//Send email to Database
function SaveDetailsToDb() {
	$host		= "localhost";                 // Host name
	$username	= "trim";             // Mysql username
	$password	= "Qaz@wsx*20";             // Mysql password
	$db_name	= "efortiori";              // Database name
	$tbl_name	= "prospective_clients";   // Table name

    mysql_connect($host, $username, $password) or die(mysql_error());
    mysql_select_db($db_name);        
   
    $sql = "INSERT INTO ".$tbl_name."(name, email, comments,ip) values ('$_POST[name]','$_POST[mail]','$_POST[comment]', '$_POST[ip]')";
    mysql_query($sql);	
}



?>