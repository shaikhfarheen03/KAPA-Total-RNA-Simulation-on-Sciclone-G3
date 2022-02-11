// Variables 

var w = 800;
var h = 400;
var cWidth = w / 6;
var cHeight = h / 4;
var plateWidth = cWidth * 0.85;
var plateHeight = cHeight * 0.85;
var counter = 0;
var A2 = [];
var A3 = [];
var A4 = [];
var A5 = [];
var B2 = [];
var B3 = [];
var B4 = [];
var B5 = [];
var C2 = [];
var C3 = [];
var C4 = [];
var C5 = [];
var D2 = [];
var D3 = [];
var D4 = [];
var D5 = [];

var st1;
var st2;
var st3;
var st4;
var st5;

// Variables for labware location on the deck
function platePosition() {
    A1Position = createVector(cWidth * 1, 0);

    A2Position = createVector(cWidth * 2, 0);
    A2Biorad = new Biorad(A2Position.x, A2Position.y);
    A2.push(A2Biorad);

    A3Position = createVector(cWidth * 3, 0)
    A3Plate384 = new Plate384(A3Position.x, A3Position.y);
    A3.push(A3Plate384);
    A3Lid = new Lid(A3Position.x, A3Position.y);
    A3.push(A3Lid);

    A4Position = createVector(cWidth * 4, 0);
    A4Biorad = new Biorad(A4Position.x, A4Position.y);
    A4.push(A4Biorad);
    A4Lid = new Lid(A4Position.x, A4Position.y);
    A4.push(A4Lid);

    A5Position = createVector(cWidth * 5, 0);
    A5WasteCont = new WasteCont(A5Position.x, A5Position.y);
    A5.push(A5WasteCont);

    B2Position = createVector(cWidth * 2, cHeight);
    B2Biorad = new Biorad(B2Position.x,B2Position.y);
    B2.push(B2Biorad);

    B3Tips = createVector(cWidth * 3, cHeight);
    B3.push(B3Tips);

    B4Empty = createVector(cWidth * 4, cHeight);
    B4.push(B4Empty);

    B5EtOH = createVector(cWidth * 5, cHeight);
    B5.push(B5EtOH);
    B5Lid = new Lid(cWidth * 5, cHeight);
    B5.push(B5Lid);

    C2Position = createVector(cWidth * 2, cHeight * 2);
    C2Biorad1 = new Biorad(C2Position.x, C2Position.y);
    C2Biorad2 = new Biorad(C2Position.x, C2Position.y);
    C2.push(C2Biorad1);
    C2.push(C2Biorad2);
    C2Lid = new Lid(C2Position.x, C2Position.y);
    C2.push(C2Lid);

    C3Position = createVector(cWidth * 3, cHeight * 2);
    C3Tips = createVector(C3Position.x, C3Position.y);
    C3.push(C3Tips);

    C4Magnet = createVector(cWidth * 4, cHeight * 2);
    C4.push(C4Magnet);

    C5Tips = createVector(cWidth * 5, cHeight * 2);
    C5.push(C5Tips);

    D1Position = createVector(cWidth * 1, cHeight * 3);

    D2Inheco = createVector(cWidth * 2, cHeight * 3);
    D2.push(D2Inheco);
    D3Empty = createVector(cWidth * 3, cHeight * 3);
    D3.push(D3Empty);
    D4Position = createVector(cWidth * 4, cHeight * 3);
    D4Biorad = new Biorad(D4Position.x, D4Position.y);
    D4.push(D4Biorad);
    D5Waste = createVector(cWidth * 5, cHeight * 3);
    D5.push(D5Waste);
}


//Function to draw the background and the buttons on the deck
function setup() {
    method = createP("KAPA Total Stranded RNA with RiboErase, Method 1 - RiboErase");
    far = createP("Select method to view SOP");
    far.position(5, h + 75);

    createCanvas(w, h);
    sel = createSelect();
    sel.position(w / 2.5, h + 50);
    sel.option('Broadcast Reagents');
    sel.option('Hybridization and rRNA Depletion');
    sel.option('Depletion Cleanup');
    sel.option('DNAse digestion');
    sel.option('DNAse digestion cleanup');
    sel.changed(mySelectEvent);

    download = createSelect();
    download.position(250, h + 90);
    download.option('RiboErase and cDNA step details');
    download.option('Library Prep and Post PCR SPRI');
    download.changed(downloadPdf);

    button1 = createButton('Next step');
    button2 = createButton('Previous step');

    button1.position(w - 75, h + 50);
    button1.mousePressed(count);
    button2.position(0, h + 50);
    button2.mousePressed(backCount);

    noStroke();
    platePosition();


    function count() {
        counter++
    }

    function backCount() {
        counter--
    }

}

// RiboErase method is subdivided into the following five steps. The drop down menu allows the user to jump to the next steps. 
function mySelectEvent() {
    var item = sel.value();
    if (item === 'Broadcast Reagents') {
        counter = 1;
    } else if (item === 'Hybridization and rRNA Depletion') {
        counter = 18;
    } else if (item === 'Depletion Cleanup') {
        counter = 60;
    } else if (item === 'DNAse digestion') {
        counter = 117;
    } else if (item === 'DNAse digestion cleanup') {
        counter = 145;
    }
}

// This fucntion allows the user to download the protocol. As the protocol is propreitery to NYGC, this step has been disabled. 
// function downloadPdf() {
//     var item = download.value();
//     if (item === "RiboErase and cDNA step details") {
//         lkn = createA('/Users/fshaikh/NYGC/KAPA_str_RNA_RiboErase_Automation/Automated_method_out_of_the_box/Automated_KAPA_Stranded_RNA_method_(Out_of_the_Box)_04182017Test.html', 'Click here', '_blank');
//         lkn.position(500, h + 90);
//     } else if (item === 'Library Prep and Post PCR SPRI') {
//         lkn = createA('/Users/fshaikh/NYGC/KAPA_str_RNA_RiboErase_Automation/Automated_method_out_of_the_box/Day2/DAY2–KAPA_RNA_LibraryPrep_and_PostPCRSPRI_ Updated_07182017Test.html', 'Click here', '_blank');
//         lkn.position(500, h + 90);
//     }
// }


// This function draws a canvas for the deck 
function draw() {

    // Draw the deck
    background(100);
    fill(255);
    for (i = 0; i < w; i += cWidth) {
        for (j = 0; j < h; j += cHeight) {
            rect(i, j, plateWidth, plateHeight, 5);
        }
    }

    // Draw tip boxes in storage
    for (i = 5; i < cWidth * 2; i += cWidth) {
        for (j = 5; j < h; j += cHeight) {
            fill(100, 250, 250, 100);
            rect(i, j, plateWidth, plateHeight, 5);
        }
    }

    // Draw B3 and C3 tip boxes

    rect(B3[0].x + 5, B3[0].y + 5, plateWidth, plateHeight, 5);
    rect(C3[0].x + 5, C3[0].y + 5, plateWidth, plateHeight, 5);

    // Draw C5 80ul Tip box
    fill(200, 0, 0, 100);
    rect(C5[0].x + 5, C5[0].y + 5, plateWidth, plateHeight, 5);

    // Display the objects on the RiboErase deck
    A2Biorad.display();
    A2Biorad.text();

    A3Plate384.display();
    A3Plate384.text();

    A4Biorad.display();
    A4Biorad.text();

    A5WasteCont.display();
    A5WasteCont.text();

    C2Biorad1.display();
    C2Biorad1.text();

    C2Biorad2.display();
    C2Biorad2.text();

    B2Biorad.display();
    B2Biorad.text();

    D4Biorad.display();
    D4Biorad.text();

    A3Lid.display();
    A3Lid.text();

    A4Lid.display();
    A4Lid.text();

    B5Lid.display();
    B5Lid.text();

    C2Lid.display();
    C2Lid.text();



    // Text for tip boxes in storage
    for (i = 0; i < cWidth * 2; i += cWidth) {
        for (j = 0; j < h; j += cHeight) {
            fill(0);
            textAlign(CENTER, CENTER);
            text("Tip Box", i, j, plateWidth, plateHeight);
        }
    }

    // Text for tip box- B3
    fill(0);
    text("Tip Box", B3[0].x, B3[0].y, plateWidth, plateHeight);

    // Text for tip box- C3
    fill(0);
    text("Tip Box", C3[0].x, C3[0].y, plateWidth, plateHeight);

    // Text for Magnets - B4 and C4
    fill(0);
    text("Magnet w no spacer", B4[0].x, B4[0].y, plateWidth, plateHeight + 40);

    fill(0);
    text("Magnet w spacer", C4[0].x, C4[0].y, plateWidth, plateHeight + 40);

    // Text for EtOH Container - B5
    fill(0);
    text("ETOH", B5[0].x, B5[0].y, plateWidth, plateHeight);

    // Text for 80ul Tip box- C5
    fill(0);
    text("80ul Tip box", C5[0].x, C5[0].y, plateWidth, plateHeight);

    // Text for Waste Chute- D5
    fill(0);
    text("Waste Chute", D5[0].x, D5[0].y, plateWidth, plateHeight);


    // Exceptions to the json file
    if (counter === 13){
      fill(250, 200, 0);
      noStroke();
      rect(A1Position.x, A1Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[13].text, A1Position.x, A1Position.y, plateWidth, plateHeight)
    }
    if (counter === 81){
      fill(250, 200, 0);
      noStroke();
      rect(A1Position.x, A1Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[81].text, A1Position.x, A1Position.y, plateWidth, plateHeight)
    }
    if (counter === 211){
      fill(250, 200, 0);
      noStroke();
      rect(A1Position.x, A1Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[211].text, A1Position.x, A1Position.y, plateWidth, plateHeight)
    }

    if (counter === 33){
      fill(250, 200, 0);
      noStroke();
      rect(D1Position.x, D1Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[33].text, D1Position.x, D1Position.y, plateWidth, plateHeight)
    }

    if (counter === 47){
      fill(250, 200, 0);
      noStroke();
      rect(D1Position.x, D1Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[47].text, D1Position.x, D1Position.y, plateWidth, plateHeight)
    }

    if (counter === 16){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[16].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }

    if (counter === 127){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[127].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }

    if (counter === 130){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[130].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
      st5 = eval(steps[130].Position)
      st5;
    }

    if (counter === 131){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[131].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }
    if (counter === 134){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[134].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }
    if (counter === 137){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[137].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
      st5 = eval(steps[137].Position)
      st5;
    }
    if (counter === 139){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[139].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }
    if (counter === 140){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[140].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }
    if (counter === 142){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[142].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }
    if (counter === 147){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[147].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }
    if (counter === 148){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[148].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }
    if (counter === 149){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[149].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }
    if (counter === 154){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[154].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }
    if (counter === 188){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[188].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
      st5 = eval(steps[188].Position)
      st5;
    }
    if (counter === 193){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[193].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }
    if (counter === 194){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[194].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }
    if (counter === 195){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[195].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }
    if (counter === 196){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[196].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }
    if (counter === 197){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[197].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }
    if (counter === 198){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[198].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }
    if (counter === 199){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[199].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }
    if (counter === 201){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[201].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }
    if (counter === 205){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[205].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
      st5 = eval(steps[205].Position)
      st5;
    }

    if (counter === 206){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[206].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }
    if (counter === 209){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[209].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }

    // Reading the json file
    for (i = 0; i < steps.length; i++) {

        if (counter === i && counter != 13 && counter !=16 && counter !=33 && counter!=47 && counter!=81 && counter!=127 && counter!=130 && counter!=131 && counter!=134 && counter!=137 && counter!=139 && counter!=140 && counter!=142 && counter!=147 && counter!=148 && counter!=149 && counter!=154 && counter!=188 && counter!=193 && counter!=194 && counter!=195 && counter!=196 && counter!=197 && counter!=198 && counter!=199 && counter!=201 && counter!=205 && counter!=206 && counter!=209 && counter!=211){
            fill(250, 200, 0);
            noStroke();
            st1 = eval(steps[i].Dloc1)
            st2 = eval(steps[i].Dloc2)
            st3 = eval(steps[i].Dloc3)
            st4 = eval(steps[i].Dloc4)
            st5 = eval(steps[i].Position)

            rect(st1[0].x, st1[0].y, plateWidth, plateHeight, 5);
            if (st2 === undefined) {} else rect(st2[0].x, st2[0].y, plateWidth, plateHeight, 5);
            if (st3 === undefined) {} else rect(st3[0].x, st3[0].y, plateWidth, plateHeight, 5);
            if (st4 === undefined) {} else rect(st4[0].x, st4[0].y, plateWidth, plateHeight, 5);

            fill(0);
            textAlign(CENTER, CENTER);

            text(steps[i].text, st1[0].x, st1[0].y, plateWidth, plateHeight);
            if (st2 === undefined) {} else text(steps[i].text, st2[0].x, st2[0].y, plateWidth, plateHeight);
            if (st3 === undefined) {} else text(steps[i].text, st3[0].x, st3[0].y, plateWidth, plateHeight);
            if (st4 === undefined) {} else text(steps[i].text, st4[0].x, st4[0].y, plateWidth, plateHeight);

            st5;
        }
    }
}
