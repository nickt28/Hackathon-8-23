const titleInput = document.getElementById("iTitle");
const progressInput = document.getElementById("iProgress");
const addButton = document.getElementById("addBucket");
const allBuckets = document.getElementById("allBuckets");
let circles = 10

addButton.addEventListener("click", () => {
    // Get values
    const title = titleInput.value;
    const progress = progressInput.value;

    if (title != "" && progress != "") {
        let number = parseInt(progress)
        if (Number.isInteger(number)) {
            if (number > 100) { number = 100 }
        } else {
            number = 100
        }

        // Creat container
        allBuckets.insertAdjacentHTML('beforeend', `
                <div class="col-md-3 col-sm-6">
                    <div class="box">
                    <div class="circle" id="circles-${circles}"></div>
                    <h6>${title}</h6>
                    </div>
                </div>`)

        // Inictliase circle
        if (title != "") {
            var myCircle = Circles.create({
            id: "circles-" + circles,
            radius: 65,
            value: number,
            maxValue: 100,
            width: 5,
            text: function (value) {
                return value + "%";
            },
            colors: ["transparent", "#ffffff"],
            duration: 400,
            wrpClass: "circles-wrp",
            textClass: "progress_text",
            valueStrokeClass: "circles-valueStroke",
            maxValueStrokeClass: "circles-maxValueStroke",
            styleWrapper: true,
            styleText: true
            });

            // Increase circle counter
            circles++;

            // Close modal
            $('#exampleModalCenter').modal('hide')
        }
    }
})