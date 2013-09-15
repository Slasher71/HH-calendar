(function () {

    var displayMonth;

    function calendar(year, month) {

        $(".calendar").children().remove();

        var weekDaysNames = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
        var monthsNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        var dayCount = (new Date(now.getFullYear(), month + 1, 0)).getDate();

        var date = new Date(year, month),
            dayNum = 1 - (date.getDay() == 0 ? 7 : date.getDay()) + 1,
            dayCurrent = (dayNum * -1) + now.getUTCDate(),
            cell,
            calendarDayCount = ((dayNum * -1) - 1 + dayCount) < 34 ? 34 : 41;


        displayMonth = date.getMonth();
        var displayYear = date.getFullYear();

        $(".current-date").text(monthsNames[displayMonth] + " " + displayYear);

        for (var i = 0; i <= calendarDayCount; i++) {
            cell = (new Date(year, month, dayNum)).getDate();

            if (i < 7) {
                cell = weekDaysNames[i] + ", " + cell;
            }

            $(".calendar").append("<div class='cell'><span class='day'>" + cell + "</span></div>");

            dayNum++;
        }
        if (month == now.getMonth()) {
            $(".cell").eq(dayCurrent).addClass("current-day");
            $("#show-today").css("display", "none");
            $(".cell").eq(14).addClass("todo").append("<p></p>").append("<h1 class='todo-heading'>Напитсья!</h1>").append("<span class='todo-members'>Витя Костин, Петр Михайлов</span>");
            $(".cell").eq(27).addClass("todo").append("<p></p>").append("<h1 class='todo-heading'>ДР!</h1>").append("<span class='todo-members'>Дима Молодцов</span>");
        } else {
            $("#show-today").css("display", "inline");
        }

    }


    var monthsNames2 = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    var now = new Date(),
        year = now.getFullYear(),
        month = now.getMonth();

    calendar(year, month); // Загрузить календать при запуске с текущим месяцем

    $("#prev-month").on("click", function () { // Пред. месяц
        --month;
        calendar(year, month);
    });
    $("#next-month").on("click", function () { // След. месяц
        ++month;
        calendar(year, month);
    });
    $("#show-today").on("click", function () { // Кнопка "Сегодня"
        year = now.getFullYear();
        month = now.getMonth();
        calendar(year, month);
    });

    // Всплывающий попап
    $(document).on("click", ".cell", function (e) {

        var addBox = $("#add-box").clone().css("display", "block").removeAttr("id"),
            $this = $(this);

        $(".cell").removeClass("selected-day").children(".add-box").remove();
        $this.addClass("selected-day").append(addBox.fadeIn(500)).find(".add-box-date").text($this.children(".day").text() + " " + monthsNames2[displayMonth]);

    });
    $(document).on("click", ".cell div", function (e) {
        e.stopPropagation();
    });

    // Закрыть попап
    $(document).on("click", ".add-box-close", function (e) {
        $(this).parents(".cell").removeClass("selected-day").children(".add-box").remove();
    });


}).call(this);
