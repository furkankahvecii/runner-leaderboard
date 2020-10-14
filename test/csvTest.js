const { assert } = require('chai')

const getCsvDatas = require('../csv')

describe("getCsvDatas", () => {

	it("should have users.csv and pace.csv data", async()=> {
        const csvData = await getCsvDatas("users.csv", "pace.csv");
        assert.deepEqual([
            {
              userid: '1',
              username: 'user1',
              age: '24',
              total_time: '25',
              distance: '5000',
              average_pace: '0.2'
            },
            {
              userid: '2',
              username: 'ahmet',
              age: '21',
              total_time: '24',
              distance: '4800',
              average_pace: '0.2'
            },
            {
              userid: '3',
              username: 'yunus',
              age: '28',
              total_time: '28',
              distance: '6000',
              average_pace: '0.2'
            },
            {
              userid: '4',
              username: 'john',
              age: '34',
              total_time: '40',
              distance: '10000',
              average_pace: '0.3'
            },
            {
              userid: '5',
              username: 'adam',
              age: '31',
              total_time: '12',
              distance: '2000',
              average_pace: '0.2'
            },
            {
              userid: '6',
              username: 'brian',
              age: '41',
              total_time: '42',
              distance: '10000',
              average_pace: '0.2'
            },
            {
              userid: '7',
              username: 'tyler',
              age: '26',
              total_time: '20',
              distance: '5000',
              average_pace: '0.3'
            },
            {
              userid: '8',
              username: 'ceren',
              age: '35',
              total_time: '21',
              distance: '5000',
              average_pace: '0.2'
            },
            {
              userid: '9',
              username: 'hasan',
              age: '43',
              total_time: '30',
              distance: '5000',
              average_pace: '0.2'
            },
            {
              userid: '10',
              username: 'selen',
              age: '29',
              total_time: '22',
              distance: '5000',
              average_pace: '0.2'
            },
            {
              userid: '11',
              username: 'diana',
              age: '45',
              total_time: '30',
              distance: '6000',
              average_pace: '0.2'
            },
            {
              userid: '12',
              username: 'thomas',
              age: '44',
              total_time: '28',
              distance: '4500',
              average_pace: '0.2'
            },
            {
              userid: '13',
              username: 'james',
              age: '39',
              total_time: '18',
              distance: '5000',
              average_pace: '0.3'
            },
            {
              userid: '14',
              username: 'janet',
              age: '36',
              total_time: '60',
              distance: '10000',
              average_pace: '0.2'
            }
          ], csvData);    
    })
    
    it("should only have users.csv data", async()=> {
        const csvData = await getCsvDatas(["users.csv"]);
        assert.deepEqual( [
            { userid: '1', username: 'user1', age: '24', average_pace: 'NaN' },
            { userid: '2', username: 'ahmet', age: '21', average_pace: 'NaN' },
            { userid: '3', username: 'yunus', age: '28', average_pace: 'NaN' },
            { userid: '5', username: 'john', age: '34', average_pace: 'NaN' },
            { userid: '6', username: 'adam', age: '31', average_pace: 'NaN' },
            { userid: '7', username: 'brian', age: '41', average_pace: 'NaN' },
            { userid: '8', username: 'tyler', age: '26', average_pace: 'NaN' },
            { userid: '9', username: 'ceren', age: '35', average_pace: 'NaN' },
            { userid: '10', username: 'hasan', age: '43', average_pace: 'NaN' },
            { userid: '11', username: 'selen', age: '29', average_pace: 'NaN' },
            { userid: '12', username: 'diana', age: '45', average_pace: 'NaN' },
            { userid: '13', username: 'thomas', age: '44', average_pace: 'NaN' },
            { userid: '14', username: 'james', age: '39', average_pace: 'NaN' },
            { userid: '15', username: 'janet', age: '36', average_pace: 'NaN' }
          ], csvData);
    })
    
    it("should be throw typeError", async()=> {
        try {
            const csvData = await getCsvDatas();
        } catch(err) {
            assert.equal(err,"Error: TypeError: Cannot read property 'length' of undefined")
        }
	})
})