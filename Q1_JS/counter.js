class Counter{

    constructor(count = 0)
    {
        this.count = count;
    }

    get Count() {return this.count;}

    set Count(value){return this.count = value;}
    
    Initialize(params) {
        return this.count = params;
    }

    Increment() {
        this.count++;
    }

    Go() {
        let output = "";
        for(let i = 0; i <= this.count; i++)
        {
            output += i + " ";
        }
        return output.trim();
    }


}
const c = new Counter();

        // Cache DOM elements
        const inp = document.getElementById("inp");
        const output = document.getElementById("output");

        // Start button click handler
        document.getElementById("btn_start").onclick = function () {
            const value = parseInt(inp.value, 10);
            if (isNaN(value)) {
                output.textContent = "Please enter a valid number.";
                return;
            }
            c.Initialize(value);
            output.textContent = `Counter initialized to ${c.Count}`;
        };

        // Increment button click handler
        document.getElementById("btn_plus").onclick = function () {
            c.Increment();
            output.textContent = `Counter incremented to ${c.Count}`;
        };

        // Go button click handler
        document.getElementById("btn_Go").onclick = function () {
            output.textContent = `Counting: ${c.Go()}`;
        };
        //kkk