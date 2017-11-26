// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
	"use strict";
	var fileNames = ["afghanistanHigh.svg", "albaniaHigh.svg", "algeriaHigh.svg", "americanSamoaHigh.svg", "andorraHigh.svg", "angolaHigh.svg", "antiguaBarbudaHigh.svg", "argentinaHigh.svg", "armeniaHigh.svg", "arubaHigh.svg", "australiaHigh.svg", "austriaHigh.svg", "azerbaijanHigh.svg", "bahamasHigh.svg", "bahrainHigh.svg", "bangladeshHigh.svg", "belarusHigh.svg", "belgiumHigh.svg", "belizeHigh.svg", "beninHigh.svg", "bhutanHigh.svg", "boliviaHigh.svg", "bosniaHerzegovinaCantonsHigh.svg", "bosniaHerzegovinaRegionsHigh.svg", "botswanaHigh.svg", "brazilHigh.svg", "bruneiDarussalamHigh.svg", "bulgariaHigh.svg", "burkinaFasoHigh.svg", "burundiHigh.svg", "cambodiaHigh.svg", "cameroonHigh.svg", "canadaHigh.svg", "capeVerdeHigh.svg", "caymanIslandsHigh.svg", "centralAfricanRepublicHigh.svg", "chadHigh.svg", "chileHigh.svg", "chinaHigh.svg", "christmasIslandHigh.svg", "colombiaHigh.svg", "comorosHigh.svg", "congoDRHigh.svg", "congoHigh.svg", "continentsHigh.svg", "continentsWithAntarcticaHigh.svg", "cookIslandsHigh.svg", "costaRicaHigh.svg", "croatiaHigh.svg", "cubaHigh.svg", "cyprusHigh.svg", "cyprusNorthernCyprusHigh.svg", "czechRepublicHigh.svg", "denmarkHigh.svg", "djiboutiHigh.svg", "dominicaHigh.svg", "dominicanRepublicHigh.svg", "eastTimorHigh.svg", "ecuadorHigh.svg", "egyptHigh.svg", "elSalvadorHigh.svg", "equatorialGuineaHigh.svg", "eritreaHigh.svg", "estoniaHigh.svg", "ethiopiaHigh.svg", "falklandIslandsHigh.svg", "faroeIslandsHigh.svg", "finlandHigh.svg", "france2016High.svg", "franceDepartmentsHigh.svg", "franceHigh.svg", "frenchGuianaHigh.svg", "frenchPolynesiaHigh.svg", "gabonHigh.svg", "gambiaHigh.svg", "georgiaHigh.svg", "georgiaSouthOssetiaHigh.svg", "germanyHigh.svg", "ghanaHigh.svg", "gibraltarHigh.svg", "greeceHigh.svg", "greenlandHigh.svg", "guadeloupeHigh.svg", "guamHigh.svg", "guatemalaHigh.svg", "guineaBissauHigh.svg", "guineaHigh.svg", "guyanaHigh.svg", "haitiHigh.svg", "hondurasHigh.svg", "hongKongHigh.svg", "hungaryHigh.svg", "icelandHigh.svg", "indiaHigh.svg", "indonesiaHigh.svg", "iranHigh.svg", "iraqHigh.svg", "irelandHigh.svg", "isleOfManHigh.svg", "israelHigh.svg", "israelPalestineHigh.svg", "italyHigh.svg", "ivoryCoastHigh.svg", "jamaicaHigh.svg", "japanHigh.svg", "jerseyHigh.svg", "jordanHigh.svg", "kazakhstanHigh.svg", "kenyaHigh.svg", "kiribatiHigh.svg", "kosovoHigh.svg", "kuwaitHigh.svg", "kyrgyzstanHigh.svg", "laosHigh.svg", "latviaHigh.svg", "lebanonHigh.svg", "lesothoHigh.svg", "liberiaHigh.svg", "libyaHigh.svg", "liechtensteinHigh.svg", "lithuaniaHigh.svg", "luxembourgHigh.svg", "macedoniaHigh.svg", "madagascarHigh.svg", "malawiHigh.svg", "malaysiaHigh.svg", "maldivesHigh.svg", "maliHigh.svg", "maltaHigh.svg", "marshallIslandsHigh.svg", "martiniqueHigh.svg", "mauritaniaHigh.svg", "mauritiusHigh.svg", "mayotteHigh.svg", "mexicoHigh.svg", "micronesiaHigh.svg", "moldovaHigh.svg", "monacoHigh.svg", "mongoliaHigh.svg", "montenegroHigh.svg", "montserratHigh.svg", "moroccoHigh.svg", "moroccoWesternSaharaHigh.svg", "mozambiqueHigh.svg", "myanmarHigh.svg", "names.txt", "namibiaHigh.svg", "nepalHigh.svg", "netherlandsHigh.svg", "newCaledoniaHigh.svg", "newZealandHigh.svg", "nicaraguaHigh.svg", "nigerHigh.svg", "nigeriaHigh.svg", "northKoreaHigh.svg", "norwayHigh.svg", "omanHigh.svg", "pakistanHigh.svg", "palestineHigh.svg", "panamaHigh.svg", "paraguayHigh.svg", "peruHigh.svg", "philippinesHigh.svg", "polandHigh.svg", "portugalHigh.svg", "portugalRegionsHigh.svg", "puertoRicoHigh.svg", "qatarHigh.svg", "romaniaHigh.svg", "russiaHigh.svg", "rwandaHigh.svg", "sanMarinoHigh.svg", "saudiArabiaHigh.svg", "senegalHigh.svg", "serbiaHigh.svg", "serbiaNoKosovoHigh.svg", "singaporeHigh.svg", "slovakiaHigh.svg", "sloveniaHigh.svg", "somaliaHigh.svg", "southAfricaHigh.svg", "southKoreaHigh.svg", "southSudanHigh.svg", "spain2High.svg", "spainHigh.svg", "spainProvincesHigh.svg", "sriLankaHigh.svg", "stHelenaHigh.svg", "stKittsNevisHigh.svg", "stLuciaHigh.svg", "sudanHigh.svg", "surinameHigh.svg", "swazilandHigh.svg", "swedenHigh.svg", "switzerlandHigh.svg", "syriaHigh.svg", "taiwanHigh.svg", "tajikistanHigh.svg", "thailandHigh.svg", "tunisiaHigh.svg", "turkeyHigh.svg", "ugandaHigh.svg", "ukraineHigh.svg", "unitedArabEmiratesHigh.svg", "unitedKingdomHigh.svg", "uruguayHigh.svg", "usa2High.svg", "usaHigh.svg", "usaMercatorHigh.svg", "usaTerritories2High.svg", "usaTerritoriesHigh.svg", "uzbekistanHigh.svg", "vaticanCityHigh.svg", "venezuelaHigh.svg", "vietnamHigh.svg", "worldHigh.svg", "worldIndiaHigh.svg", "worldRussiaSplitHigh.svg", "worldRussiaSplitWithAntarcticaHigh.svg", "worldWithAntarcticaHigh.svg", "yemenHigh.svg", "zambiaHigh.svg", "zimbabweHigh.svg"];
	var mapDisplayNames = [];
	for (var i = 0; i < fileNames.length; i++) {
	    mapDisplayNames.push(fileName2mapName(fileNames[i]));
	}
	var trueAnsCount = 0;
	var wrongAnsCount = 0;
	var playTime = 0.0;

	var isPlaying = false;
	var isJustShow = false;
	var paths, selectedPathInd;
	var isFound = false;
	var choiceButtons;
	var panZoomTiger;

    var app = WinJS.Application;
	var nav = WinJS.Navigation;
	// var activation = Windows.ApplicationModel.Activation;
	// var localSettings = Windows.Storage.ApplicationData.current.localSettings;
	var selectedFileName;
	var mySplitView = window.mySplitView = {
	    playClicked: WinJS.UI.eventHandler(function (ev) {
	        isPlaying = !isPlaying;
	        
	        if (isPlaying){
	            ev.currentTarget.winControl.label = "pause";
	            ev.currentTarget.winControl.icon = "pause";
	            $('#choicesSpan').fadeIn();
	        }else{
	            ev.currentTarget.winControl.label = "play";
	            ev.currentTarget.winControl.icon = "play";
	            $('#choicesSpan').fadeOut();
	        }
	    }),
	    searchClicked: WinJS.UI.eventHandler(function (ev) {

	        var jDiv = $('#searchDiv')
	        if (jDiv.css('display') == 'block') {
	            jDiv.fadeOut();
	        } else {
	            jDiv.fadeIn();
	        }
	    }),
	    zoomInClicked: WinJS.UI.eventHandler(function (ev) {
	        panZoomTiger.zoomIn();
	    }),
	    zoomOutClicked: WinJS.UI.eventHandler(function (ev) {
	        panZoomTiger.zoomOut();
	    }),
	    settingsClicked: WinJS.UI.eventHandler(function (ev) {
	        $("#settingsDiv").slideToggle("slow");
	        $("#trueAnsTxt").html(trueAnsCount);
	        $("#falseAnsTxt").html(wrongAnsCount);
	        $("#playTimeTxt").html(second2date(playTime));
	    }),
	    rateClicked: WinJS.UI.eventHandler(function (ev) {
	    	var object = new WinJS.UI.ContentDialog("simple map game for my mum", null);
			object.showAsync();
	    }),
	    mailClicked: WinJS.UI.eventHandler(function (ev) {
	        var dialog = new Windows.UI.Popups.MessageDialog("yusufsaidcanbaz@gmail.com", "Alert");
			dialog.showAsync();
	    }),
	    mapItemClicked: WinJS.UI.eventHandler(function (ev) {
	        var l = document.getElementById("AllMapsListView").winControl;
	        var i = l.selection.getIndices()[0];
	        $("#settingsDiv").slideToggle("slow");
            loadSelectedFile(mapDisplayNames[i]);
	    }),
	    territoryItemClicked: WinJS.UI.eventHandler(function (ev) {
	        var l = document.getElementById("TerritoriesListView").winControl;
	        var i = l.selection.getIndices()[0];
	        $("#settingsDiv").slideToggle("slow");
	        isJustShow = true;
	        selectedPathInd = i;
	        $("#pointedPlace").html(paths[selectedPathInd].getAttribute("title"));
	        setTimeout(function(){ isJustShow = false; }, 3000);
	    }),
	    
	};
	
	app.onactivated = function (args) {
		args.setPromise(WinJS.UI.processAll().done(function () {
			choiceButtons = document.getElementById("choicesSpan").children;
			for (var i = 0; i < choiceButtons.length; i++) {
				choiceButtons[i].addEventListener("click", choiceSelected, false);
			}
			copylocalSettings2Vars();
			setInterval(timerFunction, 300);
			loadSelectedFile("Turkey");
		}));
	};

	app.oncheckpoint = function (args) {
	    // TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
	    // You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
	    // If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().

	    var a = 2;
	    copyVars2LocalSettings();
	};

	function closeDialog(ev) {
	    document.getElementById("dialog").winControl.hide();
	}

	function second2date(totalSec) {
	    totalSec = Math.floor(totalSec);
	    var hours = parseInt(totalSec / 3600) % 24;
	    var minutes = parseInt(totalSec / 60) % 60;
	    var seconds = totalSec % 60;

	    return (hours < 10 ? "0" + hours : hours) + " : " + (minutes < 10 ? "0" + minutes : minutes) + " : " + (seconds < 10 ? "0" + seconds : seconds);
	}

	function copylocalSettings2Vars() {
	    // var w = localSettings.values["trueCount"];
	    // var f = localSettings.values["falseCount"];
	    // var p = localSettings.values["playTime"];

	    // if (!w) {
	    //     localSettings.values["trueCount"] = "0";
	    // } else {
	    //     trueAnsCount = parseInt(w);
	    // }

	    // if (!f) {
	    //     localSettings.values["falseCount"] = "0";
	    // } else {
	    //     wrongAnsCount = parseInt(f);
	    // }

	    // if (!p) {
	    //     localSettings.values["playTime"] = "0";
	    // } else {
	    //     playTime = parseFloat(p);
	    // }
	}

	function copyVars2LocalSettings() {
	    // localSettings.values["trueCount"] = trueAnsCount;
	    // localSettings.values["falseCount"] = wrongAnsCount;
	    // localSettings.values["playTime"] = playTime;
	}
	
	function suggestionsRequested(eventInfo) {
	    
	    var details = eventInfo.detail
	    var searchQuery = details.queryText;
	    if (searchQuery.length < 2) {
	        return;
	    }
	    var suggestCount = 0;
	    for (var i = 0; i < fileNames.length; i++) {
	        var currFileName = fileNames[i];
	        if (currFileName.toLowerCase().includes(searchQuery.toLowerCase())) {
	            details.searchSuggestionCollection.appendQuerySuggestion(mapDisplayNames[i]);
	            suggestCount++;
	        }
	    }
	    if (suggestCount == 0) {
	        details.searchSuggestionCollection.appendQuerySuggestion("Not Found");
	    }
    };

	function fileName2mapName(str) {
	    var nstr = str.charAt(0).toUpperCase();
	    
	    for (var i = 1; i < str.length - 8; i++) {
	        if (str[i] == str[i].toUpperCase()) {
	            nstr = nstr + " " + str[i].toLowerCase();
	        } else {
	            nstr = nstr + str[i];
	        }
	    }
	    return nstr;
	}
    
	function mapName2fileName(str) {
	    var nstr = str.charAt(0).toLowerCase();

	    var detectedSpace = false;
	    for (var i = 1; i < str.length; i++) {
	        if (str[i] == " ") {
	            detectedSpace = true;
	        } else {
	            if (detectedSpace) {
	                nstr = nstr + str[i].toUpperCase();
	            } else {
	                nstr = nstr + str[i];
	            }
	            detectedSpace = false;
	        }
	    }
	    return nstr + "High.svg";
	}

	function selectionChosen(eventInfo) {
	    var d = eventInfo.detail;
	    var v = eventInfo.srcElement.winControl;
	    //var i = v._currentFocusedIndex;
	    if (eventInfo.srcElement.winControl._currentSelectedIndex > -1 && eventInfo.detail.queryText != "Not Found") {
            
	        loadSelectedFile(eventInfo.detail.queryText);
	        $('#searchDiv').fadeOut();
	        $("#pointedPlace").html('');
	    } else {
	        var contentDialog = document.querySelector(".win-contentdialog").winControl;
	        contentDialog.show();
	    }
	    
	};
    
	function loadSelectedFile(str) {
	    selectedPlaceAnim(str);
	    selectedFileName = "maps/" + mapName2fileName(str);
	    loadContent(str, function () {
	        activateSVG();
	        generateQuestionAndOptions();
	    });
	}

    function loadContent(str, callback){
        var txt = str;
        var host = document.getElementById("contentHost");
        if (host.winControl) {
            host.winControl.unload && host.winControl.unload();
            host.winControl.dispose && host.winControl.dispose();
        }
        WinJS.Utilities.disposeSubTree(host);
        WinJS.Utilities.empty(host);

        var p = WinJS.UI.Pages.render(selectedFileName, host).done(function () {
            var elem = document.getElementsByTagName("svg")[0];

            var options = {
                customEventsHandler: {
                    // Halt all touch events
                    haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'],

                    // Init custom events handler
                    init: function (options) {
                        // Init Hammer
                        this.hammer = Hammer(options.svgElement);

                        // Handle double tap
                        this.hammer.on('doubletap', function (ev) {
                            options.instance.zoomIn();
                        })
                    },

                    // Destroy custom events handler
                    destroy: function () {
                        this.hammer.destroy()
                    }
                }
            }
            panZoomTiger = svgPanZoom(elem, options);

            callback();
        });        
    }

	function activateSVG() {
	    paths = document.getElementsByTagName("path");
	    var newPaths = [];
	    var territories = [];
	    for (var i = 0; i < paths.length; i++) {
	        var t = paths[i].getAttribute("title");
	        if (t != null) {
	            newPaths.push(paths[i]);
	            territories.push(t);
	        } 
	    }
	    paths = newPaths;
	    
	    var datalist = new WinJS.Binding.List(territories);
	    document.getElementById('TerritoriesListView').winControl.itemDataSource = datalist.dataSource;
	    
        for (var i = 0; i < paths.length; i++) {
	        paths[i].addEventListener("mouseenter", pointerIn, false);
	        paths[i].addEventListener("mouseleave", pointerOut, false);
	    }
	}

	function selectedPlaceAnim(name) {
	    var jObj = $("#selectedPlace")
	    jObj.html(name);
	    jObj.show(500);
	    setTimeout(function () { jObj.hide(3000); }, 3000);
	}
    
	function choiceSelected(evt) {
	    var jqObj = $(evt.srcElement);
	    var str = jqObj.html();

	    var str2 = paths[selectedPathInd].getAttribute("title");
	    if (str == str2) {
	        isFound = true;
	        jqObj.effect("highlight", { times: 2 }, 600);
	        trueAnsCount++;
	    } else {
	        jqObj.effect("shake", { times: 2 }, 600);
	        wrongAnsCount++;
	    }
	}

	function normalizePathColors() {
	    for (var i = 0; i < paths.length; i++) {
	        paths[i].style.display = "block"
	    }
	}

	function pointerIn(obj) {
	    if (!isPlaying && !isJustShow) {
	        var elem = obj.srcElement;
	        $(elem).fadeOut(300);
	        $("#pointedPlace").html(elem.getAttribute("title"));
	    }
	}

	function pointerOut(obj) {
	    if (!isPlaying) {
            var elem = obj.srcElement;
	        $(elem).fadeIn(300);
	    }
	}

	function timerFunction() {
	    if (isPlaying) {
	        playTime += 0.3;
	        if (isFound) {
	            $(paths[selectedPathInd]).fadeIn();
	            setTimeout(function () { generateQuestionAndOptions() }, 1300);
	            isFound = false;
	        } else {
	            $(paths[selectedPathInd]).toggle(300);
	        }
	        $("#pointedPlace").hide(1000);
	    } else {
	        if (paths) {
	            $(paths[selectedPathInd]).fadeIn();
	        }
	        $("#pointedPlace").show();
	    }
	    if (isJustShow) {
	        $(paths[selectedPathInd]).toggle(300);
	    }
	}

	function generateQuestionAndOptions() {
	    selectedPathInd = rndIndex(paths.length);
	    var randIndices = choiceGenerator(selectedPathInd, paths.length, choiceButtons.length);
	    randIndices = shuffle(randIndices);
	    for (var i = 0; i < randIndices.length; i++) {
	        $(choiceButtons[i]).html(paths[randIndices[i]].getAttribute("title"));
	    }
	}

	function rndIndex(size) {
	    return Math.floor(Math.random() * size);
	}

	function choiceGenerator(rightInd, size, choiceCount) {
	    var arr = [rightInd];
	    var rnd = rndIndex(size);

	    if (size < choiceCount) {
	        choiceCount = size;
	    }
	    for (var i = 1; i < choiceCount; i++) {
	        while (containsVal(arr, rnd)) {
	            rnd = rndIndex(size);
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
	        randomIndex = rndIndex(currentIndex);
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
	        var randomnumber = rndIndex(max - min) + min;
	        var found = false;
	        for (var i = 0; i < arr.length; i++) {
	            if (arr[i] == randomnumber) { found = true; break }
	        }
	        if (!found) arr[arr.length] = randomnumber;
	    }
	    return arr;
	}

	WinJS.Namespace.define("SearchUtils", {
	    suggestionsRequested: WinJS.UI.eventHandler(suggestionsRequested),
	    selectionChosen: WinJS.UI.eventHandler(selectionChosen),
	    allFileNames: new WinJS.Binding.List(mapDisplayNames),
	    closeDialog: WinJS.UI.eventHandler(closeDialog)
	});

	app.start();
})();
