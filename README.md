# KAPA-Total-RNA-Simulation-on-Sciclone-G3
KAPA Total RNA Next Generation Sequencing protocol [simulation](https://shaikhfarheen03.github.io/KAPA-Total-RNA-Simulation-on-Sciclone-G3/) on Perkin Elmer Sciclone G3 created using [P5.js library](https://p5js.org/libraries/). 

![image](https://user-images.githubusercontent.com/26681884/153704406-289d3554-7ef1-4323-891e-f897b9348646.png)


This simulation was developed in Object Oriented Javascript using p5.js library. 
The deck locations in the simulation has a stack of labware (plates or lids) which move around the deck to simulate the real program when the user clicks the button next. 

https://github.com/shaikhfarheen03/KAPA-Total-RNA-Simulation-on-Sciclone-G3/blob/main/KAPA%20Total%20RNA%20Simulation%20steps.png

Similar to the protocol the simulation has been divided into the following four parts:
- RiboErase: To get rid of ribosomal RNA in the samples
- cDNA generation: To convert RNA to cDNA
- Library Prepration: To prepare the library and attach adapters
- Post PCR cleanup 

Inorder to visualize the steps of a particular protocol, please goto the index.html and comment out the parts you wish to visualize. 

The steps.json file contains information about the deck movements and details of the steps are displyed in a yellow box. 
