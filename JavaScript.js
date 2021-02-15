

$(document).ready(function () {
    //navigation menu
    $(".tabSection:first").show();
    $(".navigationBar li:first").addClass("active");

    $(".navigationBar li").click(function (event) {
        index = $(this).index();
        $(".navigationBar li").removeClass("active");
        $(this).addClass("active");
        $(".tabSection").hide();
        $(".tabSection").eq(index).show();
    });

    //create contact
    $("button#createContact").click(function (event) {
        let $firstName = $("input[name=firstName]").val();
        let $lastName = $("input[name=lastName]").val();
        let $phoneNumber = $("input[name=phoneNumber]").val();
        let $address = $("input[name=address]").val();
        $(".allContacts").append(`<li class="contact">${$firstName} ${$lastName} - ${$phoneNumber}, ${$address}<button class="delete"><i class="fa fa-trash"></i></button></li>`);
        $("form")[0].reset();
        event.preventDefault();
    });


    //search contacts
    $("#searchContact").on("keyup", function () {
        let $search = $(this).val();
        $("ul li.contact").each(function (index, value) {
            let $currentContact = $(value).text();
            $currentContact = $(value).text();
            if ($currentContact.toUpperCase().indexOf($search.toUpperCase()) > -1) {
                $(value).show();
            } else {
                $(value).hide();
            };
        });
    });
    //delete contact
    $("#contacts").on('click', '.delete', function () {
        $(this).parent().remove();
    });
});
