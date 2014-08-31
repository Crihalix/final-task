
	
function calculate(){
    var DVT_percent = 0.925;

    this.yourNumber = ko.observable(100);
    this.showResult = ko.observable(function(){
    })


    // this.firstValue = ko.observable(3);
    // this.secondValue = ko.observable(5);

    this.resultAandB_DVT = ko.computed(function() {

        var result_DVT_precent = parseFloat(this.yourNumber()*DVT_percent);

        if (!this.yourNumber()) {
            return "[B + C]";
        } else {
            return (182 * (0.122 * result_DVT_precent) + (2 * 8 * (result_DVT_precent - (0.122 * result_DVT_precent))))};
        }, this);

    this.resultE = ko.computed(function() {

        var result_DVT_precent = parseFloat(this.yourNumber()*DVT_percent);

        if (!this.yourNumber()) {
            return "[E]";
        } else {
            return ((result_DVT_precent - (result_DVT_precent * 0.122)) * 14)}
        }, this);

    this.resultG = ko.computed(function() {

        var result_DVT_precent = parseFloat(this.yourNumber()*DVT_percent);

        if (!this.yourNumber()) {
            return "[G]";
        } else {
            return (0.064 * (2 * 8 * (result_DVT_precent - (0.122 * result_DVT_precent))))}
        }, this);

    this.resultH = ko.computed(function() {

        var result_DVT_precent = parseFloat(this.yourNumber()*DVT_percent);

        if (!this.yourNumber()) {
            return "[H]";
        } else {
            return (3*(result_DVT_precent * 0.52))}
        }, this);




};

ko.applyBindings(new calculate());

// function calculate(){
// 	booksList = ko.observableArray([
// 			new Book('1. О компании QAP INT.'),
// 			new Book('2. Преймущества использования CLM- инструмента для Вашего бизнеса'),
// 			new Book('3. Преспективы сотрудничества с QAP INT.'),
// 			new Book('4. Описание решения для разработки HTML5- презентаций'),
// 			new Book('5. Описание разработтанного инструмента CLM2CRM и его интеграция с salesforse.com (русский).'),
// 			new Book('6. Описание разработтанного инструмента CLM2CRM и его интеграция с salesforse.com (english).')
// 		]);

// 	userEmail = ko.observable();
// 	userTheme = ko.observable();
// 	userText = ko.observable();
//     booksList2 = ko.computed(function() {
//         var arrayBooksList = [];
//         booksList().forEach(function(checked){
//             if(checked.buyBook()){
//                 arrayBooksList.push(checked);
//             }
//         });
//         return arrayBooksList;
//     });

//     this.isVisiblePopup = ko.observable(true);
//     this.showPopup = function(){
//         this.isVisiblePopup(false)
//     };
//     this.hidePopup = function(){
//         this.isVisiblePopup(true)
//     };
// };

// ko.applyBindings(new calculate());
