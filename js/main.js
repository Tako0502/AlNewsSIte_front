document.addEventListener("DOMContentLoaded",function (){
  new TomSelect("#city",{
    create: true,
    sortField: {
      field: "text",
      direction: "asc"
    }
  });
});
