//
// This test contains both competencies 130d and 130e.
//

import React from 'react';
import community from './community.js';
import c130d from './c130d.js'

global.fetch = require('node-fetch'); // Was Larry's solution vs the isomorphic-fetch solution that I found.

import c920 from './fetch.js'

// import "isomorphic-fetch";

let consoleLog = [];
let consoleLine = 0;

const url = 'http://localhost:5000/';
const urlBad = 'http://localhost:4000/';
// const urlBad = 'https://192.168.0.69';

test('130d: Testing the TDD Pipes', () => {
    
    consoleLog = [];
    consoleLine = 0;
    consoleLog[consoleLine++] = "Testing the TDD pipes";
    expect(consoleLog[0]).toBe("Testing the TDD pipes");
    
});

test('130d: Play Area with Roman Logic', () => {

    function factorial (n) {

        let factorialResult = 1;

        for (let i = 0; i < n; i++) {
            factorialResult *= n-i;
        }

        return factorialResult;
    }

    function polynomial (n) {

        let factorialResult = 1;

        for (let i = 0; i < n; i++) {
            factorialResult *= n-i;
        }

        return factorialResult;
    }

    expect (factorial(1)).toBe(1);
    expect (factorial(2)).toBe(2);
    expect (factorial(3)).toBe(6);
    expect (factorial(4)).toBe(24);
    expect (factorial(5)).toBe(120);
    expect (factorial(6)).toBe(720);
    expect (factorial(7)).toBe(5040);
    expect (factorial(8)).toBe(40320);
    expect (factorial(9)).toBe(362880);
    expect (factorial(10)).toBe(3628800);
    expect (factorial(100)).toBe(9.332621544394418e+157);
    expect (factorial(125)).toBe(1.882677176888926e+209);
    expect (factorial(150)).toBe(5.7133839564458575e+262);
    expect (factorial(165)).toBe(5.423910666131583e+295);
    expect (factorial(170)).toBe(7.257415615308004e+306);
    expect (factorial(171)).toBe(Infinity);
    expect (factorial(172)).toBe(Infinity);
    expect (factorial(173)).toBe(Infinity);
    expect (factorial(175)).toBe(Infinity);
    expect (factorial(250)).toBe(Infinity);
    expect (factorial(500)).toBe(Infinity);
    expect (factorial(1000)).toBe(Infinity);

});

test('130d: Play Area with toLocaleString', () => {

    let i = 512;
    expect(i.toString(2)).toBe("1000000000");
    expect(i.toString(8)).toBe("1000");
    expect(i.toString(10)).toBe("512");
    expect(i.toString(16)).toBe("200");

    i = 1234567.89999;
    expect(i.toLocaleString('en-US', {minimumFractionDigits: 5})).toBe("1,234,567.89999");

    i = 1234567.8901;
    expect(i.toLocaleString('en-US', {minimumFractionDigits: 5})).toBe("1,234,567.89010");
});

test('130d: Play Area with Spread Operator', () => {

    const ctrl = {key:0, name:"Canada", nextKey:1};
    expect(ctrl.key).toBe(0);
    expect(ctrl.nextKey).toBe(1);
    expect(ctrl.name).toBe("Canada");
    
    let newCtrl = {...ctrl};
    expect(newCtrl.key).toBe(0);
    expect(newCtrl.nextKey).toBe(1);
    expect(newCtrl.name).toBe("Canada");
    expect(newCtrl).toEqual({key:0, name:"Canada", nextKey:1});

    const data = [
        {key:0, name:"Canada", nextKey:1},
        {key:1, name:"Calgary", population:1}];

    expect(data[0].key).toBe(0);
    expect(data[0].nextKey).toBe(1);
    expect(data[0].name).toBe("Canada");
    
    newCtrl = {...data[0]};
    expect(newCtrl.key).toBe(0);
    expect(newCtrl.nextKey).toBe(1);
    expect(newCtrl.name).toBe("Canada");
    expect(newCtrl).toEqual({key:0, name:"Canada", nextKey:1});
});

test('130d: Play Area with Try Catch Block and scope references', () => {
    
    let testScope = function (xParam) {

        consoleLog[consoleLine++] = "Global Entered testScope Function = " + xGlobal;
        consoleLog[consoleLine++] = "Param Entered testScope Function = " + xParam;
        let xFunction = "xFunction";
        consoleLog[consoleLine++] = "Function Entered testScope Function = " + xFunction;
        try {
            let xTry = "xTry";
            consoleLog[consoleLine++] = "Global in Try = " + xGlobal;
            consoleLog[consoleLine++] = "Param in Try = " + xParam;
            consoleLog[consoleLine++] = "Function in Try = " + xFunction;
            consoleLog[consoleLine++] = "Try in Try = " + xTry;
        }
        catch {
            let xCatch = "xCatch";
            consoleLog[consoleLine++] = "Global in Catch = " + xGlobal;
            consoleLog[consoleLine++] = "Param in Catch = " + xParam;
            consoleLog[consoleLine++] = "Function in Catch = " + xFunction;
            consoleLog[consoleLine++] = "Try in Catch = " + xTry;
            consoleLog[consoleLine++] = "Catch in Catch = " + xCatch;
        }
        consoleLog[consoleLine++] = "Global Before Return = " + xGlobal;
        consoleLog[consoleLine++] = "Param Before Return = " + xParam;
        consoleLog[consoleLine++] = "Function Before Return = " + xFunction;
        // consoleLog[consoleLine++] = "Try Before Return = " + xTry; // ReferenceError: xTry is not defined. Not caught because after try - catch block.
        // consoleLog[consoleLine++] = "Catch Before Return = " + xCatch;
        return "xReturn";
    }
    
    consoleLog = [];
    consoleLine = 0;
    
    let xGlobal = "xGlobal";
    consoleLog[consoleLine++] = "Global Declaration = " + xGlobal;
    
    let xReturn = testScope("xParam");
    
    consoleLog[consoleLine++] = "Global After Exit testScope Function = " + xGlobal;
    consoleLog[consoleLine++] = "Return After Exit testScope Function = " + xReturn;
    
    expect(consoleLog[0]).toBe("Global Declaration = xGlobal");
    expect(consoleLog[1]).toBe("Global Entered testScope Function = xGlobal");
    expect(consoleLog[2]).toBe("Param Entered testScope Function = xParam");
    expect(consoleLog[3]).toBe("Function Entered testScope Function = xFunction");
    expect(consoleLog[4]).toBe("Global in Try = xGlobal");
    expect(consoleLog[5]).toBe("Param in Try = xParam");
    expect(consoleLog[6]).toBe("Function in Try = xFunction");
    expect(consoleLog[7]).toBe("Try in Try = xTry");
    expect(consoleLog[8]).toBe("Global Before Return = xGlobal");
    expect(consoleLog[9]).toBe("Param Before Return = xParam");
    expect(consoleLog[10]).toBe("Function Before Return = xFunction");
    // expect(consoleLog[8]).toBe("Try Before Return = xTry"); // ReferenceError: xTry is not defined. Not caught because after try - catch block.
    expect(consoleLog[11]).toBe("Global After Exit testScope Function = xGlobal");
    expect(consoleLog[12]).toBe("Return After Exit testScope Function = xReturn");
    
    testScope = function (xParam) {
        
        consoleLog[consoleLine++] = "Global Entered testScope Function = " + xGlobal;
        consoleLog[consoleLine++] = "Param Entered testScope Function = " + xParam;
        let xFunction = "xFunction";
        consoleLog[consoleLine++] = "Function Entered testScope Function = " + xFunction;
        try {
            let xTry = "xTry";
            consoleLog[consoleLine++] = "Global in Try = " + xGlobal;
            consoleLog[consoleLine++] = "Param in Try = " + xParam;
            consoleLog[consoleLine++] = "Function in Try = " + xFunction;
            consoleLog[consoleLine++] = "Try in Try = " + xTry;
            
            // Trigger reference error to catch. Skips over code to end of try block
            // or simply jumps to catch block.
            
            console.log(yNotDefined);
            
            consoleLog[consoleLine++] = "Global Skipped after Error = " + xGlobal;
            consoleLog[consoleLine++] = "Param Skipped after Error = " + xParam;
            consoleLog[consoleLine++] = "Try Skipped after Error = " + xTry;
        }
        catch {
            let xCatch = "xCatch";
            consoleLog[consoleLine++] = "Global in Catch = " + xGlobal;
            consoleLog[consoleLine++] = "Param in Catch = " + xParam;
            consoleLog[consoleLine++] = "Function in Catch = " + xFunction;
            // consoleLog[consoleLine++] = "Try in Catch = " + xTry; // ReferenceError: xTry is not defined. Not caught because after try block.
            consoleLog[consoleLine++] = "Catch in Catch = " + xCatch;
        }
        consoleLog[consoleLine++] = "Global Before Return = " + xGlobal;
        consoleLog[consoleLine++] = "Param Before Return = " + xParam;
        consoleLog[consoleLine++] = "Function Before Return = " + xFunction;
        // consoleLog[consoleLine++] = "Try Before Return = " + xTry; // ReferenceError: xTry is not defined. Not caught because after try block.
        // consoleLog[consoleLine++] = "Catch Before Return = " + xCatch;
        return "xReturn";
    }
    
    consoleLog = [];
    consoleLine = 0;
    
    consoleLog[consoleLine++] = "Global Declaration = " + xGlobal;
    
    xReturn = testScope("xParam");
    
    consoleLog[consoleLine++] = "Global After Exit testScope Function = " + xGlobal;
    consoleLog[consoleLine++] = "Return After Exit testScope Function = " + xReturn;
    
    expect(consoleLog[0]).toBe("Global Declaration = xGlobal");
    expect(consoleLog[1]).toBe("Global Entered testScope Function = xGlobal");
    expect(consoleLog[2]).toBe("Param Entered testScope Function = xParam");
    expect(consoleLog[3]).toBe("Function Entered testScope Function = xFunction");
    expect(consoleLog[4]).toBe("Global in Try = xGlobal");
    expect(consoleLog[5]).toBe("Param in Try = xParam");
    expect(consoleLog[6]).toBe("Function in Try = xFunction");
    expect(consoleLog[7]).toBe("Try in Try = xTry");
    expect(consoleLog[8]).toBe("Global in Catch = xGlobal");
    expect(consoleLog[9]).toBe("Param in Catch = xParam");
    expect(consoleLog[10]).toBe("Function in Catch = xFunction");
    // expect(consoleLog[8]).toBe("Try in Catch = xTry"); // ReferenceError: xTry is not defined. Not caught because after try block.
    expect(consoleLog[11]).toBe("Catch in Catch = xCatch");
    expect(consoleLog[12]).toBe("Global Before Return = xGlobal");
    expect(consoleLog[13]).toBe("Param Before Return = xParam");
    expect(consoleLog[14]).toBe("Function Before Return = xFunction");
    // expect(consoleLog[8]).toBe("Try Before Return = xTry"); // ReferenceError: xTry is not defined. Not caught because after try block.
    expect(consoleLog[15]).toBe("Global After Exit testScope Function = xGlobal");
    expect(consoleLog[16]).toBe("Return After Exit testScope Function = xReturn");
    
});

test('Larry: test postdata gives a good error if api server not started', async () => {
    
    async function postDataLarry(url = '', data = {}) {
        // Default options are marked with *
        
        const response = await fetch(url, {
            method: 'POST',     // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',       // no-cors, *cors, same-origin
            cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',         // manual, *follow, error
            referrer: 'no-referrer',    // no-referrer, *client
            body: JSON.stringify(data)  // body data type must match "Content-Type" header
        });
        
        const json = await response.json();    // parses JSON response into native JavaScript objects
        json.status = response.status;
        json.statusText = response.statusText;
        
        return json;
    }

    try {
        // dummy url:port that does not exist
        const url = 'http://localhost:5678/';
        const data = await postDataLarry(url);
        // The above line should throw an error and we should never get to the next line
        expect("").toBe("This bad port # should have caused an exception.");
    }
    catch (e) {
        expect(e.code).toBe("ECONNREFUSED");
    }
    finally {
    }
});

test('Duane: test postdata gives a good error if api server not started', async () => {
    
    // try {
        // dummy url:port that does not exist
        const url = 'http://localhost:5678/';
        const data = await c920.postData(url);
        // The above line should throw an error and we should never get to the next line
        expect(data.status).toBe("FetchError");
        // expect("").toBe("This bad port # should have caused an exception.");
    // }
    // catch (e) {
    //     expect(e.code).toBe("ECONNREFUSED");
    // }
    // finally {
    // }

});

test('130d: Async ASP confirmAPIConnect', async (done) => {
    
    
    let data = await c130d.confirmAPIConnect (urlBad);
    expect(data.status).not.toBe(200);
    
    data = await c920.postData(url + "clear");
    expect(data.status).toBe(200);
    
    data = await c130d.confirmAPIConnect (url);
    expect(data.status).toBe(200);
    
    const canada = new community.Community ("Canada");
    data = await c920.postData(url + 'add', canada.cityList[0]);
    expect(data.status).toEqual(200);
    
    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);
    
    expect(data.length).toBe(1); 
    expect(data[0].key).toBe(0);
    expect(data[0].nextKey).toBe(1);
    
    data = await c130d.confirmAPIConnect (url);
    expect(data.status).toBe(200);
    expect(data.length).toBe(1); 
    expect(data[0].key).toBe(0);
    expect(data[0].nextKey).toBe(1);
    
    done();
});

test('130d: Async ASP loadAPICommunity and createNewCommunity with No API data', async (done) => {

    document.body.innerHTML =    
    '   <div id=idAddCom class="divAddCom">' +
            'Enter Name of Community: <input id="inputNewCom" type=text>' +
            '<button id="btnCreateCom" type="button">Create</button>' +
            '<button id="btnCancelCom" type="button">Cancel</button>' +
        '</div>		' +
        '<div class="divComActions">' +
            '<div class="divCitySelect">' +
                'City Name: <select id=selectCity>' +
                    '<option value="srcSelect">Select City</option>' +
                    '<option value="srcAddCity">Add New City</option>' +
                '</select>' +
            '</div>' +
            '<div class="divCityActions">' +
                'Population: <input id="inputAmt" type=number value=0>' +
                '<button id="btnAddCity" type="button">Add New City</button>' +
                '<button id="btnDelCity" type="button">Delete</button>' +
                '<button id="btnMovedIn" type="button">Moved In</button>' +
                '<button id="btnMovedOut" type="button">Moved Out</button>' +
            '</div>' +
            '<p id="messageArea" position="absolute"></p>' +
        '</div>' +
        '<div id=idCitys class="divCommunity">' +
            '<h4 id="h4Community" class="h4ComTitle">Community: NOT Entered Yet!!</h4>' +
        '</div>';

        const testClass = new TestDummy;
    //
    // Test scenario of no data on API server.
    //

    let data = await c920.postData(url + "clear");
    expect(data.status).toBe(200);

    data = await c130d.loadAPICommunity(c130d.url, testClass.displayMessage);

    expect(data.allLists).toEqual([]);
    expect(data.cityList[0].name).toBe("MessageOnly");
    expect(data.msgQueue[0]).toBe("There was no data to load from the API. "
        + "Please enter the name of your new Community.");

    //
    //  This is now rendered from ComCities component, NOT the JS code.
    //    
    // expect(document.getElementById("idAddCom")).not.toBeNull();
    
    inputNewCom.value = "";
    
    data = await c130d.createNewCommunity();
    
    expect(data.cityList[0].name).toBe("MessageOnly");
    expect(data.msgQueue[0]).toBe("Please input the new Community name.");
        
    //
    //  This is now rendered from ComCities component, NOT the JS code.
    //  
    // expect(document.getElementById("idAddCom")).not.toBeNull();
    
    inputNewCom.value = "North America";
    
    let newCom = await c130d.createNewCommunity();
    
    expect(newCom.name).toBe("North America");
    expect(newCom.cityList[0].name).toBe("North America");
    expect(newCom.cityList[0].key).toBe(0);
    expect(newCom.cityList[0].nextKey).toBe(1);

    expect(newCom.msgQueue[0]).toBe("Community North America has been created.");

    expect(h4Community.textContent).toBe("Community: North America");
    
    // expect(document.getElementById("idAddCom")).toBeNull();
    
    done();
});

test('130d: Async ASP loadAPICommunity', async (done) => {

    document.body.innerHTML =
    '<section class ="sectionMain">' +
        '<h1>Welcome to the Community and City</h1>' +
    '   <div id=idAddCom class="divAddCom">' +
            'Enter Name of Community: <input id="inputNewCom" type=text>' +
            '<button id="btnCreateCom" type="button">Create</button>' +
            '<button id="btnCancelCom" type="button">Cancel</button>' +
        '</div>		' +
        '<div class="divComActions">' +
            '<div class="divCitySelect">' +
                'City Name: <select id=selectCity>' +
                    '<option value="srcSelect">Select City</option>' +
                    '<option value="srcAddCity">Add New City</option>' +
                '</select>' +
            '</div>' +
            '<div class="divCityActions">' +
                'Population: <input id="inputAmt" type=number value=0>' +
                '<button id="btnAddCity" type="button">Add New City</button>' +
                '<button id="btnDelCity" type="button">Delete</button>' +
                '<button id="btnMovedIn" type="button">Moved In</button>' +
                '<button id="btnMovedOut" type="button">Moved Out</button>' +
            '</div>' +
            '<p id="messageArea" position="absolute"></p>' +
        '</div>' +
        '<div id=idCitys class="divCommunity">' +
            '<h4 id="h4Community" class="h4ComTitle">Community: Canada</h4>' +
            '<div class="divCityList">' +
                '<section class="sectionCityList">' +
                    '<h4>City</h4>' +
                    '<ul id="ulCityList">' +
                        '<li id="idSumTxt" class="liSum">Totals</li>' +
                    '</ul>' +
                '</section>' +
                '<aside class="asideLatList">' +
                    '<h4>Latitude</h4>' +
                    '<ul id="ulLatList">' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideLongList">' +
                    '<h4>Longitude</h4>' +
                    '<ul id="ulLongList">' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asidePopList">' +
                    '<h4>Population</h4>' +
                    '<ul id="ulPopList">' +
                        '<li id="idSum" class="liSum">1,549,421</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideSizeList">' +
                    '<h4>Size</h4>' +
                    '<ul id="ulSizeList">' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideHemList">' +
                    '<h4>N/S</h4>' +
                    '<ul id="ulHemList">' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideMaxList">' +
                    '<h4>Max N/S</h4>' +
                    '<ul id="ulMaxList">' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
            '</div>' +
        '</div>' +
    '</section>';

    const testClass = new TestDummy;
    
    //
    // Test scenario of data existing on the server. First clear the API, then
    // add some known data to the API.
    //
    //

    let data = await c920.postData(url + "clear");
    expect(data.status).toBe(200);

    const canada = new community.Community ("Canada");
    data = await c130d.createAPICommunity (url, canada.cityList[0]);    
    expect(data.status).toBe(200);

    canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    data = await c130d.createAPICity (url, canada.cityList[1], canada.cityList[0]);
    expect(data.status).toBe(200);

    canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);
    data = await c130d.createAPICity (c130d.url, canada.cityList[2], canada.cityList[0]);
    expect(data.status).toBe(200);

    canada.createCity ("Kirkaldy", 50.3367, -13.2380, 20);
    data = await c130d.createAPICity (c130d.url, canada.cityList[3], canada.cityList[0]);
    expect(data.status).toBe(200);

    let newCommunity = await c130d.loadAPICommunity(c130d.url, testClass.displayMessage);

    //
    // messageArea is now JSX then rendered, not loaded to messageArea old way.
    // Since this is in calling component can't test from here.
    //
    // expect(messageArea.textContent).toBe("Loading Community and Cities ....... DONE");

    expect(newCommunity.name).toBe("Canada");
    
    expect(newCommunity.cityList[1].name).toBe("Calgary");
    expect(newCommunity.cityList[2].name).toBe("Vulcan");
    expect(newCommunity.cityList[3].name).toBe("Kirkaldy");
    expect(newCommunity.getPopulation()).toBe(1549421);

    expect(JSON.stringify(newCommunity.allLists[0])).toEqual(
        JSON.stringify([
            <li id="liCity1" className="liOdd" key="0">Calgary</li>, 
            <li id="liCity3" className="liEven" key="1">Kirkaldy</li>, 
            <li id="liCity2" className="liOdd" key="2">Vulcan</li>]
        )
    );

    expect(newCommunity.allLists[0]).toEqual(
            [
            <li id="liCity1" className="liOdd" key="0">Calgary</li>, 
            <li id="liCity3" className="liEven" key="1">Kirkaldy</li>, 
            <li id="liCity2" className="liOdd" key="2">Vulcan</li>]
    );

    expect(idSum.textContent).toBe("1,549,421");

    done();
});

test('130d: Async ASP create and delete APICommunity', async (done) => {
    
    let data = await c920.postData(url + "clear");
    expect(data.status).toBe(200);
    
    const canada = new community.Community ("Canada");
    
    data = await c130d.createAPICommunity (url, canada.cityList[0]);
    expect(data.status).toBe(200);
    
    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data[0].name).toBe("Canada");

    //
    // Did not actually use in 130d. Did NOT convert in 140d.
    //
    // data = await c130d.deleteAPICommunity (url);
    
    // data = await c920.postData(url + 'all');
    // expect(data.status).toEqual(200);
    // expect(data.length).toBe(0); 
    
    done();
});


test('130d: Async ASP create, delete and update APICity', async (done) => {
    
    let data = await c920.postData(url + "clear");
    expect(data.status).toBe(200);
    
    const canada = new community.Community ("Canada");
    data = await c130d.createAPICommunity (url, canada.cityList[0]);
    expect(data.status).toBe(200);
    
    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data[0].name).toBe("Canada");
    
    let createResult = canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    expect(createResult).toEqual([1,1]);
    
    let newIndex = createResult[0];
    let newKey = createResult[1];
    
    data = await c130d.createAPICity (url, canada.cityList[1], canada.cityList[0]);
    expect(data.status).toBe(200);
    
    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);

    expect(data[0].name).toBe("Canada");
    expect(data[newIndex].name).toBe("Calgary");
    expect(data[newIndex].latitude).toBe(51.0447);
    expect(data[newIndex].longitude).toBe(-114.0719);
    expect(data[newIndex].population).toBe(1547484);
    expect(data[newIndex].key).toBe(newKey);
    expect(data[0].nextKey).toBe(2);

    data = await c130d.deleteAPICity (url, canada.cityList[1]);
    expect(data.status).toBe(200);

    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);

    expect(data.length).toBe(1);
    expect(data[0].nextKey).toBe(2);

    let keyDel = {};
    keyDel.key = newKey;

    data = await c920.postData(url + 'read', keyDel);
    expect(data.status).toEqual(400);

    data = await c130d.createAPICity (url, canada.cityList[1], canada.cityList[0]);
    expect(data.status).toBe(200);

    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);

    expect(data[newIndex].name).toBe("Calgary");
    expect(data[newIndex].key).toBe(newKey);
    expect(data[0].nextKey).toBe(2);

    expect(canada.movedOutOfCity(1, 484)).toBe(1547000);
    data = await c130d.updateAPICity (url, canada.cityList[1]);

    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);
    
    expect(data[1].name).toBe("Calgary");
    expect(data[1].population).toBe(1547000);
    
    expect(canada.movedIntoCity(1, 1000)).toBe(1548000);
    data = await c130d.updateAPICity (url, canada.cityList[1]);
    expect(data.status).toEqual(200);
    
    data = await c920.postData(url + 'all');
    expect(data.status).toEqual(200);
    
    expect(data[1].name).toBe("Calgary");
    expect(data[1].population).toBe(1548000);
    
    //
    // Did not actually use getAPICity in 130d, so did NOT migrate to 140d.
    //
    // data = await c130d.getAPICity (url, canada.cityList[1]);
    // expect(data.status).toEqual(200);

    // expect(data.length).toBe(1);
    // expect(data[0].name).toBe("Calgary");
    // expect(data[0].population).toBe(1548000);

    data = await c130d.getAllAPI (url);
    expect(data.status).toEqual(200);    

    expect(data.length).toBe(2);
    expect(data[0].name).toBe("Canada");
    expect(data[0].nextKey).toBe(2);
    expect(data[1].name).toBe("Calgary");
    expect(data[1].population).toBe(1548000);
    
    done();
    
});

//
// Did not actually use deleteItemFromList in 130d, so did NOT migrate to 140d.
//
// test('130d: Test deleteItemFromList from the DOM', () => {

//     document.body.innerHTML =
//         '<section class="sectionCityList">' +
//             '<h4>City</h4>' +
//             '<ul id="ulCityList">' +
//                 '<li id="liCity1" class="liOdd">Calgary</li>' +
//                 '<li id="liCity2" class="liEven">Vulcan</li>' +
//                 '<li id="liCity3" class="liOdd">Kirkaldy</li>' +
//                 '<li id="idSumTxt" class="liSum">Totals</li>' +
//             '</ul>' +
//         '</section>';

//     expect(ulCityList.children.length).toBe(4);
//     expect(c130d.deleteItemFromList(ulCityList)).toBe(3);
//     expect(ulCityList.children.length).toBe(1);
//     expect(ulCityList.children[0].className).toBe("liSum");

// });

test('130d: Test deleteCityList JSX', () => {

    document.body.innerHTML =

    '<div class="divCityList">' +
        '<section class="sectionCityList">' +
            '<h4>City</h4>' +
            '<ul id="ulCityList">' +
                '<li id="liCity1" class="liOdd">Calgary</li>' +
                '<li id="liCity2" class="liEven">Vulcan</li>' +
                '<li id="liCity3" class="liOdd">Kirkaldy</li>' +
                '<li id="idSumTxt" class="liSum">Totals</li>' +
            '</ul>' +
        '</section>' +
        '<aside class="asidePopList">' +
            '<h4>Population</h4>' +
            '<ul id="ulPopList">' +
                '<li id="liPop1" class="liOdd">1,547,484</li>' +
                '<li id="liPop2" class="liEven">1,917</li>' +
                '<li id="liPop3" class="liOdd">20</li>' +
                '<li id="idSum" class="liSum">1,549,421</li>' +
            '</ul>' +
        '</aside>' +
    '</div>';

    //
    // deleteCityList no longer manipulates the DOM, but only clears the JSX
    //
    
    expect(c130d.deleteCityList()).toEqual([null, null, null, null, null, null, null, null]);

});

test('130d: Test liCity addItemToList JSX', () => {

    document.body.innerHTML =
        '<section class="sectionCityList">' +
            '<h4>City</h4>' +
            '<ul id="ulCityList">' +
                '<li id="idSumTxt" class="liSum">Totals</li>' +
            '</ul>' +
        '</section>' +
        '<aside class="asidePopList">' +
            '<h4>Population</h4>' +
            '<ul id="ulPopList">' +
                '<li id="idSum" class="liSum">1,549,421</li>' +
            '</ul>' +
        '</aside>';

    const canada = new community.Community ("Canada");
    canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);
    canada.createCity ("Kirkaldy", 50.3367, -13.2380, 20);
    
    let cityArr = canada.sortCityList("Name");
    expect(cityArr).toEqual([1, 3, 2]);

    //
    // addItemToList no longer renders to the DOM. It creates the JSX for
    // calling React component to render.
    //

    expect(c130d.addItemToList("ulCityList", "liCity", canada, cityArr)).toEqual(
        [
            <li id="liCity1" className="liOdd" key="0">Calgary</li>, 
            <li id="liCity3" className="liEven" key="1">Kirkaldy</li>, 
            <li id="liCity2" className="liOdd" key="2">Vulcan</li>
        ]
    );

    expect(idSum.textContent).toBe("1,549,421");

});

test('130d: Test liLat addItemToList JSX', () => {

    document.body.innerHTML =
    '<aside class="asideLatList">' +
        '<h4>Latitude</h4>' +
        '<ul id="ulLatList">' +
            '<li class="liSum">.</li>' +
        '</ul>' +
    '</aside>';

    const canada = new community.Community ("Canada");
    canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);
    canada.createCity ("Kirkaldy", 50.3367, -13.2380, 20);
    
    let cityArr = canada.sortCityList("Name");
    expect(cityArr).toEqual([1, 3, 2]);

    //
    // addItemToList no longer renders to the DOM. It creates the JSX for
    // calling React component to render.
    //

    expect(c130d.addItemToList("ulLatList", "liLat", canada, cityArr)).toEqual(
        [
            <li id="liLat1" className="liOdd" key="0">51.0447</li>, 
            <li id="liLat3" className="liEven" key="1">50.3367</li>, 
            <li id="liLat2" className="liOdd" key="2">50.4038</li>
        ]
    );
});

test('130d: Test liLong addItemToList from the DOM', () => {

    document.body.innerHTML =
    '<aside class="asideLongList">' +
        '<h4>Longitude</h4>' +
        '<ul id="ulLongList">' +
            '<li class="liSum">.</li>' +
        '</ul>' +
    '</aside>';

    const canada = new community.Community ("Canada");
    canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);
    canada.createCity ("Kirkaldy", 50.3367, -13.2380, 20);
    
    let cityArr = canada.sortCityList("Name");
    expect(cityArr).toEqual([1, 3, 2]);

    //
    // addItemToList no longer renders to the DOM. It creates the JSX for
    // calling React component to render.
    //

    expect(c130d.addItemToList("ulLongList", "liLong", canada, cityArr)).toEqual(
        [
            <li id="liLong1" className="liOdd" key="0">-114.0719</li>, 
            <li id="liLong3" className="liEven" key="1">-13.2380</li>, 
            <li id="liLong2" className="liOdd" key="2">-113.2622</li>
        ]
    );
});

test('130d: Test liPop addItemToList JSX', () => {

    document.body.innerHTML =
    '<aside class="asidePopList">' +
        '<h4>Population</h4>' +
        '<ul id="ulPopList">' +
            '<li id="idSum" class="liSum">0</li>' +
        '</ul>' +
    '</aside>';

    const canada = new community.Community ("Canada");
    canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);
    canada.createCity ("Kirkaldy", 50.3367, -13.2380, 20);
    
    let cityArr = canada.sortCityList("Name");
    expect(cityArr).toEqual([1, 3, 2]);

    //
    // addItemToList no longer renders to the DOM. It creates the JSX for
    // calling React component to render.
    //

    expect(c130d.addItemToList("ulPopList", "liPop", canada, cityArr)).toEqual(
        [
            <li id="liPop1" className="liOdd" key="0">1,547,484</li>, 
            <li id="liPop3" className="liEven" key="1">20</li>, 
            <li id="liPop2" className="liOdd" key="2">1,917</li>
        ]
    );
    
    expect(idSum.textContent).toBe("1,549,421");

});

test('130d: Test liSize addItemToList JSX', () => {

    document.body.innerHTML =
    '<aside class="asideSizeList">' +
        '<h4>Size</h4>' +
        '<ul id="ulSizeList">' +
            '<li class="liSum">.</li>' +
        '</ul>' +
    '</aside>';

    const canada = new community.Community ("Canada");
    canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);
    canada.createCity ("Kirkaldy", 50.3367, -13.2380, 20);
    
    let cityArr = canada.sortCityList("Name");
    expect(cityArr).toEqual([1, 3, 2]);

    //
    // addItemToList no longer renders to the DOM. It creates the JSX for
    // calling React component to render.
    //

    expect(c130d.addItemToList("ulSizeList", "liSize", canada, cityArr)).toEqual(
        [
            <li id="liSize1" className="liOdd" key="0">City</li>, 
            <li id="liSize3" className="liEven" key="1">Hamlet</li>, 
            <li id="liSize2" className="liOdd" key="2">Town</li>
        ]
    );
});

test('130d: Test liHem addItemToList JSX', () => {

    document.body.innerHTML =
    '<aside class="asideHemList">' +
        '<h4>N/S</h4>' +
        '<ul id="ulHemList">' +
            '<li class="liSum">.</li>' +
        '</ul>' +
    '</aside>';

    const canada = new community.Community ("Canada");
    canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);
    canada.createCity ("Kirkaldy", 50.3367, -13.2380, 20);
    
    let cityArr = canada.sortCityList("Name");
    expect(cityArr).toEqual([1, 3, 2]);

    //
    // addItemToList no longer renders to the DOM. It creates the JSX for
    // calling React component to render.
    //

    expect(c130d.addItemToList("ulHemList", "liHem", canada, cityArr)).toEqual(
        [
            <li id="liHem1" className="liOdd" key="0">N</li>, 
            <li id="liHem3" className="liEven" key="1">N</li>, 
            <li id="liHem2" className="liOdd" key="2">N</li>
        ]
    );
});

test('130d: Test liMax addItemToList JSX', () => {

    document.body.innerHTML =
    '<aside class="asideMaxList">' +
        '<h4>Max N/S</h4>' +
        '<ul id="ulMaxList">' +
            '<li class="liSum">.</li>' +
        '</ul>' +
    '</aside>';

    const canada = new community.Community ("Canada");
    canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);
    canada.createCity ("Kirkaldy", 50.3367, -13.2380, 20);
    
    let cityArr = canada.sortCityList("Name");
    expect(cityArr).toEqual([1, 3, 2]);

    //
    // addItemToList no longer renders to the DOM. It creates the JSX for
    // calling React component to render.
    //

    expect(c130d.addItemToList("ulMaxList", "liMax", canada, cityArr)).toEqual(
        [
            <li id="liMax1" className="liOdd" key="0">N</li>, 
            <li id="liMax3" className="liEven" key="1">S</li>, 
            <li id="liMax2" className="liOdd" key="2">.</li>
        ]
    );
});

test('130d: Test srcCity addItemToList JSX', () => {

    document.body.innerHTML =
        '<div class="divCitySelect">' +
            'City Name: <select id=selectCity>' +
                '<option value="srcSelect">Select City</option>' +
                '<option value="srcAddCity">Add New City</option>' +
            '</select>' +
        '</div>';

    const canada = new community.Community ("Canada");
    canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);
    canada.createCity ("Kirkaldy", 50.3367, -13.2380, 20);
    
    let cityArr = canada.sortCityList("Name");
    expect(cityArr).toEqual([1, 3, 2]);

    //
    // addItemToList no longer renders to the DOM. It creates the JSX for
    // calling React component to render.
    //

    expect(c130d.addItemToList("selectCity", "srcCity", canada, cityArr)).toEqual(
        [
            <option value="srcCity1" key="0">Calgary</option>, 
            <option value="srcCity3" key="1">Kirkaldy</option>, 
            <option value="srcCity2" key="2">Vulcan</option>
        ]
    );    
});

test('130d: Test createCityList and refreshCityList JSX', () => {

    document.body.innerHTML =
    '<section class ="sectionMain">' +
        '<h1>Welcome to the Community and City</h1>' +
        '<div class="divComActions">' +
            '<div class="divCitySelect">' +
                'City Name: <select id=selectCity>' +
                    '<option value="srcSelect">Select City</option>' +
                    '<option value="srcAddCity">Add New City</option>' +
                '</select>' +
            '</div>' +
        '</div>' +
        '<div class="divCityActions">' +
            'Population: <input id="inputAmt" type=number value=0>' +
            '<button id="btnAddCity" type="button">Add New City</button>' +
            '<button id="btnDelCity" type="button">Delete</button>' +
            '<button id="btnMovedIn" type="button">Moved In</button>' +
            '<button id="btnMovedOut" type="button">Moved Out</button>' +
        '</div>' +
        '<p id="messageArea" position="absolute"></p>' +
        '<div id=idCitys class="divCommunity">' +
            '<h4 id="h4Community" class="h4ComTitle">Community: Canada</h4>' +
            '<div class="divCityList">' +
                '<section class="sectionCityList">' +
                    '<h4>City</h4>' +
                    '<ul id="ulCityList">' +
                        '<li id="idSumTxt" class="liSum">Totals</li>' +
                    '</ul>' +
                '</section>' +
                '<aside class="asideLatList">' +
                    '<h4>Latitude</h4>' +
                    '<ul id="ulLatList">' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideLongList">' +
                    '<h4>Longitude</h4>' +
                    '<ul id="ulLongList">' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asidePopList">' +
                    '<h4>Population</h4>' +
                    '<ul id="ulPopList">' +
                        '<li id="idSum" class="liSum">1,549,421</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideSizeList">' +
                    '<h4>Size</h4>' +
                    '<ul id="ulSizeList">' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideHemList">' +
                    '<h4>N/S</h4>' +
                    '<ul id="ulHemList">' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideMaxList">' +
                    '<h4>Max N/S</h4>' +
                    '<ul id="ulMaxList">' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
            '</div>' +
        '</div>' +
    '</section>';

    const canada = new community.Community ("Canada");
    canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);
    canada.createCity ("Kirkaldy", 50.3367, -13.2380, 20);
    
    let cityArr = canada.sortCityList("Name");
    expect(cityArr).toEqual([1, 3, 2]);

    //
    // createCityList and refreshCityList no longer renders to the DOM. They creates the JSX for
    // the calling React component to render.
    //
    // Only really need to test refreshCityList, since it is returning what was created by createCityList
    //

    expect(c130d.refreshCityList(canada)[0]).toEqual(
        [
            <li id="liCity1" className="liOdd" key="0">Calgary</li>, 
            <li id="liCity3" className="liEven" key="1">Kirkaldy</li>, 
            <li id="liCity2" className="liOdd" key="2">Vulcan</li>
        ]
    );

    expect(c130d.refreshCityList(canada)[1]).toEqual(
        [
            <li id="liLat1" className="liOdd" key="0">51.0447</li>, 
            <li id="liLat3" className="liEven" key="1">50.3367</li>, 
            <li id="liLat2" className="liOdd" key="2">50.4038</li>
        ]
    );
        
    expect(c130d.refreshCityList(canada)[2]).toEqual(
        [
            <li id="liLong1" className="liOdd" key="0">-114.0719</li>, 
            <li id="liLong3" className="liEven" key="1">-13.2380</li>, 
            <li id="liLong2" className="liOdd" key="2">-113.2622</li>
        ]
    );

    expect(c130d.refreshCityList(canada)[3]).toEqual(
        [
            <li id="liPop1" className="liOdd" key="0">1,547,484</li>, 
            <li id="liPop3" className="liEven" key="1">20</li>, 
            <li id="liPop2" className="liOdd" key="2">1,917</li>
        ]
    );
    expect(idSum.textContent).toBe("1,549,421");

    expect(c130d.refreshCityList(canada)[4]).toEqual(
        [
            <li id="liSize1" className="liOdd" key="0">City</li>, 
            <li id="liSize3" className="liEven" key="1">Hamlet</li>, 
            <li id="liSize2" className="liOdd" key="2">Town</li>
        ]
    );

    expect(c130d.refreshCityList(canada)[5]).toEqual(
        [
            <li id="liHem1" className="liOdd" key="0">N</li>, 
            <li id="liHem3" className="liEven" key="1">N</li>, 
            <li id="liHem2" className="liOdd" key="2">N</li>
        ]
    );

    expect(c130d.refreshCityList(canada)[6]).toEqual(
        [
            <li id="liMax1" className="liOdd" key="0">N</li>, 
            <li id="liMax3" className="liEven" key="1">S</li>, 
            <li id="liMax2" className="liOdd" key="2">.</li>
        ]
    );

    expect(c130d.refreshCityList(canada)[7]).toEqual(
        [
            <option value="srcCity1" key="0">Calgary</option>, 
            <option value="srcCity3" key="1">Kirkaldy</option>, 
            <option value="srcCity2" key="2">Vulcan</option>
        ]
    );  
});

test('130d: Test remove new City name div from DOM', () => {
document.body.innerHTML =
'<section class ="sectionMain">' +
    '<h1>Welcome to the Community and City</h1>' +
'   <div id=idAddCom class="divAddCom">' +
        'Enter Name of Community: <input id="inputNewCom" type=text>' +
        '<button id="btnCreateCom" type="button">Create</button>' +
        '<button id="btnCancelCom" type="button">Cancel</button>' +
    '</div>		' +
    '<div class="divComActions">' +
        '<div class="divCitySelect">' +
            'City Name: <select id=selectCity>' +
                '<option value="srcSelect">Select City</option>' +
                '<option value="srcAddCity">Add New City</option>' +
                '<option value="srcCity1">Calgary</option>' +
                '<option value="srcCity2">Vulcan</option>' +
                '<option value="srcCity3">Kirkaldy</option>' +
            '</select>' +
        '</div>' +
        '<div class="divCityActions">' +
            'Population: <input id="inputAmt" type=number value=0>' +
            '<button id="btnAddCity" type="button">Add New City</button>' +
            '<button id="btnDelCity" type="button">Delete</button>' +
            '<button id="btnMovedIn" type="button">Moved In</button>' +
            '<button id="btnMovedOut" type="button">Moved Out</button>' +
        '</div>' +
        '<p id="messageArea" position="absolute"></p>' +
    '</div>' +
    '<div id=idAddCity class="divAddCity">' +
        'Enter Name of New City: <input id="inputNewCity" type=text>' +
        '<button id="btnCreateCity" type="button">Create</button>' +
        '<button id="btnCancelCity" type="button">Cancel</button>' +
    '</div>' +
    '<div id=idCitys class="divCommunity">' +
        '<h4 id="h4Community" class="h4ComTitle">Community: Canada</h4>' +
        '<div class="divCityList">' +
            '<section class="sectionCityList">' +
                '<h4>City</h4>' +
                '<ul id="ulCityList">' +
                    '<li id="liCity1" class="liOdd">Calgary</li>' +
                    '<li id="liCity2" class="liEven">Vulcan</li>' +
                    '<li id="liCity3" class="liOdd">Kirkaldy</li>' +
                    '<li id="idSumTxt" class="liSum">Totals</li>' +
                '</ul>' +
            '</section>' +
            '<aside class="asideLatList">' +
                '<h4>Latitude</h4>' +
                '<ul id="ulLatList">' +
                    '<li id="liLat1" class="liOdd">51.0447</li>' +
                    '<li id="liLat2" class="liEven">50.4038</li>' +
                    '<li id="liLat3" class="liOdd">50.3367</li>' +
                    '<li class="liSum">.</li>' +
                '</ul>' +
            '</aside>' +
            '<aside class="asideLongList">' +
                '<h4>Longitude</h4>' +
                '<ul id="ulLongList">' +
                    '<li id="liLong1" class="liOdd">-114.0719</li>' +
                    '<li id="liLong2" class="liEven">-113.2622</li>' +
                    '<li id="liLong3" class="liOdd">-13.2380</li>' +
                    '<li class="liSum">.</li>' +
                '</ul>' +
            '</aside>' +
            '<aside class="asidePopList">' +
                '<h4>Population</h4>' +
                '<ul id="ulPopList">' +
                    '<li id="liPop1" class="liOdd">1,547,484</li>' +
                    '<li id="liPop2" class="liEven">1,917</li>' +
                    '<li id="liPop3" class="liOdd">20</li>' +
                    '<li id="idSum" class="liSum">1,549,421</li>' +
                '</ul>' +
            '</aside>' +
            '<aside class="asideSizeList">' +
                '<h4>Size</h4>' +
                '<ul id="ulSizeList">' +
                    '<li id="liSize1" class="liOdd">City</li>' +
                    '<li id="liSize2" class="liEven">Town</li>' +
                    '<li id="liSize3" class="liOdd">Hamlet</li>' +
                    '<li class="liSum">.</li>' +
                '</ul>' +
            '</aside>' +
            '<aside class="asideHemList">' +
                '<h4>N/S</h4>' +
                '<ul id="ulHemList">' +
                    '<li id="liHem1" class="liOdd">N</li>' +
                    '<li id="liHem2" class="liEven">N</li>' +
                    '<li id="liHem3" class="liOdd">N</li>' +
                    '<li class="liSum">.</li>' +
                '</ul>' +
            '</aside>' +
            '<aside class="asideMaxList">' +
                '<h4>Max N/S</h4>' +
                '<ul id="ulMaxList">' +
                    '<li id="liMax1" class="liOdd">N</li>' +
                    '<li id="liMax2" class="liEven">.</li>' +
                    '<li id="liMax3" class="liOdd">S</li>' +
                    '<li class="liSum">.</li>' +
                '</ul>' +
            '</aside>' +
        '</div>' +
    '</div>' +
'</section>';

    //
    // Initial setup required to handle the New City Name entry div.
    //
    // Expect the div Add City Name exists from original HTML. Then
    // delete it.
    //
    
    expect(document.getElementById("idAddCity")).not.toBeNull();
    idAddCity.parentElement.removeChild(idAddCity);
    expect(document.getElementById("idAddCity")).toBeNull();

});

test('130d: Async Test addCity and deleteCity JSX', async (done) => {
    document.body.innerHTML =
    '<section class ="sectionMain">' +
        '<h1>Welcome to the Community and City</h1>' +
    '   <div id=idAddCom class="divAddCom">' +
            'Enter Name of Community: <input id="inputNewCom" type=text>' +
            '<button id="btnCreateCom" type="button">Create</button>' +
            '<button id="btnCancelCom" type="button">Cancel</button>' +
        '</div>		' +
        '<div class="divComActions">' +
            '<div class="divCitySelect">' +
                'City Name: <select id=selectCity>' +
                    '<option value="srcSelect">Select City</option>' +
                    '<option value="srcAddCity">Add New City</option>' +
                    '<option value="srcCity1">Calgary</option>' +
                    '<option value="srcCity2">Vulcan</option>' +
                    '<option value="srcCity3">Kirkaldy</option>' +
                '</select>' +
            '</div>' +
            '<div class="divCityActions">' +
                'Population: <input id="inputAmt" type=number value=0>' +
                '<button id="btnAddCity" type="button">Add New City</button>' +
                '<button id="btnDelCity" type="button">Delete</button>' +
                '<button id="btnMovedIn" type="button">Moved In</button>' +
                '<button id="btnMovedOut" type="button">Moved Out</button>' +
            '</div>' +
            '<p id="messageArea" position="absolute"></p>' +
        '</div>' +
        '<div id=idAddCity class="divAddCity">' +
            'Enter Name of New City: <input id="inputNewCity" type=text>' +
			'Enter Population: <input id="inputNewPop" type=number>' +
            '<button id="btnCreateCity" type="button">Create</button>' +
			'Enter Latitude : <input id="inputNewLat" type=number>' +
			'Enter Longitude : <input id="inputNewLong" type=number>' +
            '<button id="btnCancelCity" type="button">Cancel</button>' +
        '</div>' +
        '<div id=idCitys class="divCommunity">' +
            '<h4 id="h4Community" class="h4ComTitle">Community: Canada</h4>' +
            '<div class="divCityList">' +
                '<section class="sectionCityList">' +
                    '<h4>City</h4>' +
                    '<ul id="ulCityList">' +
                        '<li id="liCity1" class="liOdd">Calgary</li>' +
                        '<li id="liCity2" class="liEven">Vulcan</li>' +
                        '<li id="liCity3" class="liOdd">Kirkaldy</li>' +
                        '<li id="idSumTxt" class="liSum">Totals</li>' +
                    '</ul>' +
                '</section>' +
                '<aside class="asideLatList">' +
                    '<h4>Latitude</h4>' +
                    '<ul id="ulLatList">' +
                        '<li id="liLat1" class="liOdd">51.0447</li>' +
                        '<li id="liLat2" class="liEven">50.4038</li>' +
                        '<li id="liLat3" class="liOdd">50.3367</li>' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideLongList">' +
                    '<h4>Longitude</h4>' +
                    '<ul id="ulLongList">' +
                        '<li id="liLong1" class="liOdd">-114.0719</li>' +
                        '<li id="liLong2" class="liEven">-113.2622</li>' +
                        '<li id="liLong3" class="liOdd">-13.2380</li>' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asidePopList">' +
                    '<h4>Population</h4>' +
                    '<ul id="ulPopList">' +
                        '<li id="liPop1" class="liOdd">1,547,484</li>' +
                        '<li id="liPop2" class="liEven">1,917</li>' +
                        '<li id="liPop3" class="liOdd">20</li>' +
                        '<li id="idSum" class="liSum">1,549,421</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideSizeList">' +
                    '<h4>Size</h4>' +
                    '<ul id="ulSizeList">' +
                        '<li id="liSize1" class="liOdd">City</li>' +
                        '<li id="liSize2" class="liEven">Town</li>' +
                        '<li id="liSize3" class="liOdd">Hamlet</li>' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideHemList">' +
                    '<h4>N/S</h4>' +
                    '<ul id="ulHemList">' +
                        '<li id="liHem1" class="liOdd">N</li>' +
                        '<li id="liHem2" class="liEven">N</li>' +
                        '<li id="liHem3" class="liOdd">N</li>' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideMaxList">' +
                    '<h4>Max N/S</h4>' +
                    '<ul id="ulMaxList">' +
                        '<li id="liMax1" class="liOdd">N</li>' +
                        '<li id="liMax2" class="liEven">.</li>' +
                        '<li id="liMax3" class="liOdd">S</li>' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
            '</div>' +
        '</div>' +
    '</section>';
    
    // 
    // Confirm API.
    //

    let data = await c130d.confirmAPIConnect (c130d.url);
    expect(data.status).toBe(200);

    //
    // Setup test Community to be Canada. Fill the Community with same
    // cities as HTML for testing. Community and City classes
    // have already been fully tested, as have the postData. Not re-testing
    // these. Just doing initial setup for testing the interface to HTML
    // and index.js.
    //

    data = await c920.postData(c130d.url + "clear");

    const canada = new community.Community ("Canada");
    data = await c130d.createAPICommunity (c130d.url, canada.cityList[0]);

    canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    data = await c130d.createAPICity (c130d.url, canada.cityList[1], canada.cityList[0]);

    canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);
    data = await c130d.createAPICity (c130d.url, canada.cityList[2], canada.cityList[0]);

    canada.createCity ("Kirkaldy", 50.3367, -13.2380, 20);
    data = await c130d.createAPICity (c130d.url, canada.cityList[3], canada.cityList[0]);

    //
    // Scenario: Attempt Delete button with nothing selected. Should receive error message.
    // No changes to things like total.
    //
    // Note Showing tests for Add City and Delete City together since they go together well.
    //

    canada.resetMessage();
    
    inputAmt.value = 0;
    selectCity.value = "srcSelect";

    data = await c130d.deleteCity(canada);

    expect(data.msgQueue[0]).toBe(`Please Select a City.`);
    expect(idSum.textContent).toBe("1,549,421");

    //
    // User now selects a city to delete
    //
    
    expect(canada.findKeyIndex(1)).toBe(1);
    expect(canada.cityList[1].name).toBe("Calgary");
    
    canada.resetMessage();

    selectCity.value = "srcCity1";    

    data = await c130d.deleteCity(canada);

    expect(canada.findKeyIndex(1)).toBe(-1);
    expect(canada.cityList[1].name).toBe("Vulcan");
    expect(canada.cityList[1].key).toBe(2);
    expect(canada.getPopulation(1)).toBe(1937);

    expect(data.msgQueue[0]).toBe("Calgary has been deleted.");
        // expect(messageArea.textContent).toBe(" Calgary has been deleted.");

    expect(idSum.textContent).toBe("1,937");

    // let dCity = {};
    // dCity.name = "Calgary";
    // dCity.key = 1;

    //
    // Did not actually use getAPICity in 130d, so did NOT migrate to 140d.
    //
    // data = await c130d.getAPICity (url, dCity);
    // expect(data.status).toEqual(400);

    data = await c130d.getAllAPI(url);
    expect(data.status).toEqual(200);

    expect(data[0].name).toBe("Canada");
    expect(data[1].name).toBe("Vulcan");
    expect(data[2].name).toBe("Kirkaldy");

    //
    // Select Menu and Input values get reset.
    //
    
    expect(selectCity.value).toBe("srcSelect");
    expect(inputAmt.value).toBe("0");

    selectCity.value = "srcCity1";
    inputAmt.value = 16;

    expect(document.getElementById("idAddCity")).not.toBeNull();

    //
    // removedivAddCity and createdivAddCity are not used anymore since 
    // calling React component handles this now.
    //

    // c130d.removedivAddCity();

    // expect(document.getElementById("idAddCity")).toBeNull();
    // expect(selectCity.value).toBe("srcSelect");
    // expect(inputAmt.value).toBe("0");
    
    //
    // Create it again simulating user has clicked the "Add New City"
    // button or selected from source account menu. This div is made
    // available to the user. Simulate them typing in a new city name
    // and pressing the Add New City "Create" button.
    //
    
    // c130d.createdivAddCity();
    // expect(document.getElementById("idAddCity")).not.toBeNull();
    
    //
    // First simulate them clicking the "Create" button without typing
    // a city name.
    //

    inputNewCity.value = "";
    inputAmt.value = 0;
    inputNewPop.value = 0;
    inputNewLat.value = 0;
    inputNewLong.value = 0;

    canada.resetMessage();
    await c130d.createNewCity(canada);
    expect(canada.msgQueue[0]).toBe(`Please input the new City name.`);

    inputNewCity.value = "Edmonton";

    canada.resetMessage();
    await c130d.createNewCity(canada);
    expect(canada.msgQueue[0]).toBe(`Please input the Latitude.`);
    
    inputNewLat.value = 53.5461;
    
    canada.resetMessage();
    await c130d.createNewCity(canada);
    expect(canada.msgQueue[0]).toBe(`Please input the Longitude.`);

    inputNewCity.value = "Edmonton";
    inputAmt.value = 222222;
    inputNewPop.value = 1461182;
    inputNewLong.value = -113.4938;

    data = await c130d.createNewCity(canada);
    expect(data.allLists[0]).toEqual(
        [
            <li id="liCity4" className="liOdd" key="0">Edmonton</li>, 
            <li id="liCity3" className="liEven" key="1">Kirkaldy</li>, 
            <li id="liCity2" className="liOdd" key="2">Vulcan</li>
        ]
    );

    let newKey = canada.cityList[canada.cityList.length-1].key;

    expect(newKey).toBe(4);
    expect(canada.getCityName(newKey)).toBe("Edmonton");
    expect(canada.getCityLatitude(newKey)).toBe(53.5461);
    expect(canada.getCityLongitude(newKey)).toBe(-113.4938);
    expect(canada.getCityPopulation(newKey)).toBe(1461182);

    // let newIndex = canada.findKeyIndex(newKey);
    //
    // Did not actually use getAPICity in 130d, so did NOT migrate to 140d.
    //
    // data = await c130d.getAPICity (url, canada.cityList[newIndex]);

    // expect(data.status).toEqual(200);

    // expect(data[0].name).toBe("Edmonton");
    // expect(data[0].population).toBe(1461182);
    // expect(data[0].latitude).toBe(53.5461);
    // expect(data[0].longitude).toBe(-113.4938);

    expect(selectCity.value).toBe("srcSelect");
    expect(inputAmt.value).toBe("0");

    inputNewCity.value = "Lethbridge";
    inputAmt.value = 92730;
    inputNewPop.value = 0; // If not set able to use the other input if user typed number in.
    inputNewLat.value = 49.6956;
    inputNewLong.value = -112.8451;

    data = await c130d.createNewCity(canada);
    expect(data.allLists[0]).toEqual(
        [
            <li id="liCity4" className="liOdd" key="0">Edmonton</li>, 
            <li id="liCity3" className="liEven" key="1">Kirkaldy</li>, 
            <li id="liCity5" className="liOdd" key="2">Lethbridge</li>,
            <li id="liCity2" className="liEven" key="3">Vulcan</li>
        ]
    );

    newKey = canada.cityList[canada.cityList.length-1].key;

    expect(newKey).toBe(5);
    expect(canada.getCityName(newKey)).toBe("Lethbridge");
    expect(canada.getCityLatitude(newKey)).toBe(49.6956);
    expect(canada.getCityLongitude(newKey)).toBe(-112.8451);
    expect(canada.getCityPopulation(newKey)).toBe(92730);


    // newIndex = canada.findKeyIndex(newKey);

    //
    // Did not actually use getAPICity in 130d, so did NOT migrate to 140d.
    //
    // data = await c130d.getAPICity (url, canada.cityList[newIndex]);

    // expect(data.status).toEqual(200);

    // expect(data[0].name).toBe("Lethbridge");
    // expect(data[0].population).toBe(92730);
    // expect(data[0].latitude).toBe(49.6956);
    // expect(data[0].longitude).toBe(-112.8451);

    expect(selectCity.value).toBe("srcSelect");
    expect(inputAmt.value).toBe("0");

    done();
});

test('130d: Async Test actionMoved', async (done) => {
    document.body.innerHTML =
    '<section class ="sectionMain">' +
        '<h1>Welcome to the Community and City</h1>' +
    '   <div id=idAddCom class="divAddCom">' +
            'Enter Name of Community: <input id="inputNewCom" type=text>' +
            '<button id="btnCreateCom" type="button">Create</button>' +
            '<button id="btnCancelCom" type="button">Cancel</button>' +
        '</div>		' +
        '<div class="divComActions">' +
            '<div class="divCitySelect">' +
                'City Name: <select id=selectCity>' +
                    '<option value="srcSelect">Select City</option>' +
                    '<option value="srcAddCity">Add New City</option>' +
                    '<option value="srcCity1">Calgary</option>' +
                    '<option value="srcCity2">Vulcan</option>' +
                    '<option value="srcCity3">Kirkaldy</option>' +
                '</select>' +
            '</div>' +
            '<div class="divCityActions">' +
                'Population: <input id="inputAmt" type=number value=0>' +
                '<button id="btnAddCity" type="button">Add New City</button>' +
                '<button id="btnDelCity" type="button">Delete</button>' +
                '<button id="btnMovedIn" type="button">Moved In</button>' +
                '<button id="btnMovedOut" type="button">Moved Out</button>' +
            '</div>' +
            '<p id="messageArea" position="absolute"></p>' +
        '</div>' +
        '<div id=idAddCity class="divAddCity">' +
            'Enter Name of New City: <input id="inputNewCity" type=text>' +
            '<button id="btnCreateCity" type="button">Create</button>' +
            '<button id="btnCancelCity" type="button">Cancel</button>' +
        '</div>' +
        '<div id=idCitys class="divCommunity">' +
            '<h4 id="h4Community" class="h4ComTitle">Community: Canada</h4>' +
            '<div class="divCityList">' +
                '<section class="sectionCityList">' +
                    '<h4>City</h4>' +
                    '<ul id="ulCityList">' +
                        '<li id="liCity1" class="liOdd">Calgary</li>' +
                        '<li id="liCity2" class="liEven">Vulcan</li>' +
                        '<li id="liCity3" class="liOdd">Kirkaldy</li>' +
                        '<li id="idSumTxt" class="liSum">Totals</li>' +
                    '</ul>' +
                '</section>' +
                '<aside class="asideLatList">' +
                    '<h4>Latitude</h4>' +
                    '<ul id="ulLatList">' +
                        '<li id="liLat1" class="liOdd">51.0447</li>' +
                        '<li id="liLat2" class="liEven">50.4038</li>' +
                        '<li id="liLat3" class="liOdd">50.3367</li>' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideLongList">' +
                    '<h4>Longitude</h4>' +
                    '<ul id="ulLongList">' +
                        '<li id="liLong1" class="liOdd">-114.0719</li>' +
                        '<li id="liLong2" class="liEven">-113.2622</li>' +
                        '<li id="liLong3" class="liOdd">-13.2380</li>' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asidePopList">' +
                    '<h4>Population</h4>' +
                    '<ul id="ulPopList">' +
                        '<li id="liPop1" class="liOdd">1,547,484</li>' +
                        '<li id="liPop2" class="liEven">1,917</li>' +
                        '<li id="liPop3" class="liOdd">20</li>' +
                        '<li id="idSum" class="liSum">1,549,421</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideSizeList">' +
                    '<h4>Size</h4>' +
                    '<ul id="ulSizeList">' +
                        '<li id="liSize1" class="liOdd">City</li>' +
                        '<li id="liSize2" class="liEven">Town</li>' +
                        '<li id="liSize3" class="liOdd">Hamlet</li>' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideHemList">' +
                    '<h4>N/S</h4>' +
                    '<ul id="ulHemList">' +
                        '<li id="liHem1" class="liOdd">N</li>' +
                        '<li id="liHem2" class="liEven">N</li>' +
                        '<li id="liHem3" class="liOdd">N</li>' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
                '<aside class="asideMaxList">' +
                    '<h4>Max N/S</h4>' +
                    '<ul id="ulMaxList">' +
                        '<li id="liMax1" class="liOdd">N</li>' +
                        '<li id="liMax2" class="liEven">.</li>' +
                        '<li id="liMax3" class="liOdd">S</li>' +
                        '<li class="liSum">.</li>' +
                    '</ul>' +
                '</aside>' +
            '</div>' +
        '</div>' +
    '</section>';
    
    // 
    // Confirm API.
    //

    let data = await c130d.confirmAPIConnect (c130d.url);
    expect(data.status).toBe(200);

    //
    // Setup test Community to be Canada. Fill the Community with same
    // cities as HTML for testing. Community and City classes
    // have already been fully tested, as have the postData. Not re-testing
    // these. Just doing initial setup for testing the interface to HTML
    // and index.js.
    //

    data = await c920.postData(c130d.url + "clear");

    const canada = new community.Community ("Canada");
    data = await c130d.createAPICommunity (c130d.url, canada.cityList[0]);

    canada.createCity ("Calgary", 51.0447, -114.0719, 1547484);
    data = await c130d.createAPICity (c130d.url, canada.cityList[1], canada.cityList[0]);

    canada.createCity ("Vulcan", 50.4038, -113.2622, 1917);
    data = await c130d.createAPICity (c130d.url, canada.cityList[2], canada.cityList[0]);

    canada.createCity ("Kirkaldy", 50.3367, -13.2380, 20);
    data = await c130d.createAPICity (c130d.url, canada.cityList[3], canada.cityList[0]);

    //
    // Scenario: Attempt Moved buttons with nothing selected. Should receive error message.
    // No changes to things like total.
    //
    // Note Showing tests for Moved In and Moved Out together since same function using a
    // parameter to decide which to perform.
    //

    canada.resetMessage();
    
    inputAmt.value = 0;
    selectCity.value = "srcSelect";
    
    data = await c130d.actionMoved("IN", canada);
    expect(canada.msgQueue[0]).toBe(`Please Select a City.`);
    expect(idSum.textContent).toBe("1,549,421");
    
    canada.resetMessage();

    data = await c130d.actionMoved("OUT", canada);
    expect(canada.msgQueue[0]).toBe(`Please Select a City.`);
    expect(idSum.textContent).toBe("1,549,421");

    //
    // Scenario: User next selects the city Calgary, but leaves the input amount as 0.
    // Should receive error message. No changes to things like total.
    //
    
    selectCity.value = "srcCity1";

    canada.resetMessage();

    data = await c130d.actionMoved("IN", canada);
    expect(canada.msgQueue[0]).toBe(`Please Input the Number of People Moving Which is NOT 0.`);
    expect(idSum.textContent).toBe("1,549,421");
 
    canada.resetMessage();
   
    data = await c130d.actionMoved("OUT", canada);
    expect(canada.msgQueue[0]).toBe(`Please Input the Number of People Moving Which is NOT 0.`);
    expect(idSum.textContent).toBe("1,549,421");

    //
    // Scenario: User next attempts a negative value $-1. Should receive error message. 
    // No changes to things like total.
    //
    
    inputAmt.value = -1;

    canada.resetMessage();
    
    data = await c130d.actionMoved("IN", canada);
    expect(canada.msgQueue[0]).toBe(`You May Only Move a Positive Number of People.`);
    expect(idSum.textContent).toBe("1,549,421");

    canada.resetMessage();
    
    data = await c130d.actionMoved("OUT", canada);
    expect(canada.msgQueue[0]).toBe(`You May Only Move a Positive Number of People.`);
    expect(idSum.textContent).toBe("1,549,421");
    
    //
    // Scenario: User now types in a value and attempts the Move buttons. Display action result.
    //
    
    inputAmt.value = 16;

    canada.resetMessage();
    
    data = await c130d.actionMoved("IN", canada);

    expect(canada.msgQueue[0]).toBe("16 have moved in. Population of Calgary is now 1,547,500.");
    
    //
    // Select Menu and Input values get reset.
    //
    
    expect(selectCity.value).toBe("srcSelect");
    expect(inputAmt.value).toBe("0");

    expect(data.allLists[3]).toEqual(
        [
            <li id="liPop1" className="liOdd" key="0">1,547,500</li>, 
            <li id="liPop3" className="liEven" key="1">20</li>, 
            <li id="liPop2" className="liOdd" key="2">1,917</li>
        ]
    );

    expect(canada.getCityPopulation(1)).toBe(1547500);
    expect(idSum.textContent).toBe("1,549,437");
    
    //
    // Did not actually use getAPICity in 130d, so did NOT migrate to 140d.
    //
    // data = await c130d.getAPICity (url, canada.cityList[1]);
    // expect(data.status).toEqual(200);

    // expect(data[0].name).toBe("Calgary");
    // expect(data[0].population).toBe(1547500);

    selectCity.value = "srcCity1";
    inputAmt.value = 1000;

    canada.resetMessage();
    
    data = await c130d.actionMoved("OUT", canada);

    expect(canada.msgQueue[0]).toBe("1,000 have moved out. Population of Calgary is now 1,546,500.");
    
    //
    // Select Menu and Input values get reset.
    //
    
    expect(selectCity.value).toBe("srcSelect");
    expect(inputAmt.value).toBe("0");

    expect(data.allLists[3]).toEqual(
        [
            <li id="liPop1" className="liOdd" key="0">1,546,500</li>, 
            <li id="liPop3" className="liEven" key="1">20</li>, 
            <li id="liPop2" className="liOdd" key="2">1,917</li>
        ]
    );

    expect(canada.getCityPopulation(1)).toBe(1546500);
    expect(idSum.textContent).toBe("1,548,437");
    expect(canada.getPopulation(1)).toBe(1548437);

    //
    // Did not actually use getAPICity in 130d, so did NOT migrate to 140d.
    //
    // data = await c130d.getAPICity (url, canada.cityList[1]);
    // expect(data.status).toEqual(200);

    // expect(data[0].name).toBe("Calgary");
    // expect(data[0].population).toBe(1546500);

    done();
});

test('130e: Async Test Object Reference', async (done) => {

    let data = await c920.postData(c130d.url + "clear");
    expect(data.status).toEqual(200);

    const canada = new community.Community ("Canada");
    data = await c130d.createAPICommunity (c130d.url, canada.cityList[0]);
    expect(data.status).toEqual(200);

    //
    // Create myCity as per instructions. Only creating within the community as per 130d.
    // Also updating the API with Key 1 as assigned by the Community Controller.
    //

    canada.createCity ("myCity", 51.0447, -114.0719, 1547484);
    data = await c130d.createAPICity (c130d.url, canada.cityList[1], canada.cityList[0]);
    expect(data.status).toEqual(200);

    //
    // Create myFav as per instructions. It is a direct assignment pointing at the same
    // address as myCity referenced in the community cityList array.
    //
    // Notice that the values like name, population and key are all the same in both
    // myCity and myFav. This is because they are the same key value pair. Both variables are
    // pointing to and referencing the same address.
    //

    let myFav = canada.cityList[1];

    expect(canada.cityList[1].name).toBe("myCity");
    expect(myFav.name).toBe("myCity");
    expect(canada.cityList[1].population).toBe(1547484);
    expect(myFav.population).toBe(1547484);
    expect(canada.cityList[1].key).toBe(1);
    expect(myFav.key).toBe(1);

    //
    // Change the population of myCity. The population appears to
    // change in myFav. But again it is just because both are pointing to
    // the value at the same address reference.
    //

    expect(canada.movedOutOfCity(1, 484)).toBe(1547000);
    expect(canada.cityList[1].population).toBe(1547000);
    expect(myFav.population).toBe(1547000);

    //
    // Update the population to the myCity city in the API using the key 1.
    //

    data = await c130d.updateAPICity(c130d.url, canada.cityList[1]);
    expect(data.status).toEqual(200);

    //
    // We have not yet attempted to add myFav yet to the API, but this is where
    // I can prove my code would reject the duplicate. Since myFav also has the
    // same key #1 as myCity, it will be rejected because you can not add a second
    // city with the same key. It rejects it with API status error 400.
    //

    data = await c130d.createAPICity (c130d.url, myFav, canada.cityList[0]);
    expect(data.status).toEqual(400);

    done();
});

class TestDummy {

    constructor() {
        window.ccComponent = this;
    }

    displayMessage = (msg) => {

        let tmpMsg = msg;
        return(tmpMsg);
        // this.setState({
        //     msgArea: tmpMsg,
        // });
    }
}