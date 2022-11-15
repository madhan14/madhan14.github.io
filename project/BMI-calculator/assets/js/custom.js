function height_validate(){
    var height = $('#height').val();
    
    if(height == ''){
        $('.height').css('display', 'block');
    } else {
        $('.height').css('display', 'none')
        return height;
    }
}

function weight_validate(){
    var weight = $('#weight').val();
    
    if(weight == ''){
        $('.weight').css('display', 'block');
    } else {
        $('.weight').css('display', 'none')
        return weight;
    }
}

$('#submit').click(function(){
    var height = height_validate();
    var weight = weight_validate();
    if(height != undefined && weight != undefined){
        var height_in_mtr_sq = height * height;
        var BMI = weight / height_in_mtr_sq;
        $('.bmi').text(Math.round(BMI));
        console.log('height_in_mtr_sq: '+height_in_mtr_sq);
        console.log('weight: '+weight);
        console.log('BMI: '+BMI);
    }
})