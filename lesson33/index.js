const subjects = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
};

// 1
function makeString(obj) {
  const keys = Object.keys(obj);
  const newString = keys.join(", ");
  console.log(`All subjects: ${newString}`);
}
//  2
function countStudents(obj) {
  const arr = Object.keys(obj);
  let res = 0;
  arr.forEach((key) => {
    let value = obj[key].students;
    res += value;
  });
  console.log(`Total students: ${res}`);
}

function countTeachers(obj) {
  const arr = Object.keys(obj);
  let res = 0;
  arr.forEach((key) => {
    let value = obj[key].teachers;
    res += value;
  });
  console.log(`Total teachers: ${res}`);
}

// 3
function averageStudents(obj) {
  const arr = Object.keys(obj);
  let res = 0;
  arr.forEach((key) => {
    let value = obj[key].students;
    res += value;
  });

  const keys = Object.keys(obj);
  const general = keys.length;
  const average = res / general;
  console.log(`Average number of students: ${average}`);
}

// 4
function makeArr(obj) {
  const arr = Object.entries(obj).map(([subj, v]) => ({ subj, ...v }));
  console.log(arr);
}

// 5
function sortByTeachers(obj) {
  const arr = Object.entries(obj).map(([subj, v]) => ({ subj, ...v }));

  arr.sort(function (a, b) {
    return b.teachers - a.teachers;
  });
  console.log(arr);
}

makeString(subjects);

countStudents(subjects);

countTeachers(subjects);

averageStudents(subjects);

makeArr(subjects);

sortByTeachers(subjects);
