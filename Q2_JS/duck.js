class Duck {
    constructor(name, color, age, weight, pic) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.pic = pic;
    }

    get Name() { return this.name; }
    set Name(value) { this.name = value; }

    get Color() { return this.color; }
    set Color(value) { this.color = value; }

    get Age() { return this.age; }
    set Age(value) { this.age = value; }

    get Weight() { return this.weight; }
    set Weight(value) { this.weight = value; }

    get Pic() { return this.pic; }
    set Pic(value) { this.pic = value; }

    Show() {
        return `
        Name: ${this.name}<br>
        Color: ${this.color}<br>
        Age: ${this.age}<br>
        Weight: ${this.weight}<br>
        <img src="${this.pic}" alt="Duck Image" width="100">`;
    }

    Quack() {
        const quackCount = Math.floor((this.age * this.weight) / 2);
        const soundCount = 3;
        const quackSound = new Audio("quack.wav");
    
        // פונקציה לנגן את הצליל מספר פעמים
        for (let i = 0; i < soundCount; i++) {
            setTimeout(() => {
                quackSound.play();
            }, i * 500); // השהייה של 500ms בין כל "quack"
        }
    
        return "Quack ".repeat(quackCount).trim();
    }
    
}

document.getElementById("btn_show").style.display = "none";
document.getElementById("btn_quack").style.display = "none";

document.getElementById("btn_duck").onclick = function () {
    const name = document.getElementById("inp_name").value.trim();
    const color = document.getElementById("inp_color").value.trim();
    const ageInput = document.getElementById("inp_age").value.trim();
    const weightInput = document.getElementById("inp_weight").value.trim();
    const pic = document.getElementById("inp_pic").value.trim();

    // בדיקה שהערכים של הגיל והמשקל הם מספרים חיוביים
    const age = parseInt(ageInput, 10);
    const weight = parseFloat(weightInput);

    if (!name || !color || isNaN(age) || age < 0 || isNaN(weight) || weight < 0 || !pic) {
        alert("Please fill out all fields correctly with valid positive values for age and weight!");
        return;
    }

    // יצירת הברווז
    window.duck = new Duck(name, color, age, weight, pic);
    alert("Duck created successfully!");

    document.getElementById("btn_duck").style.display = "none";
    document.getElementById("btn_show").style.display = "inline";
    document.getElementById("btn_quack").style.display = "inline";
};


document.getElementById("btn_show").onclick = function () {
    let output = document.getElementById("output");
    if (output.innerHTML === window.duck.Show()) {
        output.innerHTML = "";
    }
    else {
        output.innerHTML = window.duck.Show();
    }
};

document.getElementById("btn_quack").onclick = function () {
    document.getElementById("output").textContent = window.duck.Quack();
};
