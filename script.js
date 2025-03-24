document.addEventListener("DOMContentLoaded", function () {
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");
    const colors = [
        "#B983B9",
        "#C7FDDF",
        "#B2A6FF",
        "#371BCD",
        "#471029",
        "#D3FE36",
        "#693EFE",
    ];
    changeColorBtn.addEventListener("click", function () {
        let randomIndex = Math.floor(Math.random() * colors.length);
        colorBox.style.backgroundColor = colors[randomIndex];
    });
});
