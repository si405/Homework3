# sihubot

sihubot is a chat bot built on the [Hubot][hubot] framework.

### Running sihubot Locally

You can start sihubot locally by running:

    % bin/hubot

You'll see some start up output and a prompt:

    [Sat Feb 28 2015 12:38:27 GMT+0000 (GMT)] INFO Using default redis on localhost:6379
    sihubot>

Then you can interact with sihubot by typing `sihubot help`.

    sihubot> sihubot help

### Prerequisites

The functions use the following packages that need to be installed to make the HTTP request to BART and process the returned XML:

npm install xml2js

npm install request

### Commands

I'M HUNGRY

If you let sihubot know that you're hungry by typing 'sihubot i'm hungry' it will suggest a cuisine type. If you want some spicy cuisine type 'sihubot i'm hungry for something spicy' for suggestions or, if you don't want something spicy type 'sihubot i'm hungry for something not spicy'.

This process works by randomly selecting a cuisine type based on the user's preference from an object containing various cuisine types.

NEXT TRAIN

If you want to know the times of the next trains on the Pittsburg/Bay Point line from Montgomery BART station, type 'next bart'. Other valid BART origin and destination stations will be added.

This process calls the BART real-time departures API for the required departure station (Montgomery for testing) and processes the returned XML to find the departure options. It then further refines the list by looking for only those trains headed to the east bay (where the direction is 'north').


** Current Status **
This function is not yet working due to an issue returning the data to the bot. The function is working to the point where it successfully gets the correct data and builds the array of train options but it is not being returned successfully to the calling function.

The test file bart2.js in /myhubot shows a working example that can be run by entering node bart2.js
