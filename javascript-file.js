var $paragraphs = $('p');
        $paragraphs.each(function(index, element) {
        var elementJQuery = $(this);
        var eachP = elementJQuery.text();
        var transformedData = toPigLatin(eachP);
        elementJQuery.text(transformedData)
        });

        
        $("#quiz-form").on("submit", function(event) {
            event.preventDefault();
            var $answer = $("#quiz-answer"); 
            var answer = $answer.val();
            console.log(answer);
            if (answer === "crocodile") {
                $("#result").text("Woweeee! You got it! WOOO PARTY!");
            } else {
                $("#result").text("Try again!");
            }w