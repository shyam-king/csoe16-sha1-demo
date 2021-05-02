document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("convertButton").onclick = (e) => {
        inputValue = document.getElementById("inputText").value
        document.getElementById("outputText").value = Sha1.hash(inputValue)
    }
});