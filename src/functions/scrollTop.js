
const scrollTop = () => {
    var footerBtn = document.querySelectorAll("#external-link-btn");
    for(var i=0;i<footerBtn.length;i++){
        footerBtn[i].addEventListener("click",()=>{
            window.scrollTo(0,0);
        })
    }
};

export default scrollTop;
