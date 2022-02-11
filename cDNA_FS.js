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

// Variables for plate loaction ono the deck
function platePosition() {
    A1Position = createVector(cWidth * 1, 0);

    A2Empty = createVector(cWidth * 2, 0);
    A2.push(A2Empty);

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

    B2Empty = createVector(cWidth * 2, cHeight);
    B2.push(B2Empty);

    B3Tips = createVector(cWidth * 3, cHeight);
    B3.push(B3Tips);

    B4Empty = createVector(cWidth * 4, cHeight);
    B4.push(B4Empty);

    B5EtOH = createVector(cWidth * 5, cHeight);
    B5.push(B5EtOH);
    B5Lid = new Lid(cWidth * 5, cHeight);
    B5.push(B5Lid);

    C2Position = createVector(cWidth * 2, cHeight * 2);
    C2Biorad = new Biorad(C2Position.x, C2Position.y);
    C2.push(C2Biorad);
    C2Lid = new Lid(C2Position.x, C2Position.y);
    C2.push(C2Lid);

    C3Position = createVector(cWidth * 3, cHeight * 2);
    C3Tips = createVector(C3Position.x, C3Position.y);
    C3.push(C3Tips);

    C4Magnet = createVector(cWidth * 4, cHeight * 2);
    C4.push(C4Magnet);

    C5Tips = createVector(cWidth * 5, cHeight * 2);
    C5.push(C5Tips);

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



function setup() {
    method = createP("KAPA Total Stranded RNA with RiboErase, Method 2 - cDNA");
    far = createP("Select method to view step details");
    far.position(5, h + 75);

    createCanvas(w, h);
    sel = createSelect();
    sel.position(w / 2.5, h + 50);
    sel.option('Fragmentation');
    sel.option('First Strand synthesis');
    sel.option('Second Strand synthesis');
    sel.option('Post Second Strand synthesis cleanup');
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

function mySelectEvent() {
    var item = sel.value();
    if (item === 'Broadcast Reagents') {
        counter = 1;
    } else if (item === 'Hybridization and rRNA Depletion') {
        counter = 23;
    } else if (item === 'Depletion Cleanup') {
        counter = 52;
    } else if (item === 'DNAse digestion') {
        counter = 108;
    } else if (item === 'DNAse digestion cleanup') {
        counter = 135;
    }
}

function downloadPdf() {
    var item = download.value();
    if (item === "RiboErase and cDNA step details") {
        lkn = createA('/Users/fshaikh/NYGC/KAPA_str_RNA_RiboErase_Automation/Automated_method_out_of_the_box/Automated_KAPA_Stranded_RNA_method_(Out_of_the_Box)_04182017Test.html', 'Click here', '_blank');
        lkn.position(500, h + 90);
    } else if (item === 'Library Prep and Post PCR SPRI') {
        lkn = createA('/Users/fshaikh/NYGC/KAPA_str_RNA_RiboErase_Automation/Automated_method_out_of_the_box/Day2/DAY2–KAPA_RNA_LibraryPrep_and_PostPCRSPRI_ Updated_07182017Test.html', 'Click here', '_blank');
        lkn.position(500, h + 90);
    }
}



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

    // Draw C5 tip box
    fill(100, 250, 250, 100);
    rect(C5[0].x + 5, C5[0].y + 5, plateWidth, plateHeight, 5);


    A3Plate384.display();
    A3Plate384.text()

    A4Biorad.display();
    A4Biorad.text();

    A5WasteCont.display();
    A5WasteCont.text();

    C2Biorad.display();
    C2Biorad.text();

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

    // Text for Magnets- B4 and C4
    fill(0);
    text("Magnet w no spacer", B4[0].x, B4[0].y, plateWidth, plateHeight + 40);

    fill(0);
    text("Magnet w spacer", C4[0].x, C4[0].y, plateWidth, plateHeight + 40);

    // Text for EtOH Container- B5
    fill(0);
    text("ETOH", B5[0].x, B5[0].y, plateWidth, plateHeight);

    // Text for Empty Tip Box- C5
    fill(0);
    text("Empty tip box", C5[0].x, C5[0].y, plateWidth, plateHeight);

    // Text for Waste Chute- D5
    fill(0);
    text("Waste Chute", D5[0].x, D5[0].y, plateWidth, plateHeight);


    // Exceptions to the json file
    if (counter === 9){
      fill(250, 200, 0);
      noStroke();
      rect(A1Position.x, A1Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[9].text, A1Position.x, A1Position.y, plateWidth, plateHeight)
    }

    if (counter === 16){
      st5 = eval(steps[16].Position);
      fill(250, 200, 0);
      noStroke();
      rect(A1Position.x, A1Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[16].text, A1Position.x, A1Position.y, plateWidth, plateHeight)
      st5;
    }

    if (counter === 22){
      fill(250, 200, 0);
      noStroke();
      rect(A1Position.x, A1Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[22].text, A1Position.x, A1Position.y, plateWidth, plateHeight)
    }

    if (counter === 31){
      st5 = eval(steps[31].Position)
      fill(250, 200, 0);
      noStroke();
      rect(A1Position.x, A1Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[31].text, A1Position.x, A1Position.y, plateWidth, plateHeight)
      st5;
    }

    if (counter === 39){
      fill(250, 200, 0);
      noStroke();
      rect(A1Position.x, A1Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[39].text, A1Position.x, A1Position.y, plateWidth, plateHeight)
    }

    if (counter === 68){
      fill(250, 200, 0);
      noStroke();
      rect(A1Position.x, A1Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[68].text, A1Position.x, A1Position.y, plateWidth, plateHeight)
    }

    if (counter === 79){
      fill(250, 200, 0);
      noStroke();
      rect(A1Position.x, A1Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[79].text, A1Position.x, A1Position.y, plateWidth, plateHeight)
    }

    if (counter === 136){
      fill(250, 200, 0);
      noStroke();
      rect(A1Position.x, A1Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[136].text, A1Position.x, A1Position.y, plateWidth, plateHeight)
    }




    for (i = 0; i < steps.length; i++) {

        if (counter === i && counter!=9 && counter!=16 && counter!=22 && counter!=31 && counter!=39 && counter!=68 && counter!=79 && counter!=136) {

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
