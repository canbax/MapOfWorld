(function () {
    "use strict";

    var paths, selectedPathInd, colorVal;
    var isFound = false;
    var choiceButtons;

    var page = WinJS.UI.Pages.define(GameVars.selectedFileName, {
        ready: function (element, options) {
            choiceButtons = document.getElementById("choicesSpan").children;
            for (var i = 0; i < choiceButtons.length; i++) {
                choiceButtons[i].addEventListener("click", choiceSelected, false);
            }

            paths = document.getElementsByTagName("path");
            for (var i = 0; i < paths.length; i++) {
                paths[i].addEventListener("mouseenter", pointerIn, false);
                paths[i].addEventListener("mouseleave", pointerOut, false);
            }

            setInterval(timerFunction, 300);
            colorVal = 0;

            generateQuestionAndOptions();
        }
    });

    function choiceSelected(evt) {
        var jqObj = $(evt.srcElement);
        var str = jqObj.html();

        var str2 = paths[selectedPathInd].getAttribute("title");
        if (str == str2) {
            isFound = true;
            jqObj.effect("highlight", { times: 2 }, 600);
            
        } else {
            jqObj.effect("shake", { times: 2 }, 600);
        }
    }

    function normalizePathColors() {
        for (var i = 0; i < paths.length; i++) {
            paths[i].style.display = "block"
        }
    }

    function pointerIn(obj) {
        var elem = obj.srcElement;
        //$(elem).toggle(300);
        // $(elem).animate({ fill: '#ffffff' }, 1000);
        $(elem).fadeOut(300);
        //elem.style.fill = "red";
        console.log(elem.getAttribute("title"));
        console.log(elem.getAttribute("id"));
        $("#pointedPlace").html(elem.getAttribute("title"));
        //obj.toElement.style.width = "64px";
    }

    function pointerOut(obj) {
        var elem = obj.srcElement;
        $(elem).fadeIn(300);
    }

    function timerFunction() {
        //var situation = document.getElementById("playButton").winControl.label;
        if (GameVars.isPlaying) {
            
            if (isFound) {
                $(paths[selectedPathInd]).fadeIn();
                setTimeout( function () {generateQuestionAndOptions()}, 2000);
                isFound = false;
            } else {
                $(paths[selectedPathInd]).toggle(300);
            }
            $("#pointedPlace").hide(1000);
        } else {
            $(paths[selectedPathInd]).fadeIn();
            $("#pointedPlace").show();
        }
    }

    function generateQuestionAndOptions() {
        selectedPathInd = Math.floor(Math.random() * (paths.length));
        var randIndices = choiceGenerator(selectedPathInd, paths.length, choiceButtons.length);
        randIndices = shuffle(randIndices);
        for (var i = 0; i < choiceButtons.length; i++) {
            $(choiceButtons[i]).html(paths[randIndices[i]].getAttribute("title"));
        }
    }

    function choiceGenerator(rightInd, size, choiceCount) {
        var arr = [rightInd];
        var rnd = Math.floor(Math.random() * size);;

        for (var i = 1; i < choiceCount; i++) {
            while (containsVal(arr, rnd)) {
                rnd = Math.floor(Math.random() * size);
            }
            arr.push(rnd);
        }
        return arr;
    }

    function containsVal(arr, val) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == val) {
                return true;
            }
        }
        return false;
    }
    
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    function randIndexGenerator(arrSize, min, max) {
        var arr = []
        while (arr.length < arrSize) {
            var randomnumber = Math.floor(Math.random() * (max - min)) + min;
            var found = false;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == randomnumber) { found = true; break }
            }
            if (!found) arr[arr.length] = randomnumber;
        }
        return arr;
    }
})();
