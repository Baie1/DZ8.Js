document.querySelector("#generate ").addEventListener("click", () =>  {
    generate();
});
generate = () => {
    var quotes = {
        "-Михаил Лермонтов":
            '"...И целый мир возненавидел,Чтобы полюбить тебя сильнее."',

        "-Сергей Есенин":
        '"Времени нет.Серьезно? Это желания нет, а время есть всегда"'

    };
    var authors =Object.keys(quotes);
    var author =authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes [author];

    document.querySelector('#quote').textContent =quote;
    document.querySelector('#author').textContent =author;

}

