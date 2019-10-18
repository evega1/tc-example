export function getDayAndMonth() {
    return `${(new Date().getMonth() + 1)}/${new Date().getDate()}`;
}

export function getRandomText() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    return `task${new Date().getTime().toString()}${randomNumber}`;
}