<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Centimeter to Kilometer Converter</title>
    <style>
        body {
            font-family: "Times New Roman", serif;
            text-align: center;
            margin: 50px;
            font-size: 35px;
        }
        input, button {
            margin: 10px;
            padding: 10px;
            font-size: 35px;
        }
    </style>
</head>
<body>
    <h2>Centimeter to Kilometer Converter</h2>
    <input type="number" id="centimeter" placeholder="Enter length in cm">
    <button onclick="convertLength()">Convert</button>
    <p id="result"></p>

    <script>
        function centimeterToKilometer(centimeter) {
            return centimeter / 100000;
        }

        function convertLength() {
            let centimeter = document.getElementById("centimeter").value;
            let kilometer = centimeterToKilometer(centimeter);
            document.getElementById("result").innerText = `${centimeter} cm = ${kilometer.toFixed(5)} km`;
        }
    </script>
</body>
</html>