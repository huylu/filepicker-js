//browser.js
'use strict';

filepicker.extend('browser', function(){
    var fp = this;

    var isIOS = function() {
        return !!(navigator.userAgent.match(/iPhone/i) ||
                navigator.userAgent.match(/iPod/i) ||
                navigator.userAgent.match(/iPad/i));
    };

    var isAndroid = function() {
        return !!navigator.userAgent.match(/Android/i);
    };

    var getLanguage = function() {
        var language = window.navigator.userLanguage || window.navigator.language;
        if (language === undefined) {
            language = 'en';
        }
        language = language.replace('-', '_').toLowerCase();
        return language;
    };

    var isMobile = isIOS() || isAndroid();
    
    return {
        isIOS: isIOS,
        isAndroid: isAndroid,
        getLanguage: getLanguage,
        isMobile: isMobile
    };
});
