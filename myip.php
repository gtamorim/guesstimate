<?php 
	echo "My ip is: ". $_SERVER['REMOTE_ADDR'];
?>

<script type="application/javascript">
    function getip(json){
      alert(json.ip); // alerts the ip address
    }
</script>

<script type="application/javascript" src="http://jsonip.appspot.com/?callback=getip"></script>