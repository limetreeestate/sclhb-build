/*jshint esversion: 6 */
const rxjs = require("rxjs");
const Observable = rxjs.Observable;
function igSearch() {
    const g = (a, callback = () => {}) => {
        return a;
    }
    let g_ob = Observable.bind(g)
    return g_ob("ASDDD");
}

igSearch().subscribe(
    res => console.log(res)
)