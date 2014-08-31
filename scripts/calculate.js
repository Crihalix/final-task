
	
function calculate(){
    var DVT_percent = 0.925;
    var EP_percent = 0.85;

    this.yourDVTNumber = ko.observable();
    this.yourEPNumber = ko.observable();
    this.showResult = ko.observable(function(){
    })

    /*DVT*/
    this.resultBandC_DVT = ko.computed(function() {

        var result_DVT_precent = parseFloat(this.yourDVTNumber()*DVT_percent);

        if (!this.yourDVTNumber()) {
            return "[B + C]";
        } else {
            return (182 * (0.122 * result_DVT_precent) + (2 * 8 * (result_DVT_precent - (0.122 * result_DVT_precent)))).toFixed(2);
            }
        }, this);

    this.resultE_DVT = ko.computed(function() {

        var result_DVT_precent = parseFloat(this.yourDVTNumber()*DVT_percent);

        if (!this.yourDVTNumber()) {
            return "[E]";
        } else {
            return ((result_DVT_precent - (result_DVT_precent * 0.122)) * 14).toFixed(2);
            }
        }, this);

    this.resultG_DVT = ko.computed(function() {

        var result_DVT_precent = parseFloat(this.yourDVTNumber()*DVT_percent);

        if (!this.yourDVTNumber()) {
            return "[G]";
        } else {
            return (0.064 * (2 * 8 * (result_DVT_precent - (0.122 * result_DVT_precent)))).toFixed(2);
            }
        }, this);

    this.resultH_DVT = ko.computed(function() {

        var result_DVT_precent = parseFloat(this.yourDVTNumber()*DVT_percent);

        if (!this.yourDVTNumber()) {
            return "[H]";
        } else {
            return (3*(result_DVT_precent * 0.52)).toFixed(2);
            }
        }, this);

    /*EP*/

    this.resultBandC_EP = ko.computed(function() {

        var result_EP_precent = parseFloat(this.yourEPNumber() * EP_percent);

        if (!this.yourEPNumber()) {
            return "[B + C]";
        } else {

            return (182 * (result_EP_precent * 0.176) + (2 * 8 * (result_EP_precent - (0.176 * result_EP_precent)))).toFixed(2);
            }
        }, this);

    this.resultI_EP = ko.computed(function() {

        var result_EP_precent = parseFloat(this.yourEPNumber() * EP_percent);

        if (!this.yourEPNumber()) {
            return "[I]";
        } else {

            return ((result_EP_precent - (result_EP_precent * 0.176)) * 14).toFixed(2);
            }
        }, this);

    this.resultJ_EP = ko.computed(function() {

        var result_EP_precent = parseFloat(this.yourEPNumber() * EP_percent);

        if (!this.yourEPNumber()) {
            return "[J]";
        } else {

            return (1 * (result_EP_precent * 0.896)).toFixed(2);
            }
        }, this);


    /*DVT+PE*/
    this.DVTplusPE_BC = ko.computed(function(){

        if (!this.yourDVTNumber() || !this.yourEPNumber()) {
            return "[DVT+PE]";
        } else {
            return (parseFloat(this.resultBandC_DVT()) + parseFloat(this.resultBandC_EP())).toFixed(2);
        }
    },this);

    this.DVTplusPE_EaI = ko.computed(function(){

        if (!this.yourDVTNumber() || !this.yourEPNumber()) {
            return "[DVT+PE]";
        } else {
            return (parseFloat(this.resultE_DVT()) + parseFloat(this.resultI_EP())).toFixed(2);
        }
    },this);

    this.DVT_G = ko.computed(function(){

        if (!this.yourDVTNumber()) {
            return "[DVT]";
        } else {
            return  parseFloat(this.resultG_DVT());
        }
    },this);

    this.DVTplusPE_HaJ = ko.computed(function(){

        if (!this.yourDVTNumber() || !this.yourEPNumber()) {
            return "[DVT+PE]";
        } else {
            return (parseFloat(this.resultH_DVT()) + parseFloat(this.resultJ_EP())).toFixed(2);
        }
    },this);

};

ko.applyBindings(new calculate());
