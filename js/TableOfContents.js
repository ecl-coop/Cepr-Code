////Grabbed from https://codepen.io/chriscoyier/pen/EnLwb

var ToC =
  "<nav role='navigation' class='table-of-contents' id='report-toc'>" +
    "<details><summary>Contents</summary>" +
    "<dl>";

var newLine, el, title, link;

$("section summary").each(function() {

  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");

  newLine =
    "<dt>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</dt>";

  ToC += newLine;

});

ToC +=
   "</dl></details>" +
  "</nav>";

$("article").prepend(ToC);