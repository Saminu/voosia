$(document).ready(function(){

    var
        la,
        ld,
        fname = $('#firstname'),
        lname = $('#lastname'),
        phono = $('#phoneno'),
        email = $('#email'),
        loanAmount = $("#slider2"),
        loanAmountmobile = $("#amount-mobile"),
        loanDuration = $("#slider"),
        loanDurationmobile = $("#duration-mobile"),
        storage = $.sessionStorage,
        defaultamount = !storage.isEmpty('ngStorage-amount') ? storage.get('ngStorage-amount') : 2000,
        defaultduration = !storage.isEmpty('ngStorage-duration') ? storage.get('ngStorage-duration') : 15,

        //save instance of form on localStorage
        defaultfname = !storage.isEmpty('ngStorage-fname') ? storage.get('ngStorage-fname'): storage.get('ngStorage-fname'), //pass value to
        defaultlname = !storage.isEmpty('ngStorage-lname') ? storage.get('ngStorage-lname'): storage.get('ngStorage-lname'), //pass value to
        defaultphono = !storage.isEmpty('ngStorage-phono') ? storage.get('ngStorage-phono'): storage.get('ngStorage-phono'), //pass value to
        defaultemail = !storage.isEmpty('ngStorage-email') ? storage.get('ngStorage-email'): storage.get('ngStorage-email'), //pass value to

        setCookie = function(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        };

  //  console.log(defaultname);

    //set and remember default values
    loanAmount.val(defaultamount);
    loanDuration.val(defaultduration);
    fname.val(defaultfname);
    lname.val(defaultlname);
    phono.val(defaultphono);
    email.val(defaultemail);


    //amount slider
    loanAmount.slider({
        value: defaultamount,
        min: 1000,
        max: 3000,
        step: 500,
        animate: true,
        slide: function (event, ui) {
            $("#borrow").val("£" + ui.value);
            la = ui.value;
          //  console.log(la);
            setCookie('la', la);
            storage.set('ngStorage-amount', la);
        }
    });

    //duration slider
    loanDuration.slider({
        value: defaultduration,
        min: 12,
        max: 24,
        step: 3,
        animate: true,
        slide: function (event, ui) {
            $("#amount").val(ui.value + " month");
            ld = ui.value;
       //     console.log(ld);
            setCookie('ldm', ld);
            storage.set('ngStorage-duration', ld);

        }
    });

    $("#borrow").val("£" + loanAmount.slider("value"));

    $("#amount").val(loanDuration.slider("value") + " month");

    // Save field values locally desktop
    fname.keyup(function(){
        setCookie('fname',$(this).val());
        storage.set('ngStorage-fname', $(this).val());
    });

    lname.keyup(function(){
        setCookie('lname',$(this).val());
        storage.set('ngStorage-lname', $(this).val());
    });

    phono.keyup(function(){
        setCookie('phoneno',$(this).val());
        storage.set('ngStorage-phono', $(this).val());
    });

    email.keyup(function(){
        setCookie('email',$(this).val());
        storage.set('ngStorage-email', $(this).val());
    });

    // Save field values locally mobile
    loanAmountmobile.change(function(){
        storage.set('ngStorage-amount', $(this).val());
    });

    loanDurationmobile.change(function(){
        storage.set('ngStorage-duration', $(this).val());
    });

});