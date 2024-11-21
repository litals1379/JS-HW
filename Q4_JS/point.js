class Point {
    constructor(x, y) {
        this._x = x; 
        this._y = y;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    Show() {
        return `(${this._x}, ${this._y})`;
    }

    Equals(p) {
        return this._x === p.x && this._y === p.y;
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
    const targetPoint = new Point(x, y);
    for (let i = 0; i < points.length; i++) {
        if (points[i].Equals(targetPoint)) {
            return true;
        }
    }
    return false;
}

// חישוב מרחק בין שתי נקודות
function calculateDistanceHTML() {
    const point1Index = parseInt(document.getElementById("point1Index").value);
    const point2Index = parseInt(document.getElementById("point2Index").value);

    if (
        !isNaN(point1Index) &&
        !isNaN(point2Index) &&
        point1Index >= 0 &&
        point1Index < points.length &&
        point2Index >= 0 &&
        point2Index < points.length
    ) {
        const point1 = points[point1Index];
        const point2 = points[point2Index];
        const distance = calculateDistance(point1, point2);

        const result = document.getElementById("distanceResult");
        result.textContent = `Distance: ${distance.toFixed(2)}`;
    } else {
        alert("Please enter valid indices for the points.");
    }
}

function calculateDistance(point1, point2) {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
}

