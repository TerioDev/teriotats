jQuery(document).ready(function ($) {

    //! Defines a function for switching a language
    function switchLang(lang) {
        //! Adds lang variable to a string, which renders only specific html spans
        $("[data-" + lang + "]").text(function (i, e) {
            return $(this).data(lang);
        });
    }

    function elementsPl() {
        //! Book button
        $(".book-btn-inner-img").hide();
        $(".book-btn-inner-img-pl").show();

        //! Eyes
        $("#eyes").hide();

        //! Book banner
        $(".info-header-en").hide();
        $(".info-header-pl").show();
    }

    function elementsEn() {
        //! Book button
        $(".book-btn-inner-img").show();
        $(".book-btn-inner-img-pl").hide();
        
        //! Eyes
        $("#eyes").show();

        //! Book banner
        $(".info-header-en").show();
        $(".info-header-pl").hide();
    }

    //! ONLY DO THIS IF THERE IS NO DATA IN LOCAL STORAGE
    if (localStorage.getItem('lang') === null) {

        var fullBrowserLang = window.navigator.userLanguage || window.navigator.language //! Get browser lang

        var firstTwoBrowserLang = fullBrowserLang.substring(0, 2) //! Derive first two letters

        //! if language == en - switch to it
        if (firstTwoBrowserLang == "en") {
            var lang = firstTwoBrowserLang
            console.log(`Language detected *${lang}* . Supported, switching language to *${lang}*.`)
            $(".switchlang").text($(".switchlang").data("en")); //! Switch lang to en
            $(".switchlang").html("en"); //! Switch button label to pl
            elementsEn()
            switchLang(lang); //! Calling a function to switch language and passing lang variable to it

        //! if language == pl - switch to it
        } else if (firstTwoBrowserLang == "pl") {
            var lang = firstTwoBrowserLang
            console.log(`Language detected *${lang}* . Supported, switching language to *${lang}*.`)
            $(".switchlang").text($(".switchlang").data("pl")); //! Switch lang to pl
            $(".switchlang").html("pl"); //! Switch button label to en
            elementsPl()
            switchLang(lang); //! Calling a function to switch language and passing lang variable to it

        //! if language is something else, show it as unsupported - switch to en as a default
        } else {
            var lang = "en"
            console.log(`Language detected *${lang}* . Unsupported! Switching language to *${lang}* as default.`)
            $(".switchlang").text($(".switchlang").data("en")); //! Switch lang to en
            $(".switchlang").html("en"); //! Switch button label to pl
            elementsEn()
            switchLang(lang); //! Calling a function to switch language and passing lang variable to it
        }

    //! IF THERE IS DATA IN LOCAL STORAGE
    } else {

        var lang = localStorage.getItem('lang') //! get lang variable from local storage

        //! if language is en switch to it and change button label to pl
        if (lang == "en") {
            $(".switchlang").text($(".switchlang").data("en"));
            $(".switchlang").html("en");
            elementsEn()
        //! if language is pl switch to it and change button label to en
        } else if (lang == "pl") {
            $(".switchlang").text($(".switchlang").data("pl"));
            $(".switchlang").html("pl");
            elementsPl()

        //! if browser's language is unsupported swtich to eng and change button label to pl
        } else {
            $(".switchlang").text($(".switchlang").data("en"));
            $(".switchlang").html("en");
            elementsEn()
        }

        //! call swtiching function
        switchLang(lang);
        console.log(lang)

    }

    //! Change based on button label after loading the website
    $(".switchlang").click(function () {

        $(this).text($(this).data("lang"));

        //! Switch to another language based on language on the button
        var lang = $(this).data("lang") == "pl" ? "en" : "pl";
        $(this).data("lang", lang);
        switchLang(lang)

        //! Remove old lang variable from local storage, add a new one
        localStorage.removeItem(lang);
        localStorage.setItem('lang', lang);

        //! Switchlabel
        if ($(this).data("lang") == "pl") {
            $(".switchlang").html("pl");
            elementsPl()
        } else {
            $(".switchlang").html("en");
            elementsEn()
        }

    });

});
