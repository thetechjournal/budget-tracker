let totalIncome = document.getElementById('total-income');
let btnContinue = document.getElementById('continue');
let btnCheckBudget = document.getElementById("btn-budget-check");
let errorText = document.getElementById("error-text");
let errorTextIncome = document.getElementById("error-text-income");


// Initialize all expense amounts
let userGroceryExpensesAmt = 0;
let userHousingExpensesAmt = 0; 
let userTransportExpensesAmt = 0;
let userEducationExpensesAmt = 0;
let userEntertainmentExpensesAmt = 0;
let userMedicalExpensesAmt = 0;
let userPersonalExpensesAmt = 0;
let userUtilityExpensesAmt = 0; 
let userOtherExpensesAmt = 0;

let expGroceryLimit = 0;
let expHousingLimit = 0;
let expTransportLimit = 0;
let expEducationLimit = 0;
let expEntertainmentLimit = 0;
let expMedicalLimit = 0;
let expPersonalLimit = 0;
let expUtilityLimit = 0;
let expOtherLimit = 0;

let userIncomeAmt = 0;

//Grocery
let tblExpGroceryLimit = document.getElementById("exp-grocery-limit");
let tblExpGrocery = document.getElementById("exp-grocery");
let tblExpGroceryAvailable = document.getElementById("exp-grocery-available");

//Housing
let tblHousingLimit = document.getElementById("exp-housing-limit");
let tblExpHousing = document.getElementById("exp-housing");
let tblExpHousingAvailable = document.getElementById("exp-housing-available");

//Transportation
let tblTransportLimit = document.getElementById("exp-transportation-limit");
let tblExpTransport = document.getElementById("exp-transportation");
let tblExpTransportAvailable = document.getElementById("exp-transportation-available");

//Educational
let tblEducationLimit = document.getElementById("exp-educational-limit");
let tblExpEducation = document.getElementById("exp-educational");
let tblExpEducationAvailable = document.getElementById("exp-educational-available");

//Entertainment
let tblEntertainmentLimit = document.getElementById("exp-entertainment-limit");
let tblExpEntertainment = document.getElementById("exp-entertainment");
let tblExpEntertainmentAvailable = document.getElementById("exp-entertainment-available");

//Medical
let tblMedicalimit = document.getElementById("exp-medical-limit");
let tblExpMedical = document.getElementById("exp-medical");
let tblExpMedicalAvailable = document.getElementById("exp-medical-available");

//Personal
let tblPersonalLimit = document.getElementById("exp-personal-limit");
let tblExpPersonal = document.getElementById("exp-personal");
let tblExpPersonalAvailable = document.getElementById("exp-personal-available");

//Utility
let tblUtilityLimit = document.getElementById("exp-utility-limit");
let tblExpUtility = document.getElementById("exp-utility");
let tblExpUtilityAvailable = document.getElementById("exp-utility-available");

//Other
let tblOtherLimit = document.getElementById("exp-other-limit");
let tblExpOther = document.getElementById("exp-other");
let tblExpOtherAvailable = document.getElementById("exp-other-available");

// Total
let tblTotal = document.getElementById("exp-total-limit");
let tblExpTotal = document.getElementById("exp-total");
let tblExpTotalAvailable = document.getElementById("exp-total-available");

let allBudgetLimitCollection = document.getElementsByClassName('budget-limit');
let allExpenseAmtCollection = document.getElementsByClassName('exp-amount');
let allAvailableAmtCollection = document.getElementsByClassName('exp-amount-available');

// Event Listener - Continue Button 
btnContinue.addEventListener("click",function(){
    if(!totalIncome.value){
        errorTextIncome.style.color = "red";
        errorTextIncome.style.fontWeight = "bold";
        errorTextIncome.textContent = `Please enter the income value to continue.` 
        
    }
    else{
        errorTextIncome.style.display = "none";
    showMonthlyBudgetGrocery();
    showMonthlyBudgetHousing();
    showMonthlyBudgetTransportation();
    showMonthlyBudgetEducational();
    showMonthlyBudgetEntertainment();
    showMonthlyBudgetMedical();
    showMonthlyBudgetPersonal();
    showMonthlyBudgetUtility();
    showMonthlyBudgetOther();
    showTotalMonthlyBudgetValue();
    updateTotalAvailableAmt();
    }
})

// Event Listener - Budget Check Button 
btnCheckBudget.addEventListener("click", function() {
    
    let prodDesc = document.getElementById("prod-desc").value;
    let prodValue = document.getElementById("prod-value").value;
    let expenseType = (document.getElementById("expense-type").value).toLowerCase();

    if(!prodDesc || !prodValue){
        errorText.style.color = "red";
        errorText.style.fontWeight = "bold";
        errorText.textContent = `Please enter the required input values.` 
      
    } else{
        errorText.style.display = "none";
        availableLimitExpenseTypeSelector = `exp-${expenseType}-available`;
        let availableExpenseLimit = parseInt((document.getElementById(availableLimitExpenseTypeSelector).innerHTML));
        if(prodValue < availableExpenseLimit) {
            document.getElementById("success").style.display = "block";
        }
        else {
            document.getElementById("failure").style.display = "block";
        }
        updateTotalExpenses();
    }
})

// Event Listener - Close Button - Expense not allowed
document.getElementById("close-sorry-modal").addEventListener("click", function() {
    document.getElementById("failure").style.display = "none";
})

// Event Listener - Close Button - Expense is allowed
document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("success").style.display = "none";
})

// Methods
function showMonthlyBudgetGrocery() {
    expGroceryLimit = 20/100 * totalIncome.value;
    tblExpGroceryLimit.innerText = expGroceryLimit;
    tblExpGrocery.innerText = userGroceryExpensesAmt;
    tblExpGroceryAvailable.innerText = expGroceryLimit - userGroceryExpensesAmt;
}

function showMonthlyBudgetHousing() {
    expHousingLimit = 20/100 * totalIncome.value;
    tblHousingLimit.innerText = expHousingLimit;
    tblExpHousing.innerText = userHousingExpensesAmt;
    tblExpHousingAvailable.innerText = expHousingLimit - userHousingExpensesAmt;
}

function showMonthlyBudgetTransportation() {
    expTransportLimit = 5/100 * totalIncome.value;
    tblTransportLimit.innerText = expTransportLimit;
    tblExpTransport.innerText = userTransportExpensesAmt;
    tblExpTransportAvailable.innerText = expTransportLimit - userTransportExpensesAmt;
}

function showMonthlyBudgetEducational() {
    expEducationLimit = 15/100 * totalIncome.value;
    tblEducationLimit.innerText = expEducationLimit;
    tblExpEducation.innerText = userEducationExpensesAmt;
    tblExpEducationAvailable.innerText = (expEducationLimit - userEducationExpensesAmt);
}

function showMonthlyBudgetEntertainment() {
    expEntertainmentLimit = 10/100 * totalIncome.value;
    tblEntertainmentLimit.innerText = expEntertainmentLimit;
    tblExpEntertainment.innerText = userEntertainmentExpensesAmt;
    tblExpEntertainmentAvailable.innerText = expEntertainmentLimit - userEntertainmentExpensesAmt;
}

function showMonthlyBudgetMedical() {
    expMedicalLimit = 5/100 * totalIncome.value;
    tblMedicalimit.innerText = expMedicalLimit;
    tblExpMedical.innerText = userMedicalExpensesAmt;
    tblExpMedicalAvailable.innerText = expMedicalLimit - userMedicalExpensesAmt;
} 

function showMonthlyBudgetPersonal() {
    expPersonalLimit = 10/100 * totalIncome.value;
    tblPersonalLimit.innerText = expPersonalLimit;
    tblExpPersonal.innerText = userPersonalExpensesAmt;
    tblExpPersonalAvailable.innerText = expPersonalLimit - userPersonalExpensesAmt;
} 

function showMonthlyBudgetUtility() {
    expUtilityLimit = 10/100 * totalIncome.value;
    tblUtilityLimit.innerText = expUtilityLimit;
    tblExpUtility.innerText = userUtilityExpensesAmt;
    tblExpUtilityAvailable.innerText = expUtilityLimit - userUtilityExpensesAmt;
} 

function showMonthlyBudgetOther() {
    expOtherLimit = 5/100 * totalIncome.value;
    tblOtherLimit.innerText = expOtherLimit;
    tblExpOther.innerText = userOtherExpensesAmt;
    tblExpOtherAvailable.innerText = expOtherLimit - userOtherExpensesAmt;
} 

function updateTotalExpenses() {
    let totalExpensesAmt = 0;
    for (let counter = 0; counter < allExpenseAmtCollection.length; counter++) {
        let expensesAmt = parseInt(allExpenseAmtCollection[counter].textContent);
        totalExpensesAmt = totalExpensesAmt + expensesAmt;
    }
    tblExpTotal.innerText = totalExpensesAmt;
    return totalExpensesAmt;
}

function showTotalMonthlyBudgetValue() {
    let totalBudgetAmt = 0;
    for (let counter = 0; counter < allBudgetLimitCollection.length; counter++) {
        let budgetAmt = parseInt(allBudgetLimitCollection[counter].textContent);
        totalBudgetAmt = totalBudgetAmt + budgetAmt;
    }
    tblTotal.innerText = totalBudgetAmt;
    return totalBudgetAmt;
}

function updateTotalAvailableAmt() {
    let totalAvailableAmt = 0;
    for (let counter = 0; counter < allAvailableAmtCollection.length; counter++) {
        let availableAmt = parseInt(allAvailableAmtCollection[counter].textContent);
        totalAvailableAmt = totalAvailableAmt + availableAmt;
    }
    tblExpTotalAvailable.innerText = totalAvailableAmt;
    return totalAvailableAmt;
}

function updateExpenseAmt(expenseType, prodValue) {
    switch(expenseType) {
        case "grocery":
            userGroceryExpensesAmt = userGroceryExpensesAmt + prodValue;
            tblExpGrocery.innerText = userGroceryExpensesAmt;
            tblExpGroceryAvailable.innerText = expGroceryLimit - userGroceryExpensesAmt;
          break;
          case "housing":
            userHousingExpensesAmt = userHousingExpensesAmt + prodValue;
            tblExpHousing.innerText = userHousingExpensesAmt;
            tblExpHousingAvailable.innerText = expHousingLimit - userHousingExpensesAmt;
          break;
          case "transportation":
            userTransportExpensesAmt = userTransportExpensesAmt + prodValue;
            tblExpTransport.innerText = userTransportExpensesAmt;
            tblExpTransportAvailable.innerText = expTransportLimit - userTransportExpensesAmt;
          break;
          case "educational":
            userEducationExpensesAmt = userEducationExpensesAmt + prodValue;
            tblExpEducation.innerText = userEducationExpensesAmt;
            tblExpEducationAvailable.innerText = expEducationLimit - userEducationExpensesAmt;
          break;
          case "entertainment":
            userEntertainmentExpensesAmt = userEntertainmentExpensesAmt + prodValue;
            tblExpEntertainment.innerText = userEntertainmentExpensesAmt;
            tblExpEntertainmentAvailable.innerText = expEntertainmentLimit - userEntertainmentExpensesAmt;
          break;  
          case "medical":
            userMedicalExpensesAmt = userMedicalExpensesAmt + prodValue;
            tblExpMedical.innerText = userMedicalExpensesAmt;
            tblExpMedicalAvailable.innerText = expMedicalLimit - userMedicalExpensesAmt;
          break; 
          case "personal":
            userPersonalExpensesAmt = userPersonalExpensesAmt + prodValue;
            tblExpPersonal.innerText = userPersonalExpensesAmt;
            tblExpPersonalAvailable.innerText = expPersonalLimit - userPersonalExpensesAmt;
          break; 
          case "utility":
            userUtilityExpensesAmt = userUtilityExpensesAmt + prodValue;
            tblExpUtility.innerText = userUtilityExpensesAmt;
            tblExpUtilityAvailable.innerText = expUtilityLimit - userUtilityExpensesAmt;
          break; 
          case "other":
            userOtherExpensesAmt = userOtherExpensesAmt + prodValue;
            tblExpOther.innerText = userOtherExpensesAmt;
            tblExpOtherAvailable.innerText = expOtherLimit - userOtherExpensesAmt;
          break; 

        default:
      }

    updateTotalExpenses();
    updateTotalAvailableAmt();
}

document.getElementById("update-expense").addEventListener("click", function() {
    let prodValue = parseInt(document.getElementById("prod-value").value);
    let expenseType = (document.getElementById("expense-type").value).toLowerCase();
    document.getElementById("success").style.display = "none";
    updateExpenseAmt(expenseType, prodValue);
})

// Drawing the graph using Canvas for allowed expense values
var myCanvas = document.getElementById("myCanvas");
myCanvas.width = 300;
myCanvas.height = 300;
 
var ctx = myCanvas.getContext("2d");

var myVinyls = {
    Grocery: 20,
    Housing: 20,
    Transportation: 5,
    Educational: 15,
    Entertainment: 10,
    Medical: 5,
    Personal: 10,
    Savings: 10,
    Other: 5,
};

var Piechart = function(options){
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
 
    this.draw = function(){
        var total_value = 0;
        var color_index = 0;
        for (var categ in this.options.data){
            var val = this.options.data[categ];
            total_value += val;
        }
 
        var start_angle = 0;
        for (categ in this.options.data){
            val = this.options.data[categ];
            var slice_angle = 2 * Math.PI * val / total_value;
 
            drawPieSlice(
                this.ctx,
                this.canvas.width/2,
                this.canvas.height/2,
                Math.min(this.canvas.width/2,this.canvas.height/2),
                start_angle,
                start_angle+slice_angle,
                this.colors[color_index%this.colors.length]
            );
 
            start_angle += slice_angle;
            color_index++;
        }
 
    }

    if (this.options.legend){
        color_index = 0;
        var legendHTML = "";
        for (categ in this.options.data){
            legendHTML += "<div><span style='display:inline-block;width:20px;background-color:"+this.colors[color_index++]+";'>&nbsp;</span> "+categ+"</div>";
        }
        this.options.legend.innerHTML = legendHTML;
    }

}

var myPiechart = new Piechart(
    {
        canvas:myCanvas,
        data:myVinyls,
        colors:["ForestGreen", "DodgerBlue", "YellowGreen", "Orange", "DeepSkyBlue", "LightCoral", "Teal", "DarkOrchid", "DarkGoldenRod"],
        // legend:myLegend
    }
);
myPiechart.draw();

function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}
