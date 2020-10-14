'use strict';

const csv = require("csvtojson");
const folderName = "files/";

/**
 * // Function that reads csv file and returns json array
 * @param {String} csv file location
 */
const readFile = (csvFilePath) => {
    return new Promise((resolve, reject) => {
        csv()
        .fromFile(csvFilePath)
        .then(function(jsonArrayObj){
            resolve(jsonArrayObj)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

/**
 * // Function that takes the paths of the csv file, reads their contents and returns
 * @param {fileNames} array containing the locations of the csv file
 */

module.exports = async function getCsvDatas(...fileNames) {
    var resultData = [];

    // concurrency
    await Promise.all(fileNames.map(fileName => readFile(`${folderName}${fileName}`)))
    .then((results) => {
        
        const length = results[0].length;
        for(var i=0; i<length; i++){
            var temp = {};

            results.map((csv) => {
                temp = {...temp, ...csv[i]}
            })

            temp['average_pace'] = `${(temp['distance'] / temp['total_time'] / 1000).toFixed(1)}` ;
            resultData = [...resultData, temp];
        }
    })
    .catch((err) => {
       throw Error(err);
    })

    return resultData;
};