function validate(){
    var amount = $('#amount').val();
    var time_period = $('#time_period').val();
    var returns = $('#returns').val();
    var count = 0;
    var data = [];

    if(amount < 100 || amount == ''){
        $('.amount').css('display', 'block');
    } else {
        $('.amount').css('display', 'none');
        
        count = count + 1;
    }

    if(time_period < 3 || time_period == ''){
        $('.time_period').css('display', 'block');
    } else {
        $('.time_period').css('display', 'none');
        count = count + 1;
    }

    if(returns == ''){
        $('.returns').css('display', 'block');
    } else {
        $('.returns').css('display', 'none');
        count = count + 1;
    }
    
    if(count == 3){
        return 'pass';
    }
}

function amount_validate(){
    var amount = $('#amount').val();
    if(amount < 100 || amount == ''){
        $('.amount').css('display', 'block');
    } else {
        $('.amount').css('display', 'none');
    }
}

function time_period_validate(){
    var time_period = $('#time_period').val();
    if(time_period < 3 || time_period == ''){
        $('.time_period').css('display', 'block');
    } else {
        $('.time_period').css('display', 'none');
    }
}

function returns_validate(){
    var returns = $('#amount').val();
    if(returns == ''){
        $('.returns').css('display', 'block');
    } else {
        $('.returns').css('display', 'none');
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

$('#submit').click(function() {
    if(validate() == 'pass'){
        var P = $('#amount').val();
        var n = $('#time_period').val();
        var r = $('#returns').val();

        // console.log('Invest amount monthly: '+P);
        // console.log('Invest time_period: '+n);
        // console.log('returns: '+r);

        /*
        FV = P [ ((1+i)^n)-1 ] * (1+i)/i
        FV = Future value or the amount you get at maturity.
        P = Amount you invest through SIP
        i = Compounded rate of return
        n = Investment duration in months
        r = Expected rate of return
        */

        var i = (r/100)/12;
        var FV = P * [(Math.pow((1+i), n)-1)/i] * (1+i);

        var total_amount = Math.round(FV);
        var total_invested_amount = Math.round(P*n);
        var estimated_returns = Math.round(FV - P*n);

        $('.tv').text('₹' + numberWithCommas(total_amount));
        $('.tav').text('₹' + numberWithCommas(total_invested_amount));
        $('.es').text('₹' + numberWithCommas(estimated_returns));

        // console.log('---------------------------------------------')
        // console.log('Total amount invested: '+ P*n)
        // console.log(FV);
        // console.log('---------------------------------------------')



        
    }
});