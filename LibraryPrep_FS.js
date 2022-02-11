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

// Variables for plate location ono the deck
function platePosition() {
    A1Position = createVector(cWidth * 1, 0);

    A2Position = createVector(cWidth * 2, 0);
    A2Biorad1 = new Biorad(A2Position.x, A2Position.y);
    A2Biorad2 = new Biorad(A2Position.x, A2Position.y);
    A2.push(A2Biorad1);
    A2.push(A2Biorad2);
    A2Lid = new Lid(A2Position.x,A2Position.y);
    A2.push(A2Lid);

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
    B2Lid = new Lid(B2Position.x,B2Position.y);
    B2.push(B2Lid);

    B3Tips = createVector(cWidth * 3, cHeight);
    B3.push(B3Tips);

    B4Empty = createVector(cWidth * 4, cHeight);
    // B4Biorad = new Biorad(B4Position.x, B4Position.y);
    B4.push(B4Empty);

    B5EtOH = createVector(cWidth * 5, cHeight);
    B5.push(B5EtOH);
    B5Lid = new Lid(cWidth * 5, cHeight);
    B5.push(B5Lid);

    C2Empty = createVector(cWidth * 2, cHeight * 2);
    C2.push(C2Empty);

    C3Position = createVector(cWidth * 3, cHeight * 2);
    C3Tips = createVector(C3Position.x, C3Position.y);
    C3.push(C3Tips);

    C4Position = createVector(cWidth * 4, cHeight * 2);
    C4Biorad = new Biorad (-200, C4Position.y);
    C4.push(C4Biorad);

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
    method = createP("KAPA Total Stranded RNA RiboErase");
    far = createP("Select method to view step details");
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
            // for (m=i; m<plateWidth; m+=plateWidth/12){
            //   for (n=j; n<plateHeight; n+=plateHeight/12){
            //     fill(255,255,255)
            //     ellipse(m,n,plateWidth/12*0.85,plateHeight/12*0.856)
            //   }
            // }
        }
    }

    // Draw B3 and C3 tip boxes

    rect(B3[0].x + 5, B3[0].y + 5, plateWidth, plateHeight, 5);
    rect(C3[0].x + 5, C3[0].y + 5, plateWidth, plateHeight, 5);

    // Draw C5 80ul Tip box
    fill(100, 250, 250, 100);
    rect(C5[0].x + 5, C5[0].y + 5, plateWidth, plateHeight, 5);

    A2Biorad1.display();
    A2Biorad1.text();

    A2Biorad2.display();
    A2Biorad2.text();

    A3Plate384.display();
    A3Plate384.text()

    A4Biorad.display();
    A4Biorad.text();

    C4Biorad.display();
    C4Biorad.text();

    A5WasteCont.display();
    A5WasteCont.text();

    B2Biorad.display();
    B2Biorad.text();

    D4Biorad.display();
    D4Biorad.text();

    A2Lid.display();
    A2Lid.text();

    B2Lid.display();
    B2Lid.text();

    A3Lid.display();
    A3Lid.text();

    A4Lid.display();
    A4Lid.text();

    B5Lid.display();
    B5Lid.text();




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

    // Text for Magnet B4
    fill(0);
    text("Magnet w no spacer", B4[0].x, B4[0].y, plateWidth, plateHeight + 40);

    // Text for EtOH Container- B5
    fill(0);
    text("ETOH", B5[0].x, B5[0].y, plateWidth, plateHeight);

    // Text for Empty Tip box- C5
    fill(0);
    text("Empty Tip box", C5[0].x, C5[0].y, plateWidth, plateHeight);

    // Text for Waste Chute- D5
    fill(0);
    text("Waste Chute", D5[0].x, D5[0].y, plateWidth, plateHeight);



    // Exceptions to the json file

    if (counter === 15){
      fill(250, 200, 0);
      noStroke();
      rect(A1Position.x, A1Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[15].text, A1Position.x, A1Position.y, plateWidth, plateHeight)
    }

    if (counter === 44){
      fill(250, 200, 0);
      noStroke();
      rect(A1Position.x, A1Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[44].text, A1Position.x, A1Position.y, plateWidth, plateHeight)
    }

    if (counter === 185){
      fill(250, 200, 0);
      noStroke();
      rect(A1Position.x, A1Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[185].text, A1Position.x, A1Position.y, plateWidth, plateHeight)
    }

    if (counter === 169){
      st5 = eval(steps[169].Position)
      fill(250, 200, 0);
      noStroke();
      rect(B2Position.x, B2Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[169].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
      st5;
    }

    if (counter === 173){
      st5 = eval(steps[173].Position)
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[173].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
      st5;
    }

    if (counter === 174){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[174].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }

    if (counter === 178){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[178].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }

    if (counter === 182){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[182].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }

    if (counter === 183){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[183].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }

    if (counter === 186){
      fill(250, 200, 0);
      noStroke();
      rect(D4Position.x, D4Position.y, plateWidth, plateHeight, 5);
      fill(0);
      textAlign(CENTER, CENTER);
      text(steps[186].text, D4Position.x, D4Position.y, plateWidth, plateHeight)
    }


    for (i = 0; i < steps.length; i++) {

        if (counter === i & counter !=15 & counter !=44 & counter !=185 & counter !=169 & counter !=173 & counter !=174 & counter !=178 & counter !=182 & counter !=183 & counter !=186) {
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
