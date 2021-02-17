const date = new Date();

export const getWeekNumber = (): string[] => {
    let listOfDays: string[] = [];
    const weekDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        //для проверки отступов добавьте дни
    ).getDay();
    //Проверка на Воскресенье
    const days = weekDay === 0 ? 7 : weekDay;
    for (let i = days; i > 1; i--) {
        listOfDays.push('empty_' + i);
    }
    return listOfDays;
};

export const getListOfDays = (): number[] => {
    let monthDays: number[] = [];
    const daysInMonth = 33 - new Date(
        date.getFullYear(),
        date.getMonth(),
        33
    ).getDate();
    for (let i: number = 1; i <= daysInMonth; i++) {
        monthDays.push(i);
    }
    return monthDays;
}

export const getMonthYear = (): string => {
    const months: string[] = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    return month + ' ' + year;
}

export const getTodaysDate = () => {
    return new Date().getDate();
}



