var index = 0;

function changeColors() {
  var colors = ["#DED8E8", "#B2A5C9", "#F5D3CC", "#D0A097"];

  document.getElementsByTagName("body")[0].style.background = colors[index++];

  if (index > colors.length - 1) index = 0;
}
