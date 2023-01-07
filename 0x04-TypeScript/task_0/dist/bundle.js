/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var stud1 = {
    firstName: 'Tommy',
    lastName: 'Ade',
    age: 10,
    location: 'Lagos',
};
var stud2 = {
    firstName: 'Grace',
    lastName: 'Ini',
    age: 15,
    location: 'Abuja',
};
// use of generic type
var studentsList = [stud1, stud2];
var keyArr = ['firstName', 'location'];
function generateThead(table) {
    var thead = table.createTHead();
    var row = thead.insertRow();
    for (var _i = 0, keyArr_1 = keyArr; _i < keyArr_1.length; _i++) {
        var key = keyArr_1[_i];
        var tableHead = document.createElement('th');
        var text = document.createTextNode(key);
        tableHead.appendChild(text);
        row.appendChild(tableHead);
    }
}
function generateTable(table, data) {
    data.forEach(function (studs) {
        var row = table.insertRow();
        for (var _i = 0, _a = Object.keys(studs); _i < _a.length; _i++) {
            var key = _a[_i];
            if (key === 'firstName' || key === 'location') {
                var cell = row.insertCell();
                var text = document.createTextNode(studs[key]);
                cell.appendChild(text);
            }
        }
    });
}
var table = document.createElement('table');
generateTable(table, studentsList);
generateThead(table);
document.body.appendChild(table);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBT0EsSUFBTSxLQUFLLEdBQVk7SUFDckIsU0FBUyxFQUFFLE9BQU87SUFDbEIsUUFBUSxFQUFFLEtBQUs7SUFDZixHQUFHLEVBQUUsRUFBRTtJQUNQLFFBQVEsRUFBRSxPQUFPO0NBQ2xCO0FBRUQsSUFBTSxLQUFLLEdBQVk7SUFDckIsU0FBUyxFQUFFLE9BQU87SUFDbEIsUUFBUSxFQUFFLEtBQUs7SUFDZixHQUFHLEVBQUUsRUFBRTtJQUNQLFFBQVEsRUFBRSxPQUFPO0NBQ2xCO0FBRUQsc0JBQXNCO0FBQ3RCLElBQU0sWUFBWSxHQUFtQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwRCxJQUFNLE1BQU0sR0FBRyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUM7QUFFeEMsU0FBUyxhQUFhLENBQUMsS0FBdUI7SUFDNUMsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRTtJQUVqQyxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFO0lBQzdCLEtBQWtCLFVBQU0sRUFBTixpQkFBTSxFQUFOLG9CQUFNLEVBQU4sSUFBTSxFQUFFO1FBQXJCLElBQU0sR0FBRztRQUNaLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQzlDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO1FBRXpDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO0tBQzNCO0FBQ0gsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLEtBQXVCLEVBQUUsSUFBZTtJQUU3RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztRQUNqQixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFO1FBQzdCLEtBQWtCLFVBQWtCLEVBQWxCLFdBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUU7WUFBakMsSUFBTSxHQUFHO1lBQ1osSUFBSSxHQUFHLEtBQUssV0FBVyxJQUFJLEdBQUcsS0FBSyxVQUFVLEVBQUU7Z0JBQzdDLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUU7Z0JBQzdCLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUVoRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQzthQUN2QjtTQUVGO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO0FBQzdDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDO0FBQ2xDLGFBQWEsQ0FBQyxLQUFLLENBQUM7QUFFcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBTdHVkZW50IHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGFnZTogbnVtYmVyO1xuICBsb2NhdGlvbjogc3RyaW5nO1xufVxuXG5jb25zdCBzdHVkMTogU3R1ZGVudCA9IHtcbiAgZmlyc3ROYW1lOiAnVG9tbXknLFxuICBsYXN0TmFtZTogJ0FkZScsXG4gIGFnZTogMTAsXG4gIGxvY2F0aW9uOiAnTGFnb3MnLFxufVxuXG5jb25zdCBzdHVkMjogU3R1ZGVudCA9IHtcbiAgZmlyc3ROYW1lOiAnR3JhY2UnLFxuICBsYXN0TmFtZTogJ0luaScsXG4gIGFnZTogMTUsXG4gIGxvY2F0aW9uOiAnQWJ1amEnLFxufVxuXG4vLyB1c2Ugb2YgZ2VuZXJpYyB0eXBlXG5jb25zdCBzdHVkZW50c0xpc3Q6IEFycmF5PFN0dWRlbnQ+ID0gW3N0dWQxLCBzdHVkMl07XG5jb25zdCBrZXlBcnIgPSBbJ2ZpcnN0TmFtZScsICdsb2NhdGlvbiddXG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGhlYWQodGFibGU6IEhUTUxUYWJsZUVsZW1lbnQpOiB2b2lkIHtcbiAgY29uc3QgdGhlYWQgPSB0YWJsZS5jcmVhdGVUSGVhZCgpXG5cbiAgY29uc3Qgcm93ID0gdGhlYWQuaW5zZXJ0Um93KClcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5QXJyKSB7XG4gICAgY29uc3QgdGFibGVIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKVxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrZXkpXG5cbiAgICB0YWJsZUhlYWQuYXBwZW5kQ2hpbGQodGV4dClcbiAgICByb3cuYXBwZW5kQ2hpbGQodGFibGVIZWFkKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFibGUodGFibGU6IEhUTUxUYWJsZUVsZW1lbnQsIGRhdGE6IFN0dWRlbnRbXSk6IHZvaWQge1xuXG4gIGRhdGEuZm9yRWFjaCgoc3R1ZHMpID0+IHtcbiAgICBjb25zdCByb3cgPSB0YWJsZS5pbnNlcnRSb3coKVxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHN0dWRzKSkge1xuICAgICAgaWYgKGtleSA9PT0gJ2ZpcnN0TmFtZScgfHwga2V5ID09PSAnbG9jYXRpb24nKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpXG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHVkc1trZXldKVxuXG4gICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGV4dClcbiAgICAgIH1cblxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpXG5nZW5lcmF0ZVRhYmxlKHRhYmxlLCBzdHVkZW50c0xpc3QpXG5nZW5lcmF0ZVRoZWFkKHRhYmxlKVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhYmxlKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=