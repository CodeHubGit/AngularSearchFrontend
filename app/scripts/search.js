(function() {
    var app = angular.module("search-directives", []);

    app.directive("searchArea", function(){
        return{
            restrict:"E",
            templateUrl:"templates/search-area.html",
            controller:(function(){
                this.search = {};

                this.search.leftEye = {};
                this.search.rightEye = {};

                this.matchingGlasses = [];

                this.searchPrescription = function(search){
                    this.matchingGlasses.push("yoyoswag");
                };

            }),
            controllerAs:"searchCtrl"
        };
    });
})();
