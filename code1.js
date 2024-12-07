const user = {
    name: prompt("Введите ваше имя:"),
    email: prompt("Введите ваш email:"),
    age: prompt("Введите ваш возраст:"),
    hobby: prompt("Введите ваше хобби:")
};
Object.defineProperty(user, "age", {
    enumerable: false,
});
for (let k in user) {
    console.log(user[k])
}