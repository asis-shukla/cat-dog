// for showing the file name on the file browse input field after selecting the file

$(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });

// for preview the selected file on the page before submit
function preview() {
    console.log(event.target.files[0]);
    frame.src=URL.createObjectURL(event.target.files[0]);
}
