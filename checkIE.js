module.exports = {    
    check: function checkRules(userInput){

        let checkForIE = userInput.includes('cie');
        let checkForEI = userInput.includes('ei');
        let result = true;
        let index = 0;
        let regEx= new RegExp("([^c]ei)+");

        if (checkForEI == false && checkForIE == false){
            return result;
        }

        else if (checkForIE == true){
            result = false;
            return result;
        }
        else if(regEx.test(userInput)){
            result = false;
            return result;
        }
        
        return result;
    }
}