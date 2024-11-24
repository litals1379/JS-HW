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



// חישוב מרחק בין שתי נקודות מתוך ערכים ישירים של X ו-Y
function calculateDistanceFromValues() {
    const x1 = parseFloat(document.getElementById("x1").value);
    const y1 = parseFloat(document.getElementById("y1").value);
    const x2 = parseFloat(document.getElementById("x2").value);
    const y2 = parseFloat(document.getElementById("y2").value);

    if (!isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2)) {
        const distance = calculateDistance(x1, y1, x2, y2);

        const result = document.getElementById("distanceResult");
        result.textContent = `Distance: ${distance.toFixed(2)}`;
    } else {
        alert("Please enter valid coordinates for both points.");
    }
}

// חישוב המרחק בין שתי נקודות
function calculateDistance(x1, y1, x2, y2) {
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
}


