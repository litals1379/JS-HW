class Point {
    constructor(x, y) {
        this._x = x; 
        this._y = y;
    }

    get X() {return this._x;}

    set X(value) {this._x = value;}

    get Y() {return this._y;}
 
    set Y(value) {this._y = value;}
  
    Show() {
        return `(${this._x}, ${this._y})`;
    }

    Equals(p) {
        return this.X === p.X && this.Y === p.Y;
    }
    
}

const points = [];

// הוספת נקודה למערך והצגה ברשימה
function addPoint() {
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);

    if (!isNaN(x) && !isNaN(y)) {
        const point = new Point(x, y);
        points.push(point);

        // עדכון רשימת הנקודות
        const pointsList = document.getElementById("pointsList");
        const listItem = document.createElement("li");
        listItem.textContent = point.Show();
        pointsList.appendChild(listItem);

        alert("Point added successfully!");
    } else {
        alert("Please enter valid coordinates.");
    }
}

// בדיקת קיום נקודה במערך
function checkPoint() {
    const x = parseFloat(document.getElementById("checkX").value);
    const y = parseFloat(document.getElementById("checkY").value);

    if (!isNaN(x) && !isNaN(y)) {
        const exists = pointExists(points, x, y);
        const result = document.getElementById("checkResult");
        result.textContent = exists ? "Point exists in the array." : "Point does not exist in the array.";
    } else {
        alert("Please enter valid coordinates.");
    }
}

function pointExists(points, x, y) {
    for (let i = 0; i < points.length; i++) {
        if (points[i].X === x && points[i].Y === y) {
            return true;
        }
    }
    return false;
}
//צריך לתקן
function pointExists2(points, x, y) {
    const targetPoint = new Point(x, y);
    for (let i = 0; i < points.length; i++) {
        if (points[i].Equals(targetPoint)) {
            return true;
        }
    }
    return false;
}

document.getElementById("btn_path_length").onclick = function(){
    updatePathLength();
}

// Update the total path length
function updatePathLength() {
    let totalDistance = 0;
    for (let i = 0; i < points.length - 1; i++) {
        const x1 = points[i].X;
        const y1 = points[i].Y;
        const x2 = points[i + 1].X;
        const y2 = points[i + 1].Y;
        totalDistance += calculateDistance(x1, y1, x2, y2);
    }

    // עדכון התוצאה בדף
    document.getElementById("pathLength").textContent = totalDistance.toFixed(2);
}


// Function to calculate the distance between two points
function calculateDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

