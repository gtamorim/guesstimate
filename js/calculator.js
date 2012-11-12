    
    var Computer_TWO_Prices;
    var Computer_THREE_Prices;
    var Computer_FIVE_Prices;
    
    var Server_TWO_Prices;
    var Server_THREE_Prices;
    var Server_FIVE_Prices;
    
    var Screen_TWO_Prices;
    var Screen_THREE_Prices;
    var Screen_FIVE_Prices;
    
    var Office_TWO_Prices;
    var Office_THREE_Prices;
    var Office_FIVE_Prices;  
    
    var Exchange_TWO_Prices;
    var Exchange_THREE_Prices;
    var Exchange_FIVE_Prices; 
    
    var Switch_TWO_Prices;
    var Switch_THREE_Prices;
    var Switch_FIVE_Prices;

    var Router_TWO_Prices;
    var Router_THREE_Prices;
    var Router_FIVE_Prices;

    var TotalForTwoYear   = 0;
    var TotalForThreeYear = 0;
    var TotalForFiveYear  = 0;
       
    var MicrosoftExchangeNeedOrNot = 0;                     //Ms Exhange needed or not 
    var ServerNeedOrNot = 0;                                //Server needed or not 
    var CurrentWidth = 0;                                   //Current width from progressbar 
    var EquipmentNeedOrNot = 0;                             //Equipment needed or not    
    
    var ComputerTypeText;
    var ServerTypeText;
    var ScreenTypeText;

    
////////////////////////////////////////////////////////////|Progress Bar |///////////////////////////////////////////
    function FillProgress(){
        if (CurrentWidth<680){
            CurrentWidth+=170;
            PaintProgress();
        }
        return CurrentWidth;
    }
    
    function EmptyProgress(){        
        CurrentWidth-=170;
        PaintProgress();
        return CurrentWidth;
    }
    
    function PaintProgress(){
        $( "#progressBar" ).width(CurrentWidth);
        if (CurrentWidth>600){
            $( "#progressBar" ).css('border-radius', '15px');
        } else {
            $( "#progressBar" ).css('border-radius', '15px 0 0 15px');
        }       
    }
    
    //Allow only numbers/digits in TextBox
    function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
      }

//////////////////////|Get numbers from Computer page|////////////////////////|Get numbers from Computer page|//////////////

    //get the number of computer
    function getComNumber(){
      var numComputer = $('#inputComputer').val();        
      if (is_int(numComputer)==false){          
          numComputer = 'string';
      }      
      return numComputer;
    }
    
    //get the number of screen  
    function getScrNumber(){
      var numScreen = $('#inputScreen').val();
      if (is_int(numScreen)==false){
          numScreen = 'string';
      }
      return numScreen;
    }

    //get the number of Microsoft Office 
    function getOfficeNumber(){
      var numOffice = $('#microsoftOffice').val();      
      if (is_int(numOffice)==false){
          numOffice = 'string';
      }
      return numOffice;
    }   
    
/////////////////////|Get numbers from Server page|////////////////////////|Get numbers from Server page|///////////////////
    
    //get the number of server  
    function getSerNumber(){       
      var numServer = $('#inputServer').val();
      if (is_int(numServer)==false){
          numServer = 'string';
      }
      return numServer;
    }
    
    //Check if the input is string or number or empty return -> true or false
    function is_int(value){ 
      if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
          return true;
      } else { 
          return false;
      } 
    }

/////////////////////|Get numbers from Equipment page|////////////////////////|Get numbers from Equipment page|/////////

    //get the number of Switches  
    function getSwitchNumber(){
      var numSwitch = $('#inputSwitch').val();
      if (is_int(numSwitch)==false){
          numSwitch = 'string';
      }
      return numSwitch;
    }

    //get the number of Routeres  
    function getRouterNumber(){
      var numRouter = $('#inputRouter').val();
      if (is_int(numRouter)==false){
          numRouter = 'string';
      }
      return numRouter;
    }
    
////////////////////////////////////////////////////////////////////////////////////////////////////

    function ComputerSelected(){
        var scrSlected = document.getElementById("whichComputer").value;
        ComputerTypeText = $('#whichComputer option:selected').html();        
        return scrSlected;
    }
      
    //Onchange Combobox - Which Computer is selected
    function WhichComputer(){
        var txtComputer;
        ComputerType = parseInt(ComputerSelected());                 
        switch(ComputerType)
        {
        case 1:
          txtComputer = '<b>Basic machine for typical office work</b><br />64 bit OS<br /> 2GB RAM<br /> 250GB HDD<br /> Dual Core Processor';          
          Computer_TWO_Prices = 44.152 * getComNumber();
          Computer_THREE_Prices = 38.628 * getComNumber();
          Computer_FIVE_Prices = 34.044 * getComNumber();
          break;
        case 2:
          txtComputer = '<b>Robust machine with good performance for office work</b><br />64 bit OS<br /> 4GB RAM<br /> 250GB HDD<br /> i3 or i5 processor';
          Computer_TWO_Prices = 56.122 * getComNumber();
          Computer_THREE_Prices = 47.1455 * getComNumber();
          Computer_FIVE_Prices = 39.6965 * getComNumber();
          break;
        case 3:
          txtComputer = '<b>High performance machine for resource hungry  applications</b><br />64 bit OS<br /> 8GB RAM<br /> 250GB HDD<br /> quad core processor ';
          Computer_TWO_Prices = 68.092 * getComNumber();
          Computer_THREE_Prices = 55.663 * getComNumber();
          Computer_FIVE_Prices = 45.349 * getComNumber();
          break;  
        default:
          txtComputer = 'What kind of computer are you looking for?';          
        }        
        $('#explainComputer').html(txtComputer); 
    }     
    
    function ScreenSelected(){
        var scrSlected = document.getElementById("whichScreen").value;
        ScreenTypeText = $('#whichScreen option:selected').html();
        return scrSlected;
    }
    
    //Onchange Combobox - Which Screen is selected
    function ScreenPrice(){ 
        ScreenType = parseInt(ScreenSelected());  
        switch(ScreenType)
        {
        case 1:
          Screen_TWO_Prices = 4.788 * getScrNumber();
          Screen_THREE_Prices = 3.407 * getScrNumber();
          Screen_FIVE_Prices = 2.261 * getScrNumber();
          break;
        case 2:
          Screen_TWO_Prices = 5.7456 * getScrNumber();
          Screen_THREE_Prices = 4.0884 * getScrNumber();
          Screen_FIVE_Prices = 2.7132 * getScrNumber();
          break;  
        case 3:
          Screen_TWO_Prices = 8.379 * getScrNumber();
          Screen_THREE_Prices = 5.96225 * getScrNumber();
          Screen_FIVE_Prices = 3.95675 * getScrNumber();
          break;
        case 4:
          Screen_TWO_Prices = 20.1096 * getScrNumber();
          Screen_THREE_Prices = 14.3094 * getScrNumber();
          Screen_FIVE_Prices = 9.4962 * getScrNumber();
          break;        
        }         
    } 
    
    function ServerSelected(){  
        if ($('#input-server:checked').val()==1){
        var serSlected = document.getElementById("whichServer").value;
        ServerTypeText = $('#whichServer option:selected').html();
        }else{
            serSlected=4;
        }
        return serSlected;
    }
    
    //Onchange Combobox - Which Screen is selected
    function WhichServer(){ 
        //alert(ServerType);
            var txtServer;
            ServerType = parseInt(ServerSelected());               
            switch(ServerType)
            {
            case 1:
              txtServer = '<b>Basic file and print server for typical office</b><br />4GB RAM<br /> 500GB HDD<br /> Dual Core Processor';
              Server_TWO_Prices = 179.276 * getSerNumber();
              Server_THREE_Prices = 141.989 * getSerNumber();
              Server_FIVE_Prices = 111.047 * getSerNumber();
              break;
            case 2:
              txtServer = '<b>Robust machine for file, print and email services</b><br />8GB RAM<br /> 500GB HDD<br /> quad core processor';
              Server_TWO_Prices = 217.58 * getSerNumber();
              Server_THREE_Prices = 169.245 * getSerNumber();
              Server_FIVE_Prices = 129.135 * getSerNumber();
              break;
            case 3:
              txtServer = '<b>High performance machine for large offices</b><br />16GB RAM<br /> 1TB HDD<br /> quad core processor';
              Server_TWO_Prices = 289.4 * getSerNumber();
              Server_THREE_Prices = 220.35 * getSerNumber();
              Server_FIVE_Prices = 163.05 * getSerNumber();
              break; 
            case 4:
              txtServer = '';
              Server_TWO_Prices = 0;
              Server_THREE_Prices = 0;
              Server_FIVE_Prices = 0;
              break;  
            }  
            $('#explainServer').html(txtServer); 
     }
     
////////////////////////////|Get Total price from each Item|//////////////////////////////////////////////    
    //Total Prices For Office
    function TotalPricesForOffice(){
        Office_TWO_Prices = 10.5336 * getOfficeNumber();
        Office_THREE_Prices = 7.4954 * getOfficeNumber();
        Office_FIVE_Prices = 4.9742 * getOfficeNumber();
    }

    //Total Prices For Router
    function TotalPricesForSwitch(){
        if ($('#input-equipment:checked').val()==1){
            Switch_TWO_Prices = 12.9276 * getSwitchNumber();
            Switch_THREE_Prices = 9.1989 * getSwitchNumber();
            Switch_FIVE_Prices = 6.1047 * getSwitchNumber();
        } else {
            Switch_TWO_Prices = 0;
            Switch_THREE_Prices = 0;
            Switch_FIVE_Prices = 0;
        }
        
    }

    //Total Prices For Router
    function TotalPricesForRouter(){
        if ($('#input-equipment:checked').val()==1){
            Router_TWO_Prices = 7.182 * getRouterNumber();
            Router_THREE_Prices = 5.1105 * getRouterNumber();
            Router_FIVE_Prices = 3.3915 * getRouterNumber();
        } else {
            Router_TWO_Prices = 0;
            Router_THREE_Prices = 0;
            Router_FIVE_Prices = 0;
        }
    }  
    
    //Total Prices For MS Exchange
    function TotalPricesForExchage(){
        if (MicrosoftExchangeNeedOrNot==1){
            Exchange_TWO_Prices = 40.698;
            Exchange_THREE_Prices = 28.9595;
            Exchange_FIVE_Prices = 19.2185;
        }else{
            Exchange_TWO_Prices = 0;
            Exchange_THREE_Prices = 0;
            Exchange_FIVE_Prices = 0;
        }
    }    
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    function TotalPrice(){
        ScreenPrice();WhichComputer();WhichServer();TotalPricesForOffice();TotalPricesForSwitch();TotalPricesForRouter();TotalPricesForExchage();
        TotalForTwoYear   = parseFloat(Computer_TWO_Prices+Server_TWO_Prices+Screen_TWO_Prices+Office_TWO_Prices+Exchange_TWO_Prices+Switch_TWO_Prices+Router_TWO_Prices).toFixed(2);
        TotalForThreeYear = parseFloat(Computer_THREE_Prices+Server_THREE_Prices+Screen_THREE_Prices+Office_THREE_Prices+Exchange_THREE_Prices+Switch_THREE_Prices+Router_THREE_Prices).toFixed(2);
        TotalForFiveYear  = parseFloat(Computer_FIVE_Prices+Server_FIVE_Prices+Screen_FIVE_Prices+Office_FIVE_Prices+Exchange_FIVE_Prices+Switch_FIVE_Prices+Router_FIVE_Prices).toFixed(2);
        //alert('computer for two yeares '+Computer_TWO_Prices+' server '+Server_TWO_Prices+' screen '+Screen_TWO_Prices+' Office '+Office_TWO_Prices+' Exchange '+Exchange_TWO_Prices+' Switch '+Switch_TWO_Prices+' Router '+Router_TWO_Prices  +' Monthly payment '+TotalForTwoYear);
        
        $('#totalForTwoYears').text(TotalForTwoYear+' / month');               //Pass TotalForTwoYear inputboxs for Thank you page
        $('#totalForThreeYears').text(TotalForThreeYear+' / month');
        $('#totalForFiveYears').text(TotalForFiveYear+' / month');
        
        $('#TotalTWOyears').val(TotalForTwoYear);                   //Pass TotalForTwoYear inputboxs for ajax
        $('#TotalTHREEyears').val(TotalForThreeYear); 
        $('#TotalFIVEyears').val(TotalForFiveYear); 
    }
    
    
// Semicolon (;) to ensure closing of earlier scripting
// Encapsulation
// $ is assigned to jQuery    
;(function($){	

    //hide the perv and send-email button when page loaded    
    $('#go-prev').hide();
    $('#go-next').hide();
    $('#sendmail').hide();     

    //some questions need to be hide when it is not nesesarry
    $('#howManyServer').hide(); 
    $('#howManyEquipment').hide(); 
    
    var pageNum;                                            //Value of Current page 
    
  // DOM Ready  
  $(function(){
    var slider = $('#slider1').bxSlider({
      controls: false,                                      //show perv/next btn
      //pager: true,                                        //Number of pages
      infiniteLoop: false,                                  //Stop the Loop
      onBeforeSlide: function(currentSlide, totalSlides){
           pageNum = currentSlide;                          //Value of Current page           
           hidePervNextBtn(currentSlide, totalSlides);
           if (currentSlide==0){$('#go-next').hide();}
      }      
    });
    
    $('#start').click(function(){        
  	  //slider.goToLastSlide(); 
          slider.goToNextSlide(); 
          FillProgress();
          WhichComputer();
  	  return false;
    });
  
    $('#go-prev').click(function(){  
          EmptyProgress();        
  	  slider.goToPreviousSlide();
  	  return false;
    });
  
    $('#go-next').click(function(){      
          myValidation(pageNum);          
  	  return false;
    }); 
    
    $('#termsAndConditions').click(function(e){          
          // Prevents the default action to be triggered. 
            e.preventDefault();                
            // Triggering bPopup when click event is fired
            $('#popupTerms').bPopup({
                opacity: 0,
                zIndex: 200,
                modalClose: false,
                positionStyle: 'fixed'
            })          
  	  return false;
    }); 
    
    
    // Binding a click event
    // From jQuery v.1.7.0 use .on() instead of .bind()
    //$('#send-email').bind('click', function(e) {
    $('#sendmail').click(function(e) {        
        var mail = $("#mail").val();
        
        if ($('#AcceptedRadio').val()==1 && $('#name').val()!='' && mail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)){                  
            myValidation(4); 
        }else if ($('#name').val()==''){
            // Prevents the default action to be triggered. 
            e.preventDefault();                
            // Triggering bPopup when click event is fired                        
            errorBox(5);
        }else if (!mail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)){
            // Prevents the default action to be triggered. 
            e.preventDefault();                
            // Triggering bPopup when click event is fired                        
            errorBox(6);
        }else if($('#AcceptedRadio').val()==0){        
            // Prevents the default action to be triggered. 
            e.preventDefault();                
            // Triggering bPopup when click event is fired                        
            errorBox(4);          
        }
    });   
    
    //Error box to illustrate the errors
    function errorBox(n){
        var txtError;
        switch(n)
        {
        case 1:
          txtError = 'Please enter a correct number.';
          break;
        case 2:
          txtError = 'Do you need any servers?';
          break;
        case 3:
          txtError = 'Do you need any equipment?';
          break;  
        case 4:
          txtError = 'Please accept the terms and conditions.';
          break;
        case 5:
          txtError = 'Please fill in all the required fields.';
          break;
        case 6:
          txtError = 'Please enter a valid email.';
          break;
        default:
          txtError = 'what do you want then';  
        }
         
        $('#popup1 div').text(txtError);
        $('#popup1').bPopup({
            opacity: 0,
            zIndex: 1000,
            modalClose: false,
            //positionStyle: 'fixed' 
            position: [200, 200]
        });
    }
    
    //Passs name and email to popup page
    function passNameAndEmailToPopupBox(){        
//       $('#name').val( $('#nameSlide').val() );
//       $('#mail').val( $('#mailSlide').val() );  
       $('#ComputersNumber').val($('#inputComputer').val());       
       $('#ScreensNumber').val($('#inputScreen').val()); 
       $('#MsOfficeNumber').val($('#microsoftOffice').val()); 
       $('#MsExchangeNumber').val(MicrosoftExchangeNeedOrNot);
       
       if (ServerNeedOrNot==1){           
            $('#ServerType').val(ServerTypeText); 
            $('#ServersNumber').val($('#inputServer').val());            
        }else{
            $('#ServerType').val('-');
            $('#ServersNumber').val('0'); 
        }        
        
        if (EquipmentNeedOrNot==1){           
           $('#SwitchesNumber').val($('#inputSwitch').val()); 
           $('#RoutersNumber').val($('#inputRouter').val());           
        }else{
            $('#SwitchesNumber').val('0'); 
            $('#RoutersNumber').val('0'); 
        } 
        $('#ComputerType').val(ComputerTypeText);                   //Pass Text of comboboxes into inputboxs for ajax
        $('#ScreenType').val(ScreenTypeText);        
        $('#AcceptedRadio').val($('#AcceptedRadio').val());
    }    
   
    setInterval(function(){hidetest()},3000);
    function hidetest(){        
        if ($('#response').text()== 'Your email is successfully sent.'){
            myValidation(4); 
        }
    
    }
   
    //Form Validation (if user input the box empty)
    function myValidation(n){ 
        switch(n)
        {
            case 1:
                if (getComNumber() != 'string' && getScrNumber() != 'string' && getOfficeNumber() != 'string'){                   
                   slider.goToNextSlide();
                   FillProgress();
                } else {
                    errorBox(1);
                }
            break; 
            case 2:
                 if($('#input-server:checked').val()==undefined) {
                        errorBox(2);
                }else if ($('#input-server:checked').val()==1){                        
                        if (getSerNumber() != 'string'){
                             slider.goToNextSlide();
                             FillProgress();  
                        } else {
                             errorBox(1);
                        }
                } else {
                        slider.goToNextSlide();
                        FillProgress();
                } 
            break;
            case 3:
                if($('#input-equipment:checked').val()==undefined) {
                        errorBox(3);
                }else if ($('#input-equipment:checked').val()==1){
                        if (getSwitchNumber() != 'string' && getRouterNumber() != 'string'){                            
                             slider.goToNextSlide();
                             FillProgress();
                             TotalPrice();                    
                             passNameAndEmailToPopupBox();
                        } else {
                            errorBox(1);
                        }
                } else {
                        slider.goToNextSlide();
                        FillProgress();
                        TotalPrice();                    
                        passNameAndEmailToPopupBox();
                } 
            break;
            case 4:
                if ($('#response').text()== 'Your email is successfully sent.'){
                        slider.goToNextSlide();
                        hidePervNextBtn(); 
                }        
            break;
        }
    }
    
});    
    //This function hide the perv button 
    function hidePervNextBtn(currentSlide, totalSlides){       
       if (currentSlide==0){            
            $('#go-next').hide();
            $('#go-prev').hide(); 
            $('#sendmail').hide(); 
       }else if (currentSlide>0){           
            $('#go-prev').show();
            $('#go-next').show();
            $('#sendmail').hide(); 
       }     
        
       if (currentSlide==(totalSlides-2)){            
            $('#go-next').hide();
            $('#sendmail').show();
       } else {
            $('#go-next').show();hideErrorBoxJquery();
       } 
       
       if (currentSlide==totalSlides){ 
            $('#go-next').hide();$('#sendmail').hide(); $('#go-prev').hide();
       }

    }
    
    function hideErrorBoxJquery(){
        $('.formErrorContent').hide();
        $('.formErrorArrow').hide();
        $('.nameformError').hide();
        $('.formError').hide();
        
       $('#ComputersNumber').hide(); 
       $('#ServersNumber').hide(); 
       $('#ScreensNumber').hide(); 
       $('#MsOfficeNumber').hide(); 
       $('#MsExchangeNumber').hide(); 
       $('#SwitchesNumber').hide(); 
       $('#RoutersNumber').hide(); 
       
       $('#TotalTWOyears').hide();   
       $('#TotalTHREEyears').hide(); 
       $('#TotalFIVEyears').hide();
       
       $('#ComputerType').hide();
       $('#ServerType').hide();
       $('#ScreenType').hide();
       $('#AcceptedRadio').hide(); 
       $('#Comment').hide(); 
    }
    function showErrorBoxJquery(){
        $('.formErrorContent').show();
        $('.formErrorArrow').show();  
        $('.nameformError').show();
        $('.formError').show();
    }

    //Server needed or not
    $("input:radio[name='input-server']").click(function(){                 
         if ($(this).is(':checked'))
            {                    
                if ($('#input-server:checked').val()==1){
                    ServerNeedOrNot = 1;                    
                    WhichServer(1);
                    $('#howManyServer').fadeIn(); 
                }else {
                    ServerNeedOrNot = 0; 
                    WhichServer(4);
                    $('#howManyServer').fadeOut();
                }
               
            }
    });
    
    //Microsoft Exchange needed for server or not
    $("input:radio[name='microsoft-exchange']").click(function(){             
         if ($(this).is(':checked'))
            {
                MicrosoftExchangeNeedOrNot = $('#microsoft-exchange:checked').val();                
            }
    });
    
    //Equipment needed or not
    $("input:radio[name='input-equipment']").click(function(){                 
         if ($(this).is(':checked'))
            {                
                if ($('#input-equipment:checked').val()==1){
                    EquipmentNeedOrNot = 1; 
                    $('#howManyEquipment').fadeIn(); 
                }else {
                    EquipmentNeedOrNot = 0;
                    $('#howManyEquipment').fadeOut();
                }
               
            }
    }); 
    
    //Microsoft Exchange needed for server or not
    $("input:radio[name='accept-condition']").click(function(){             
         if ($(this).is(':checked'))
            {                                 
                $('#AcceptedRadio').val(1);                
            }
    });

}(jQuery))