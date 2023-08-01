document.getElementById('savingPlanForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form from submitting and page from refreshing
    
    let goal = parseInt(document.getElementById('goal').value);
    let dollar = parseInt(document.getElementById('dollar').value);
    let hasSaved = document.querySelector('input[name="hasSaved"]:checked').value;
    let savedSoFar = parseInt(document.getElementById('savedSoFar').value);

    let check = Math.floor(goal / dollar);
    let resultElement = document.getElementById('result');

    resultElement.innerHTML = "You will need to save " + check + " times with " + dollar + "$ each time to reach your goal. ";

    if (hasSaved === 'yes') {
        let need = goal - savedSoFar;
        
        if (savedSoFar >= goal) {
            resultElement.innerHTML += "You have reached your goal!!!";
        } else {
            resultElement.innerHTML += "You need to save " + need + " more dollars to reach your goal.";
        }
    }
});
