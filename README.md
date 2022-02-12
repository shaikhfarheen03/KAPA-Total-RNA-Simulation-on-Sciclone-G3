# KAPA-Total-RNA-Simulation-on-Sciclone-G3
KAPA Total RNA Next Generation Sequencing protocol [simulation](https://shaikhfarheen03.github.io/KAPA-Total-RNA-Simulation-on-Sciclone-G3/) on Perkin Elmer Sciclone G3 created using [P5.js library](https://p5js.org/libraries/)

Sciclone G3 is a Perkin Elmer instrument which can process various Next Generation sequencing protocols. 


![image](https://user-images.githubusercontent.com/26681884/153646913-e4556e94-594c-40de-b5fe-4ebb64942297.png)

This simulation was developed in Object Oriented Javascript using p5.js library. 
The deck locations in the simulation has a stack of plates or lids which move around the deck to simulate the real program when the user clicks nexts. 

The protocol was divided into the following four parts:
- RiboErase: To get rid of ribosomal RNA in the samples
- cDNA generation: To convert RNA to cDNA
- Library Prepration: To prepare the library and attach adapters
- Post PCR cleanup 

The simulation was also divided into four parts. 
Inorder to visualize the steps of a particular protocol, please goto the index.html and comment out one of the steps you wish to visualize. 

Each labware is an object on the deck which is drawn on the background. The steps are listed in the steps.json file indicating the deck location of the labware. 
