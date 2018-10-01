// Google Doc Extra Tools
// Adds more tools for viewing and formatting Google Docs

/* Notes:
* Dark Mode works pretty well – feature missing: adjusting for different text color
* Normal Mode is crude – feature missing: adjust for different text color
* Want to determine, store, & extract different text settings per Heading sections
*/

function onOpen() {
    var ui = DocumentApp.getUi();
    ui.createMenu('Extra Tools')
        .addItem('Dark Mode', 'Dark_Mode')
        .addItem('Normal Mode', 'Normal_Mode')
        .addToUi();
}
function onInstall(e) {
    onOpen(e);
    //Runs when the add-on is installed
  }
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
function Dark_Mode() {
    var selection = DocumentApp.getActiveDocument().getSelection();
    var ActiveDoc = DocumentApp.getActiveDocument();
    var body = DocumentApp.getActiveDocument().getBody();
    var text = body.editAsText(); // editAsText = obtain a single text element containing all text

    // Change settings for Invert mode
    ActiveDoc.setBackgroundColor('#323639'); //Off Black color for Background Color
    text.setForegroundColor('#DADCE0') //Off white for Font Color
}
function Normal_Mode() {
    var selection = DocumentApp.getActiveDocument().getSelection();
    var ActiveDoc = DocumentApp.getActiveDocument();
    var body = DocumentApp.getActiveDocument().getBody();
    var text = body.editAsText(); // editAsText = obtain a single text element containing all text

    // Change settings back to Normal
    ActiveDoc.setBackgroundColor("#FFFFFF"); //Reset back to White
    text.setForegroundColor('#000000') //Off white for Font Color
}
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
