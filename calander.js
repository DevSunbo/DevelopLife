const selectMonth = document.getElementById("month");
const btn = document.querySelector("#addBtn");
const today = new Date(); // 오늘 날짜
let month = 0;

selectMonth.addEventListener("change", (e) =>{
    month = e.target.value-1;
})

btn.addEventListener("click", function(){
    // const monthS = document.getElementById("month").options[document.getElementById("month").selectedIndex].value;
    // const month = parseInt(monthS, 10);
    buildCalendar();

    console.log("click");
    console.log(month)

})
function buildCalendar(){
    const doMonth = new Date(today.getFullYear(), month, 1); // month : 0 ~11
    const lastDate = new Date(today.getFullYear(), month+1, 0); // 시작일을 0으로 하면 지난 달의 마지막 일을 가져온다

    const calendar = document.getElementById("calendar");

    let row = calendar.insertRow();
    let count = 0;

    let tag = "<tr>"
    // 1일 전에 빈 공백 만들어주기
    for (i = 0; i < doMonth.getDay(); i++) {
        tag += "<td></td>";
        count++;
    }

    //날짜 채우기
    for (i = 1; i <= lastDate.getDate(); i++) {
        if (cnt % 7 == 0) { tag += "<tr>"; }

        tag += "<td>" + i + "<br>" + "고가 : " + "<input type=\"text\" style=\"border:none\">" + "<br>" + 
                "저가 : " + "<input type=\"text\" style=\"border:none\">"+ "</td>";
        count++;
        if (cnt % 7 == 0) {
            tag += "</tr>";
        }
    }

}