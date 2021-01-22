


// 1. kilometerToMeter-part

function kilometerToMeter(kilometer){
    
    if(kilometer >= 0){
        var meter = kilometer * 1000;
        meter = meter.toFixed(2);
        return meter;
    }
    else{
        return `The value of length can never be negative. Please give me accurate value`;
    }
}


// 2. budgetCalculator-part

function  budgetCalculator(watch, phone, laptop){
    if(watch >= 0 && phone >= 0 && laptop >=0){
        var totalForWatch = 50 * watch;
        var totalForPhone = 100 * phone;
        var totalForLaptop = 500 * laptop;
        var totalAmount = totalForWatch + totalForPhone + totalForLaptop;
        totalAmount = totalAmount.toFixed(2);
        return totalAmount;
    }
    else{
        return `Please Check Quantity & put accurate value`;
    }
}


// 3.hotelCost-part

function hotelCost(day){

    if(day <=10 && day > 0){
        var totalCostNormal = 100 * day;
        return TotalCostNormal;
    }
    else if(day <=20 && day > 0){
        var totalCostNormal = 100 * 10;
        var extraDay = day - 10;
        var totalCostDiscount = 80 * extraDay;
        totalCostDiscount = totalCostDiscount + totalCostNormal;
        return totalCostDiscount;
    }
    else if(day >=21 && day > 0){
        var totalCostNormal = 100 * 10;
        var totalCostDiscount = 80 * 10;
        var moreExtraDay = day - 20;
        var totalCostMoreDiscount = 50 * moreExtraDay;
        totalCostMoreDiscount = totalCostMoreDiscount + totalCostDiscount + totalCostNormal;
        return totalCostMoreDiscount.toFixed(2);
    }
    else{
        return `Please give me your exact spended day`;
    }
}


// 4. megaFriend-part

function megaFriend(array){
    var megaFriendName = '';
    for (var i = 0; i < array.length; i++){
        var element = array[i];
        var elementLength = element.length;
        var megaFriendNameLength = megaFriendName.length;
        if(elementLength > megaFriendNameLength){
            megaFriendName = element;
        }
    }
    return megaFriendName;
}




///console

var result = kilometerToMeter(197.4575875);
console.log(result);

var total = budgetCalculator(2, 5, 4);
console.log(total);

var totalCost = hotelCost(23);
console.log(totalCost);

var big = megaFriend(['taki', 'chamak', 'mahfuz', 'khairul Islam', 'suparna', ' ']);
console.log(big);