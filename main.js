function onClickGoogleLink(link)
{
    window.open(link, "_blank");
}

function onClickProject(link){
    const popup = document.getElementById("popup");
    const paragraphs = popup.querySelector('iframe');
    popup.style.display = "flex";
    paragraphs.src = link;
}

function onClickClose(){
    parent.closePopup();
}

function closePopup(){
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}