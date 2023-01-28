<!-- <script>
        fetch('movieDetails.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("myData");
            
                var div = document.createElement("div");
                div.innerHTML = data[0].title + data[0].text;
                mainContainer.appendChild(div);
            
			var mainContainer = document.getElementById("myData02");
            
                var div = document.createElement("div");
                div.innerHTML = data[1].title + data[1].text;
				
                mainContainer.appendChild(div);
            
        }
    </script> -->

	<!-- This JSON fetching has been used to fetch API (movieDetails.JSON) and I tested to populate each grid card with certain data. -->