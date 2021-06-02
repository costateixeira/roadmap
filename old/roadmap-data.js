/*
var options = {
  manipulation: false,
  height: '90%',
  layout: {
    hierarchical: {
      direction: "UD",
      enabled: true,
      sortMethod: "directed", levelSeparation: 100
    }
  },
  physics: {
    hierarchicalRepulsion: {
      nodeDistance: 250
    }
  }
};
*/
/*
var nodes = [
  //PRODUCT
  { 'id': 'P1', 'size': 170, 'label': "Paracetamol\nCode:123\nCODE_ATC:N02BE01", 'color': "#CFCFFF", 'shape': 'box', 'font': { 'face': 'monospace', 'align': 'left' } },

  //DRUGS
  { 'id': 'P2', 'size': 170, 'label': "Paracetamol\n500 mg\nCapsules\nVia Oral\nCHNM:10002512  ", 'color': "#FFCFCF", 'shape': 'box', 'font': { 'face': 'monospace', 'align': 'left' } },
  { 'id': 'P3', 'size': 170, 'label': "Paracetamol\n250 mg\nTablets\n[Via oral]\nCHNM:null", 'color': "#FFCFCF", 'shape': 'box', 'font': { 'face': 'monospace', 'align': 'left' } },
  { 'id': 'P4', 'size': 170, 'label': "Paracetamol\n1000 mg\nTablets\n[Via oral]\nCHNM:10002537", 'color': "#FFCFCF", 'shape': 'box', 'font': { 'face': 'monospace', 'align': 'left' } },
  { 'id': '6605', 'size': 170, 'label': "Paracetamol\n32 mg/ml\nSolução oral\n[Via oral]\nCHNM:10002804  ", 'color': "#FFCFCF", 'shape': 'box', 'font': { 'face': 'monospace', 'align': 'left' } },
  { 'id': 'P8', 'size': 170, 'label': "Paracetamol\n125 mg\nSup\nVia Rectal\nCHNM:10002868", 'color': "#FFCFCF", 'shape': 'box', 'font': { 'face': 'monospace', 'align': 'left' } },


  //PACKS
  { 'id': 'P5', 'size': 170, 'label': "Ben-U-Ron\nAIM:5355078\nBlister\n20cp\nMNSRM\nCNPEM:xxx\nPRECOS:{}\nDIPLOMAS:{}\ncomparticipacao:xx\nclass dispensa", 'color': "#CFFFCF", 'shape': 'box', 'font': { 'face': 'monospace', 'align': 'left' } },
  { 'id': 'P6', 'size': 170, 'label': "Panadol\nAIM:5639109\nBlister\n20cp\nMNSRM\nCNPEM:xxx\nPRECOS:{}\nDIPLOMAS:{}\ncomparticipacao:xx\nclass dispensa", 'color': "#CFFFCF", 'shape': 'box', 'font': { 'face': 'monospace', 'align': 'left' } },
  { 'id': 'P7', 'size': 170, 'label': "Piraldol\nAIM:11122\nBlister\n20cp\nMNSRM\nCNPEM:xxx\nPRECOS:{}\nDIPLOMAS:{}\ncomparticipacao:xx\nclass dispensa", 'color': "#CFFFCF", 'shape': 'box', 'font': { 'face': 'monospace', 'align': 'left' } }


];

*/

var edges = [
  { 'from': "P1", 'to': "P2", 'arrows': 'to', label: 'Active ingredient of', 'physics': true, 'smooth': { 'type': 'cubicBezier' } },
  { 'from': "P1", 'to': "P3", 'arrows': 'to', label: 'Active ingredient of', 'physics': true, 'smooth': { 'type': 'cubicBezier' } },
  { 'from': "P1", 'to': "P4", 'arrows': 'to', label: 'Active ingredient of', 'physics': true, 'smooth': { 'type': 'cubicBezier' } },
  { 'from': "P1", 'to': "6605", 'arrows': 'to', label: 'Active ingredient of', 'physics': true, 'smooth': { 'type': 'cubicBezier' } },
  { 'from': "P1", 'to': "P8", 'arrows': 'to', label: 'Active ingredient of', 'physics': true, 'smooth': { 'type': 'cubicBezier' } },

  { 'from': "P4", 'to': "P5", 'arrows': 'to', label: 'Available as', 'physics': true, 'smooth': { 'type': 'cubicBezier' } },
  { 'from': "P4", 'to': "P6", 'arrows': 'to', label: 'Available as', 'physics': true, 'smooth': { 'type': 'cubicBezier' } },
  { 'from': "P2", 'to': "P7", 'arrows': 'to', label: 'Available as', 'physics': true, 'smooth': { 'type': 'cubicBezier' } }

];
