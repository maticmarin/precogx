function makeStructure(val) {
  //alert(id);
  //var stage;
  var id = val;
  //var pdb_id = id;
  //stage = new NGL.Stage("viewport");
  //alert(id);
  stage.removeAllComponents();
  stage.setParameters( { backgroundColor: "white"} );
  //stage.loadFile("static/"+id+".cif", {defaultRepresentation: true});
  stage.loadFile("rcsb://"+id+".cif").then(function (o) {
            o.autoView();
            o.addRepresentation("cartoon", {
                sele: ":R",
                name: "R",

                color: "blue",
                //color: schemeId,
            });
            o.addRepresentation("cartoon", {
                sele: ":A",
                name: "A",

                color: "green",
                //color: schemeId,
            });
          });
}

function makeStructure2(val) {
  //alert(id);
  //var stage;
  var id = val;
  //var pdb_id = id;
  //stage = new NGL.Stage("viewport");
  //alert(id);
  stage.removeAllComponents();
  stage.setParameters( { backgroundColor: "white"} );
  stage.loadFile("static/"+id+".cif").then(function (o) {
            o.autoView();
            o.addRepresentation("cartoon", {
                sele: ":R",
                name: "R",

                color: "blue",
                //color: schemeId,
            });
            o.addRepresentation("cartoon", {
                sele: ":A",
                name: "A",

                color: "green",
                //color: schemeId,
            });
          });
}
