
            function cong(){
                var so1 = parseFloat(document.getElementById("txtnumb1").value);
                var so2 = parseFloat(document.getElementById("txtnumb2").value);
                var tong = so1 + so2;
                alert("tong la: " + tong);
            }
            function tru(){
                var so1 = parseFloat(document.getElementById("txtnumb1").value);
                var so2 = parseFloat(document.getElementById("txtnumb2").value);
                var tong = so1 - so2;
                alert("hieu la: " + tong);
            }
            function nhan(){
                var so1 = parseFloat(document.getElementById("txtnumb1").value);
                var so2 = parseFloat(document.getElementById("txtnumb2").value);
                var tong = so1 * so2;
                alert("tich la: " + tong);
            }
            function chia(){
                var so1 = parseFloat(document.getElementById("txtnumb1").value);
                var so2 = parseFloat(document.getElementById("txtnumb2").value);
                var tong = so1 / so2;
                alert("thuong la: " + tong);
            }
      