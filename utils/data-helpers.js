module.exports = {
    getDayAndMonth: function() {
        return `${(new Date().getMonth() + 1)}/${new Date().getDate()}`;
    },
    getRandomText: function() {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        return `task${new Date().getTime().toString()}${randomNumber}`;
    }
}