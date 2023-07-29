const FIRST_MARK = "o";
const NEXT_MARK = "x";
let count = 1;
const IDS = [
  ["b1", "b2", "b3"],
  ["b4", "b5", "b6"],
  ["b7", "b8", "b9"],
];
function $(id) {
  return document.getElementById(id);
}
function isFirstMove() {
  let isFirst = count % 2;
  return isFirst == 1;
}
function changeDisplayCount() {
  if (isFirstMove()) {
    $("display-count").innerHTML = FIRST_MARK + "Lượt của";
  } else {
    $("display-count").innerHTML = NEXT_MARK + "Lượt của";
  }
}
function judgeEnd() {
  let isEnd = false;
  for (let row = 0; row < 3; row++) {
    isEnd = isWin(IDS[row][0], IDS[row][1], IDS[row][2]);
    if (isEnd) {
      displayResult($(IDS[row][0]).value + "Thắng !");
      return true;
    }
  }
}
for (let col = 0; col < 3; col++) {
  isEnd = isWin(IDS[0][col], [1][col], [2][col]);
  if (isEnd) {
    displayResult($(IDS[0][col]).value + "Thắng !");
    return true;
  }
}
function isWin(firstId, secondId, thirdId) {
  if ($(firstId).value == "") {
    return false;
  }
  if ($(secondId).value == "") {
    return false;
  }
  if ($(thirdId).value == "") {
    return false;
  }
  if (
    $(firstId).value == $(secondId).value &&
    $(secondId).value == $(thirdId).value
  ) {
    return true;
  }
}
function displayResult(message) {
  $("display-result").innerHTML = message;
}
function clickAction(event) {
  let id = event.target.id;
  let object = $(id);
  object.value = "o";
  if (object.value != "") {
    return;
  }
  if (isFirstMove()) {
    object.value = FIRST_MARK;
  } else {
    object.value = NEXT_MARK;
  }
  if (judgeEnd()) {
    return;
  }
  count = count + 1;
  changeDisplayCount();
}
function onloadAction() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      $(IDS[row][col]).onclick = clickAction;
    }
  }

  $("b1").onclick = clickAction;
  $("b2").onclick = clickAction;
  $("b3").onclick = clickAction;
  $("b4").onclick = clickAction;
  $("b5").onclick = clickAction;
  $("b6").onclick = clickAction;
  $("b7").onclick = clickAction;
  $("b8").onclick = clickAction;
  $("b9").onclick = clickAction;
}
window.onload = onloadAction;
